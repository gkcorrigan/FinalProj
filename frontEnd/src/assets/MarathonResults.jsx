import React, { useEffect, useState } from "react";
import DisplayResults from "./DisplayResults.jsx";
import CreateForm from "./CreateNewResult.jsx";
import UpdateResult from "./UpdateResult.jsx";
import DeleteButton from "./DeleteResult.jsx";

const MarathonResults = () => {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const onAddResult = (newResult) => {
    setResults([...results, newResult]);
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
      <h1>Marathon Results</h1>
      <CreateForm onAddResult={onAddResult} />
      {/* Render the CreateForm component */}
      <DisplayResults results={results} />
      {/* Render the MarathonResultsList component */}
      <UpdateResult
        result={selectedResult}
        onUpdateResult={(updatedData) => {
          
          setResults([...results]); // Update the results
          setSelectedResult(null); // Clear the selected result
        }}
      />
      {/* Render the UpdateForm component */}
      <DeleteButton
        onDelete={onResultDelete}
        runnerID={selectedResult ? selectedResult.runnerID : null}
      />
      {/* Render the DeleteButton component */}
    </div>
  );
};

export default MarathonResults;
