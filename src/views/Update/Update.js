import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './Update.css';
import AutorForm from '../../components/AutorForm/AutorForm';


function Update( props ){
    const _id = props.match.params.id;
    const [name, setName] = useState( '' ); 
    const [nameError, setNameError] = useState( '' ); 
    const [isLoading, setLoading] = useState( false );
    const [isUpdate, setIsUpdate] = useState( false );

    useEffect(() => {
        axios.get( 'http://localhost:8000/api/autors/' + _id )
            .then( res => {
                setName( res.data.name );
                setLoading( true );
            })
    }, []);

    const onSubmitUpdate = autor => {
        axios.put( 'http://localhost:8000/api/' + _id + '/edit', autor)
        .then( () => {
            setName( '' );
            setNameError( '' );
            setIsUpdate( true );
        })
        .catch( err => {
            try{ setNameError( err.response.data.errors.name.message ); }
            catch(err) { setNameError( '' ); };
        })
    };

    if ( !isLoading ) {
        return <></>;
    };

    return (
        <div className='update'>
            {isUpdate ? <Redirect to='/'  /> : <h1>Favorite authors</h1>}
            <Link  to={`/`} className='submit-link'>
                <div className='link'>
                    Home
                </div>
            </Link>
            <p>
                Edit this author
            </p>
            <AutorForm initialName={name} onSubmitProp={onSubmitUpdate} initialNameError={nameError} />
        </div>
    );
};

export default Update;