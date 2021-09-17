import React from 'react';
import BirthdayCard from './BirthdayCard';






const BirthdayList=(props)=>{


    const renderBirthday=props.birthdays.map(birthday=>{
        return <BirthdayCard  contact={birthday} key={birthday.id}/>
        
    })
return(
        
            <div className="ui celled list" style={{margin:"0px 15px",maxHeight:"350px",overflow:"scroll",maxWidth:"250px"}}>
                {/* <h2>Many more Happy returns of the day</h2> */}
                <h2 className="right">{`${props.birthdays.length||0} birthdays today`}</h2>
                {renderBirthday}
            </div>
        
    
);
}

export default BirthdayList;