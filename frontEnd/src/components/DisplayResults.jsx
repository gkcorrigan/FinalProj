import React from 'react';

const DisplayResults = ({ results }) => {
    return (
        <div>
            <h2 className='ListTitle'>Marathon Results List</h2>
            <table >
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
                            <td className='center-align'>{result.runnerID}</td>
                            <td className='center-align'>{result.firstName}</td>
                            <td className='center-align'>{result.lastName}</td>
                            <td className='center-align'>{result.city}</td>
                            <td className='center-align'>{result.state}</td>
                            <td className='center-align'>{result.gender}</td>
                            <td className='center-align'>{result.finishTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayResults;