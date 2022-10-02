import React from 'react'


export default function Modifications ({entry}) {

    const irradiateUnit = () => {
        entry.modifiers += "irradiated"
    }

    const freezeUnit = () => {
        if (entry.component === "RBCs" || entry.component === "plasma")
        entry.modifiers += "frozen"
    }

    const cryoprecipitateUnit = () => {
        if (entry.component === "plasma" && !entry.modifiers.includes("frozen"))
        entry.modifiers += "cryoprecipitated"
    }


    return (
        <div>
        <button className="btn btn-primary" onClick={irradiateUnit}>irradiate</button>
        <button className="btn btn-primary" onClick={freezeUnit}>freeze</button>
        <button className="btn btn-primary" onClick={cryoprecipitateUnit}>cryoprecipitate</button>
        </div>
    )
}