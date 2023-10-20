import React from "react";

const DeleteButton = ({onDelete, runnerID}) => {
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
    return (
        <button onClick={handleDelete}>Delete Result</button>
    );
};

export default DeleteButton;