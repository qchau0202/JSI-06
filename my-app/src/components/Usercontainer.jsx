// import React, {useState, useEffect} from "react";
// import UserItem from "./UserItem";
// import { Grid, Pagination, User } from "@nextui-org/react";

// const Usercontainer = () => {
//     const [users, setUsers] = useState([]) 
//     const [currentPage, setCurrentPage] = useState(1)

//     const onChangePageHandler = (page) => {
//         setCurrentPage(page)
//     }
    
//     useEffect(() => {
//         const getUsers = async() => {
//             const request = await fetch(`https://reqres.in/api/users?page=${currentPage}`)
//             const response = await request.json();
//             const data = response.data
//             setUsers(data)
//          }
//         getUsers()
//     }, [currentPage]) // Get data and check dependencies

//     return (
//         <>
//         <Grid.Container gap={2}>
//       {users.map((userObject) => {
//         return (
//           <Grid xs={4} key={userObject.id}>
//             <UserItem userInfo={userObject} />
//           </Grid>
//         );
//       })}
//     </Grid.Container>
//         <Pagination total={2} initialPage={1} onChange = {onChangePageHandler}></Pagination>
//         </>
//     )
    
// }
// export default Usercontainer


import React, { useState, useEffect } from "react";
import { Grid, Pagination, Container } from "@nextui-org/react";
import UserItem from "./UserItem";

const initialPage = 1;

const Usercontainer = () => {
  const [userReponse, setUserReponse] = useState(null);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const onChangePageHandler = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const getUsers = async () => {
      const request = await fetch(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      const response = await request.json();
      setUserReponse(response);
    };

    getUsers();
  }, [currentPage]);

  return (
    <Container>
      <Grid.Container gap={2}>
        {userReponse?.data.map((userObject) => {
          return (
            <Grid xs={4} key={userObject.id}>
              <UserItem userData={userObject} />
            </Grid>
          );
        })}
      </Grid.Container>
      <Pagination
        total={userReponse?.total_pages}
        initialPage={initialPage}
        onChange={onChangePageHandler}
      />
    </Container>
  );
};

export default Usercontainer;