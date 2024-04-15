import React, { useEffect, useState } from 'react';
import "./Table.css";

function Table() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/661d437aacd3cb34a838ea74")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setList(data.record.mood_data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <table className="table table-striped" style={{ color: 'white', borderColor: '#65d46e' }}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Mood</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.mood}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
