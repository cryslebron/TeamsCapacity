import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Capacity per day</th>
                <th>PTO/Holiday</th>
                <th>Available Hours</th>
                <th>Development Hours</th>
                <th>Scrum Hours</th> 
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.title}</td>
                <td>{row.time}</td>
                <td>{row.pto}</td>
                <td>{row.time*10-row.pto}</td>
                <td>{(row.time*10-row.pto)*0.70}</td>
                <td>{Math.round((row.time*10-row.pto)*0.30 * 100) / 100}</td><br/>
                <button onClick={() => props.removeCharacter(index)}>Delete</button>
            </tr>
        );
    });

   

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}

export default Table;