import './App.css'
import React, { useState } from 'react'
import Navigator from './Navigator'
import { Route, Routes } from 'react-router-dom'
import Collections from './Collections'
import Processing from './Processing'
import InventoryFarm from './InventoryFarm'

export default function App() {
  const [processList, setProcessList] = useState([
    {
        id: 0,
        component: "plasma",
        type: "O+",
        modifiers: ""
    }
])
const [farmList, setFarmList] = useState([
  {
      id: 0,
      component: "RBCs",
      type: "AB=",
      modifiers: "irradiated"

  },
  {
      id:1,
      component: "platelets",
      type: "A+",
      modifiers: " "
  }
])

const addEntry = (item) => {
  const entry = JSON.stringify(item);
  if (entry.location === "WIPs") {
    console.log(entry)

  }
  else if (entry.location === "farm") {
    setFarmList(item)


  }

}


  return (
    <div className="container">
      <Navigator />
      <Routes>
        <Route path="/intake" element={<Collections onSubmit={addEntry}/>}/>
        <Route path="/processing" element={<Processing entryList={processList}/>}/>
        <Route path="/farm" element={<InventoryFarm entryList={farmList}/>}/> 
      </Routes>
    </div>
  );
}

