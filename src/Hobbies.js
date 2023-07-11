function Hobbies(props){
        console.log('props', props);

    return (
        <ul>
            {props.props.map(hobbie => <li>{hobbie}</li>)}
        </ul>
    );

};

export default Hobbies;