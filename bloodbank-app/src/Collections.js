import React, { useState } from 'react' 


export default function Collections ({onSubmit}) {

    const [componentValue, setComponentValue] = useState("")
    const [typeValue, setTypeValue] = useState("")

    const handleComponent = (event) => setComponentValue(event.target.value);
    const handleType = (event) => setTypeValue(event.target.value);

    const handleWIPSubmit = (event) => {
        event.preventDefault();
        const item = {
            location: "WIPs",
            component: componentValue,
            type: typeValue,
            modifiers: " "
        }
        onSubmit(item)
        setComponentValue("");
        setTypeValue("");
    }

    const handleFarmSubmit = (event) => {
        event.preventDefault();
        const item = {
            location: "farm",
            component: componentValue,
            type: typeValue
        }
        onSubmit(item)
        setComponentValue("");
        setTypeValue("");
    }

    return (
        <div>
        <h2>Collections</h2>
        <div>
        <form>
            <input type="text" placeholder="RBCs, plasma, or platelets" value={componentValue} onChange={handleComponent} />
            <input type="text" placeholder="e.g. O+, AB=, A=, B+" value={typeValue} onChange={handleType} />
            <button className="btn btn-primary" onClick={handleWIPSubmit}>Send to Processing</button>
            <button className="btn btn-primary" onClick={handleFarmSubmit}>Put in Inventory</button>
        </form> 
        </div>
        </div>

    )
}