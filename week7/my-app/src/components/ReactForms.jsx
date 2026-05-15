import react , {useState, useEffect} from 'react';

function ReactForms(){
    const [name, setName]=useState('');
    const [submittedName, setSubmittedName]=useState('');


    const handleSubmit=(e)=>{
         e.preventDefault();
         setSubmittedName(name);
         setName(name='');
    }

    return(
    <>
    <div>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Enter Username'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
        </form>
        {submittedName && <p>Submitted name: {submittedName}</p>}
    </div>
    </>
    );
}

export default ReactForms;