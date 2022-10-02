import React from 'react' 

export default function Deletor ({entry}) {

    const deleteUnit = () => {
        entry.location = "quarantine"
    }
    return  (
        <button className="btn btn-danger" onClick={deleteUnit}>Destroy Unit</button>
    )
}