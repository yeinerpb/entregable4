
import './App.css';
import UsersList from './componets/UsersList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UsersForm from './componets/UsersForm';



function App() {
  const[users, setUsers ] = useState([]);
  const [userSelected, setUserSelected ] = useState(null);
 
  useEffect(() => {
      axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsers(res.data))
    }, [])


    const getUsers = () => {
      axios.get ( 'https://users-crud1.herokuapp.com/users/')
        .then(res => setUsers(res.data))
    }

    /*const selectUser = user => setUserSelected(user);*/

    const deleteUser = id =>{
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(()=> getUsers())
    } 
  return (
    <div className="App">
      <UsersForm getUsers ={getUsers} userSelected = {userSelected} setUserSelected={setUserSelected}/>
      <UsersList users={users} setUserSelected={setUserSelected} deleteUser={deleteUser}/>
      
    </div>
  );
}

export default App;
