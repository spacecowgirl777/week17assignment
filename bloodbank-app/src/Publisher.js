import React from 'react' 

export default function Publisher ({entry}) {

    const publishUnit = () => {
        if (entry.location === "WIPs") {
            entry.location = "farm"
        }
    }

    return (
        <button className="btn btn-success" onClick={publishUnit}>Send to Inventory</button>
    )


}