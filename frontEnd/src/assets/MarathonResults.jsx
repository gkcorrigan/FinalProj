import React, { useEffect, useState } from "react";
import MarathonResultsList from "./MarathonResultsList"; 
import CreateForm from "./CreateForm"; 
import UpdateForm from "./UpdateForm"; 
import DeleteButton from "./DeleteButton"; 

const MarathonResults = () => {
  const onAddResult = (newResult) => {
    setResults([...results, newResult]);
  };

  const [results, setResults] = useState([]);

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

      <CreateForm onAddResult={onAddResult} /> {/* Render the CreateForm component */}
      <MarathonResultsList results={results} /> {/* Render the MarathonResultsList component */}
      <UpdateForm /> {/* Render the UpdateForm component */}
      <DeleteButton onDelete={onResultDelete} runnerID={results.runnerID} /> {/* Render the DeleteButton component */}
    </div>
  );
};

export default MarathonResults;