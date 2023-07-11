import logo from './logo.svg';
import './App.css';
import Person from './Person';

function App() {
  let list = [{name:"Erick", age:37 , date:"Today", message:"Message1", key:"1", hobbies:["guitar", "bike", "bungee jumping"]},
                {name:"AbbisayyOrtizHaro", age:12, date:"Yesterday", message:"Message2", key:"2", hobbies:["soap operas", "gossip"]},
                {name:"Cuca", age:21,  date:"Tomorrow", message:"Message3", key:"3", hobbies:["sumo wrestling", "videogames", "crypto investing", "call of duty (ps5)"]},]

  return (
    <div>
       <ul>{list.map(l =><li key={l.key}> <Person props={l}/></li>)}</ul>
    </div>
  );
}

export default App;
