import React, {useState} from 'react';

const UpdateResult = ({ onUpdateResult}) => {
    const [formData, setFormData] = useState({
    });
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleUpdate = async (id, updatedData) => {
        try{
            const response = await fetch(`http://localhost:5543/api/results/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
            }    
);

            if (response.ok) {
                onUpdateResult(updatedData);
            } else {

            }
        } catch (error){
            console.error('Error updating marathon result', error);
        }
    };
        
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = formData.runnerID;

        handleUpdate(id, formData);
    };

    return (
        <div>
            <h2>Update Marathon Result</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Runner ID:
                    <input 
                    type='text'
                    name='runnerID'
                    value={formData.runnerID}
                    onChange={handleChange} />
                </label>

                <label>
                    First Name:
                    <input 
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange} />
                </label>

                <label>
                    Last Name:
                    <input 
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange} />
                </label>

                <label>
                    City:
                    <input 
                    type='text'
                    name='city'
                    value={formData.city}
                    onChange={handleChange} />
                </label>

                <label>
                    State:
                    <input 
                    type='text'
                    name='state'
                    value={formData.state}
                    onChange={handleChange} />
                </label>

                <label>
                    Gender:
                    <input 
                    type='text'
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange} />
                </label>

                <label>
                    Finish Time:
                    <input 
                    type='text'
                    name='finishTime'
                    value={formData.finishTime}
                    onChange={handleChange} />
                </label>

                <button type='submit'>Update Result</button>
            </form>
        </div>
    );
};


export default UpdateResult