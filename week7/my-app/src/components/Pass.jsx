import react from 'react';
import {useState, useEffect} from 'react';

function Pass(){
     const [password, setPassword]=useState('');
     const [strength, setStrength]=useState('');

     const handleChange=(e)=>{
           setPassword(e.target.value);
           setStrength(checkStrength(password));
     }

     const checkStrength=(pwd)=>{
        let score=0;
        
        if(pwd.length>=8) score++;
        if(/[A-Z]/.test(pwd)) score++;
        if(/[a-z]/.test(pwd)) score++;
        if(/[0-9]/.test(pwd)) score++;
        if(/[^A-Za-z0-9]/.test(pwd)) score++;

        switch(score){
           case 5:
                return "Very Strong";
           case 4:
                return "Strong";
           case 3:
                return "Medium";
           case 2:
                return "Weak";
           case 1:
                return "Very Weak";
        };
     };

     return (
        <>
        <div>
        <input
        type='password'
        value={password}
        onChange={handleChange}
        placeholder='Enter the password'
        />
        {strength && 
        <p>Password Strength:{strength}</p>}

        </div>
        </>
     );
}


export default Pass;