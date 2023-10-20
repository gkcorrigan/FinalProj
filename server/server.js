import express from "express";
import cors from "cors";
import config from "./config/index.js";
import router from "./routes/index.js";
import query from "./config/db.query.js";
import requestLogsRouter from "./routes/requestLogs.routes.js";
import "./server.js";



const newServer = express();

newServer.use(cors());
newServer.use(express.json());

const logRequest = async (req, res, next) => {
  try {
    const method = req.method;
    const endpoint = req.originalUrl;

    await query('INSERT INTO request_logs (method, endpoint) VALUES (?,?)', [method, endpoint]);
    next();
  } catch (error) {
    next(error);
  }
};



newServer.use(logRequest);


newServer.use("/api", router);

newServer.use("/api/request-logs", requestLogsRouter);



newServer.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });

  if (err.name == "NotFoundError") {
    res.status(404).send('No Error Found')
  } else {
    res.status(500).send('Internal Server Error')
  }
});

const port = config.port || 5000;
newServer.listen(config.port, () => {
  console.log(`Server listening on port ${port}...`);
});