import axios from 'axios';
import React, { useEffect, useState } from 'react';


const UsersForm = ({getUsers, userSelected, setUserSelected}) => {

    const [ first_name, setFirst_name ] = useState("");
    const [ last_name, setLast_name ] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword ] = useState("")
    const [ birthday, setBirthday] = useState("");
    

    useEffect(() =>{
        if(userSelected){
            setFirst_name( userSelected.first_name );
            setLast_name( userSelected.last_name );
            setEmail( userSelected.email );
            setPassword( userSelected.password );
            setBirthday( userSelected.birthday);
        }
        
    }, [userSelected])
    
    const submit = e => {
        e.preventDefault();
        const user = {
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            birthday: birthday
        }
        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
            .then(() =>{
                getUsers()
                setUserSelected(null)
            } );
        } else{
            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => {
                 getUsers();
                 setFirst_name("");
                 setLast_name("");
                 setEmail("");
                 setPassword("");
                 setBirthday("");
             })
             .catch(error => console.log(error.response))
            }
 
        }
    

    
    return (


        <form onSubmit={submit}>

            <div className='name'>
                <div className='input-container'>
                    <label htmlFor="first_name"><i class="fa-solid fa-user"></i></label>
                    <input
                        type="text"
                        onChange={e => setFirst_name(e.target.value)}
                        value={first_name}
                        placeholder="first name"
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="last_name"></label>
                    <input
                        type="text"
                        onChange={e => setLast_name(e.target.value)}
                        value={last_name}
                        placeholder="last name"
                    />
                </div>
            </div>
            <div className='data'>
                <div className='input-container'>
                    <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                    <input
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder="email"
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                    <input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder="password"
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="birthday"><i class="fa-solid fa-cake-candles"></i></label>
                    <input
                        type="date"
                        onChange={e => setBirthday(e.target.value)}
                        value={birthday}
                    />
                </div>
            </div>

            <button className='button-selected'>upload</button>

        </form>
    );
};

export default UsersForm;