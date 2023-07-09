import Hobbies from "./Hobbies";

function Person(props){
    console.log('props', props);
    props = props.props;
        return (
        <div key={props.key}>
            <p>Learn some information about this person {props.name}</p>
            {/* {/* <p>{p.name.length > 8 ? p.name.slice(0,6): p.name}</p> */}
            <h3> {props.age > 18 ? "please go vote": "you must be 18" }</h3> 
            <Hobbies props={props.hobbies}/>
        </div>
    );

};

export default Person;