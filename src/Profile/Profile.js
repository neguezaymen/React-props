
import react from 'react';

const  Profile =(props)=>{
    return(
        <div>
            <h1 style={{color:'red',fontSize:'80px',fontFamily:'Parisienne'}}>{props.fullName} </h1> 
            <h1 style={{fontSize:'40px',fontFamily:'Parisienne'}}>{props.bio}</h1>   
            <h1 style={{fontSize:'40px',fontFamily:'Parisienne'}}>{props.profession}</h1> 
            <div>{props.children}</div>
        </div>
    );
}

export default Profile;