import { useState } from "react";
import "./styles.css";

export default function App() {
  var [userStuff, setUserStuff] = useState("");

  function userStuffHandler(event) {
if(event.target.name==="name"){
    userStuff = event.target.value;
    setUserStuff(userStuff);
    const uName= event.target.value;
    console.log(uName);
  }
  else if(event.target.name==="email"){
    const uEmail= event.target.value;
    console.log(uEmail);
  }
  else if(event.target.name==="pnumber"){
    const uPnumber= event.target.value;
    console.log(uPnumber);

  }}
  function submitButtonHandler(event){
  // console.log(uName,uEmail,uPnumber);

  }
  return (
    <div className="App">
      <h1>Hello {userStuff}</h1>
      <input placeholder="NAME" name="name" type="text"onChange={userStuffHandler}></input><br/>
      <input placeholder="EMAIL" name="email"  type="email"onChange={userStuffHandler}/><br/>
      <input placeholder="PHONE NUMBER" name="pnumber"type="number"onChange={userStuffHandler}></input><br/>
      <button onClick={submitButtonHandler}>SUBMIT</button>
    </div>
  );
}
