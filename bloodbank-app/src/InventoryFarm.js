import React from 'react' 
import Deletor from './Deletor'

export default function InventoryFarm ({entryList}) {
    return (
        <div>
        <h2>Inventory Farm</h2>
        <div>
            {entryList.map (entry => 
                <div key={entry.id}>
                    <div>
                        {entry.component}    
                        {entry.type}
                        <Deletor entry={entry}/>
                    </div>
                </div>
                )
            }        
        </div>
        </div>
    )
}