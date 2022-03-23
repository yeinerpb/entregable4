import React, { useState } from 'react';
import Swal from 'sweetalert2';
import UsersForm from './UsersForm';

const UsersList = ({users, setUserSelected, deleteUser}) => {
    const [showForm, setShowForm] = useState(false);

    const handleDelete = (id) => {
        Swal.fire({
            title: '¿estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'advertencia',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteUser(id)
              Swal.fire(
                '¡Eliminado!',
                'Su archivo ha sido eliminado.',
                'éxito'
              )
            }
          })
    }

    


    return (
        <div className='card'>
            <ul className='users-list'>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <h3>{user.first_name} {user.last_name} </h3>
                            <p>{user.email}</p>
                            <p>{user.birthday}</p>
                            <button onClick={() => setUserSelected(user)}><i className="fa-solid fa-pencil"></i></button>
                            <button onClick={() => handleDelete(user.id)}><i className="fa-solid fa-trash"></i></button>
                        </li>

                    ))

                }

            </ul>
        </div>
           
        
    );
};

export default UsersList;