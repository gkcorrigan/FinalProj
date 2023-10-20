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
        // onAddResult(formData);
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
    <div className="form-container">
        <h2>Missing Result? Add It Here!</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-field"> 
            <input 
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            />
            </div>

            <div className="input-field"> 
            <input 
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            />
            </div>

            <div className="input-field"> 
            <input 
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            />
            </div>

            <div className="input-field"> 
            <input 
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            />
            </div>
            <div className="input-field"> 
            <input 
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Gender"
            />
            </div>

            <div className="input-field"> 
            <input 
            type="text"
            name="finishTime"
            value={formData.finishTime}
            onChange={handleChange}
            placeholder="Finish Time"
            />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>
);
};

export default CreateForm;