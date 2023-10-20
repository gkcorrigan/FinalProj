import React, { useState } from "react";

const CreateForm = ({ onAddResult }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        gender: "",
        finishTime: "",
    });


const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await fetch("http://localhost:5543/api/results", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(formData),
        });
    if(response.status ===201){
        onAddResult(formData);
        setFormData({
            firstName: "",
            lastName: "",
            city: "",
            state: "",
            gender: "",
            finishTime:"", 
        });
    }
    } catch (error) {
        console.error("Error adding new marathon result",error);
    }
};

return (
    <div>
        <h2>Create a New Result</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            />

            <input 
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            />

            <input 
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            />

            <input 
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            />

            <input 
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Gender"
            />

            <input 
            type="text"
            name="finishTime"
            value={formData.finishTime}
            onChange={handleChange}
            placeholder="Finish Time"
            />
        </form>
    </div>
);
};

export default CreateForm;