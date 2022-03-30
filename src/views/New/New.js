import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './New.css';
import AutorForm from '../../components/AutorForm/AutorForm';


export default () => {
    const [name, setName] = useState( '' ); 
    const [nameError, setNameError] = useState( '' );
    const [isCreate, setIsCreate] = useState( false );

    const onSubmitHandler = autor => {
        axios.post( 'http://localhost:8000/api/autors/new', autor )
            .then( () => {
                setName( '' );
                setNameError( '' );
                setIsCreate( true );
            })
            .catch( err => {
                try{ setNameError( err.response.data.errors.name.message ); }
                catch(err) { setNameError( '' ); };
            })
    };

    return (
        <div className='new'>
            {isCreate ? <Redirect to='/'  /> : <h1>Favorite authors</h1>}
            <Link  to={`/`} className='submit-link'>
                <div className='link'>
                    Home
                </div>
            </Link>
            <p>
                Add a new author
            </p>
            <AutorForm initialName={name} onSubmitProp={onSubmitHandler} initialNameError={nameError} />
        </div>
    );
};