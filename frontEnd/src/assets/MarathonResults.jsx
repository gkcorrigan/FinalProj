import React, { useEffect, useState } from "react";
import DisplayResults from "./DisplayResults";
import CreateForm from "./CreateForm";
import UpdateResult from "./UpdateResult";
import DeleteButton from "./DeleteButton";

const MarathonResults = () => {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);

  const onAddResult = (newResult) => {
    setResults([...results, newResult]);
  };

  const onResultDelete = () => {};

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
