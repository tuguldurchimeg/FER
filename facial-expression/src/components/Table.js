import React, { useEffect, useState } from "react";
import "./Table.css";
import happy from "./assets/happy.svg";
import sad from "./assets/sad.svg"
import anxious from "./assets/anxious.svg"
import bored from "./assets/bored.svg"
import motivated from "./assets/motivated.svg"
import tired from "./assets/tired.svg"
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
    <div className="table-body">
      <table className="table" style={{ color: 'white', borderColor: '#65d46e' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Mood</th>
            <th>Emotion</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{ item.mood === "happy" ? <img src={happy} alt="Happy" /> : 
                    item.mood==="sad" ? <img src={sad}/> :
                    item.mood==="motivated" ? <img src={motivated}/> :
                    item.mood==="bored" ? <img src={bored}/> :
                    item.mood==="anxious" ? <img src={anxious}/> : 
                    item.mood==="tired" ? <img src={tired}/>:
                    null
          }</td>
          <td>{item.mood}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
