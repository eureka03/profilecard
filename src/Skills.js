import './details.css';

export default function Skills(props){
    return(
        <div className='skills' style={{backgroundColor:props.color}}>
            <span>{props.name}</span>
            <span>{props.emoji}</span>
        </div>
    ); 
}