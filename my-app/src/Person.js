const Person = (props) => {
    console.log("props", props);
  
    return (
      <div>
        <img src={props.personal.avatar} />
        <h2>
          Fullname: {props.personal.first_name} {props.personal.last_name}
        </h2>
        <h2>Email: {props.personal.email}</h2>
      </div>
    );
  };
  
  export default Person;