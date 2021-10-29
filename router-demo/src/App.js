import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';


const HomePage = (props) =>{
console.log(props)
  return (  <div>
    <Link to="/topics">Topic</Link>
    <button onClick={()=>{props.history.push("/topics")}}>Go to Topics</button>
    <h1>Homepage</h1>
    </div>
  )
}



const Topic = (props) =>{
  console.log(props)
  return (
  <div>
  <h1>Topic</h1>
  <Link to={`${props.match.url}/13`}>Topic 13</Link>
  <Link to={`${props.match.url}/14`}>Topic 14</Link>
  <Link to={`${props.match.url}/15`}>Topic 15</Link>
  </div>
)}


const TopicList = (props) =>{
  console.log(props)
  return (
  <div>
  <h1>Topic List page : {props.match.params.topicId}</h1>
 
  </div>
)}



function App() {
  return (
    <div>
   
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/topics" component={Topic}/>
    <Route path="/topics/:topicId" component={TopicList}/>
    </div>
  );
}

export default App;
