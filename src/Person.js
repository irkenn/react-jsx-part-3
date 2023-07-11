import Hobbies from "./Hobbies";

function Person(props){ //destructuring of props
    console.log('props', props);
    props = props.props;
        return (
        <div>
            <p>Learn some information about this person {props.name}</p>
            <p>{props.name.length > 8 ? props.name.slice(0,6): props.name}</p>
            <h3> {props.age > 18 ? "please go vote": "you must be 18" }</h3> 
            <Hobbies props={props.hobbies}/>
        </div>
    );

};

export default Person;