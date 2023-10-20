import express from "express";
import {
  getSingleMarathonResult,
  getMarathonResults,
  insertMarathonResult,
  updateMarathonResult,
  deleteMarathonResult,
  getRequestLogs
} from "../controllers/results.controller.js";


const requestLogsRouter = express.Router();

requestLogsRouter.get('/', async (req, res) => {
  try {
    const requestLogs = await getRequestLogs.getRequestLogs();
    res.json(requestLogs);
  } catch (error) {
    console.error('Internal Error fetching request logs:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default requestLogsRouter;
