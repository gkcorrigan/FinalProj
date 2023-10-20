import query from "../config/db.query.js"
 // get all marathon results
 
 export const getSingleMarathonResult = async (id) => {
  return query(`SELECT * FROM countymarathon WHERE runnerID = ?`, [id]);
 }
 export const getMarathonResults = async () => {
   return query('SELECT * FROM countymarathon');
  };
  
  // insert a new marathon result
  export const insertMarathonResult = async (data) => {
    return query (`INSERT INTO countymarathon SET ?`, [data]);
  };
  
  
//make a change to a result in the marathon data
  export const updateMarathonResult = async (id, data) => {
    return query("UPDATE countymarathon SET ? WHERE runnerID =?", [data,id])
  }
//delete a peice of data in the marathon result 
  export const deleteMarathonResult = async (id) => {
    return query("DELETE FROM countymarathon WHERE runnerID =?", [id]);
  }
  
  export const getRequestLogs = async() => {
    return query("SELECT * FROM request_logs");
  };
  // module.exports = {
  //   getSingleMarathonResult,
  //   getMarathonResults,
  //   insertMarathonResult,
  //   updateMarathonResult,
  //   deleteMarathonResult,
  //   getRequestLogs
  // };







