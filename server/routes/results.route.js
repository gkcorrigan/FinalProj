import express from "express";
import * as ResultsController from "../controllers/results.controller.js";
import crypto from "crypto";




const newServer = express.Router();

newServer.get('/api/request-logs', async (req, res) => {
  try {
    const requestLogs = await ResultsController.getRequestLogs();
    res.json(requestLogs);
  } catch(error) {
    console.error('Internal Error fetching request logs:', error);
    res.status(500).send('Internal Server Error');
  }

  });

newServer.get('/:id?', async (req, res) => {
    try {
      const id = req.params.id;
      let data;

      if (id) {
        data = await ResultsController.getSingleMarathonResult(id);
      } else {
        data = await ResultsController.getMarathonResults();
      }
      res.json(data);

    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
function generateID(){
return crypto.randomUUID()
}
  newServer.post('/', async (req, res) => {
    try {
      let newMarathonResult = req.body;
      newMarathonResult.runnerId = generateID();
      console.log(newMarathonResult);
      const resultId = await ResultsController.insertMarathonResult(newMarathonResult);
      res.status(201).json({ id: resultId });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  newServer.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
    
      const updatedResult = await ResultsController.updateMarathonResult(id, req.body);
      res.json(updatedResult);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  newServer.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedResult = await ResultsController.deleteMarathonResult(id);
      res.json(deletedResult);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  

export default newServer;