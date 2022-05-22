import React from "react";
import { Avatar, Checkbox, Card } from "@nextui-org/react";
import { pictureUsers } from "../mockData/mockData";
import '../css/Demo.css'
const DemoNextUi = () => {
    // Users
    const eachUser = pictureUsers.map((user) => 
    <Avatar src = {user.src} color = {user.color} bordered zoomed pointer size='xl' />)
    // Users
    return (
        <div className="container">
            <Card className="card" bordered shadow={false} hoverable css={{ mw: "400px" }}>
            {eachUser}
            </Card>
        </div>
    )
}
export default DemoNextUi