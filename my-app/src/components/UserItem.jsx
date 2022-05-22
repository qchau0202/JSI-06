import React from "react";
import {User, Card, Text} from "@nextui-org/react"
const UserItem = (props) => {
    let info = props.userInfo
    console.log(info)
    return (
        <Card shadow>
        <User
        src= {info.avatar}
        name= {`${info.first_name} ${info.last_name}`}
        />
        <Text h4>{info.email}</Text>
        </Card>
    )
}
export default UserItem