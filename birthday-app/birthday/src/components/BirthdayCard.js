import user from '../images/images.jpeg';


const BirthdayCard=(props)=>{
    const {name,image,dob} = props.contact;
    const Age = new Date().getFullYear()+1 - Number.parseInt(dob.split("/")[2]);
    
    return(
        <div className="item" style={{padding:"10px 5px"}}>
            <img className="ui avatar image" src={image||user} alt={user||"user"}/>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{Age} years</div>
            </div>
            <i className={`birthday cake icon right floated`} style={{color:"red"}} onClick={(e)=>{
                e.target.style.color="#06b42c"
            }}/>

            
        </div>
    )
}

export default BirthdayCard;