import React, { useState } from "react";
import Header from "../../Common_Components/Header/Header";
import Sidebar from "../../Common_Components/Sidebar/Sidebar";


const Dashboard = () => {
    const [toggled, setToggled] = useState(false);

    const toggleChange = (value) => {
        setToggled(value);
        console.log('ssssssssssssssssss')
    }
    return (
        <div className="flex flex-col h-screen">
            <div className="bg-white drop-shadow-md">
                <Header toggleChange={toggleChange}/>
            </div>
            <div className=" absolute top-0 left-0 h-screen z-20">
        
                <Sidebar toggleChange={toggleChange} toggled={toggled}/>
            </div>
            <div className="grow bg-[#f9fbfe]">

            </div>
        </div>
    )
}

export default Dashboard;