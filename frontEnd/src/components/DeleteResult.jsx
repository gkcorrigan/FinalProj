import React, {useState} from "react";

const DeleteButton = ({onDelete}) => {
    const [runnerID, setRunnerID] = useState("");

    const handleDelete = async () => {
try {
    const response = await fetch(`http://localhost:5543/api/results/${runnerID}`,{
        method: "DELETE",
    });
    if (response.ok){
        onDelete(runnerID);
    } else {
        console.error("Error deleting marathon result");
    }
} catch (error) {
    console.error("Error deleting marathon result", error);
}
    };

    return (<div>
        <input type="text"
        placeholder="Enter Runner ID"
        value={runnerID}
        onChange={(e) => setRunnerID(e.target.value)}
        />
    
        <button onClick={handleDelete}>Delete Result</button>
        </div>
    );
};

export default DeleteButton;