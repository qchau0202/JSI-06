import React from "react";
import UserItem from "./UserItem";
import data from "../mockData/userData"
import { Grid } from "@nextui-org/react";

const Usercontainer = () => {
    const eachUser = data.map((item,index)=> 
    <Grid xs = {4}>
    <UserItem key = {index} userInfo = {item}/>
    </Grid>)

    return (
      <Grid.Container gap={2}>
          {eachUser}
      </Grid.Container>
    )
}
export default Usercontainer