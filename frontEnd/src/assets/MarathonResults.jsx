import React, { useEffect, useState } from "react";
import DisplayResults from "../components/DisplayResults";
import CreateForm from "../components/CreateNewResult";
import UpdateResult from "../components/UpdateResult";
import DeleteButton from "../components/DeleteResult";
import '../App.css'

const MarathonResults = () => {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const onAddResult = (newResult) => {
    setResults([...results, newResult]);
    console.log("New result added:", newResult);
  };

  const onResultDelete = async(runnerID) => {
    try {
      const response = await fetch(`http://localhost:5543/api/results/${runnerID}`, {
        method: "DELETE",
      });

      if(response.ok) {
        const updatedResults = results.filter((result) => result.runnerID !== runnerID);
        setResults(updatedResults);
      } else {
        console.error("Error deleting marathon result");
      }
    } catch (error) {
      console.error("Error deleting marathon result", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5543/api/results");
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching marathon results", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="marathon-header">
      <h1>2023 County Marathon Results</h1>
      </div>

      <div className="marathon-results">
      
      {/* Render the CreateForm component */}
      <DisplayResults results={results} />
      {/* Render the MarathonResultsList component */}
      </div>
      <UpdateResult
        result={selectedResult}
        onUpdateResult={(updatedData) => {
          
          setResults([...results]); // Update the results
          setSelectedResult(null); // Clear the selected result
        }}
      />
          <CreateForm onAddResult={onAddResult} />
      {/* Render the UpdateForm component */}
      <h2>Delete Race Result</h2>
      <DeleteButton
        onDelete={onResultDelete}
        runnerID={selectedResult ? selectedResult.runnerID : null}
      />
      {/* Render the DeleteButton component */}
      
    </div>
  );
};

export default MarathonResults;
