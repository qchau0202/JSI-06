import React from "react";
import { Avatar, Checkbox } from "@nextui-org/react";
import { pictureUsers } from "../mockData/mockData";
const DemoNextUi = () => {
    // Users
    const eachUser = pictureUsers.map((user) => 
    <Avatar src = {user.src} color = {user.color} bordered zoomed pointer/>)
    // Users
    return (
        <div>
            {eachUser}
            <Checkbox lineThrough={true} defaultSelected={true}>Do homework</Checkbox>
        </div>
    )
}
export default DemoNextUi