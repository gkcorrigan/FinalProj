import React from 'react';

const DisplayResults = ({ results }) => {
    return (
        <div>
            <h2>Marathon Results List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Runner ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Gender</th>
                        <th>Finish Time</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result.runnerID}>
                            <td>{result.firstName}</td>
                            <td>{result.lastName}</td>
                            <td>{result.city}</td>
                            <td>{result.state}</td>
                            <td>{result.gender}</td>
                            <td>{result.finishTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayResults;