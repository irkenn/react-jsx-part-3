function Hobbies(props){
        console.log('props', props);

    return (
        <ul>
            {props.props.map(h => <li>{h}</li>)}
        </ul>
    );

};

export default Hobbies;