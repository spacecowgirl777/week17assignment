import React from 'react' 
import Modifications from './Modifications'
import Publisher from './Publisher'

export default function Processing ({entryList}) {

    return (
        <div>
        <h2>Processing</h2>
        <div>
            {entryList.map(entry => 
                <div key={entry.id}>
                    <div>
                        {entry.component}
                        {entry.type}
                        {entry.modifiers}
                        <Modifications entry={entry}/>
                        <Publisher entry={entry}/>
                    </div>
                </div>
                )
            }           
        </div>
        </div>
    )
}