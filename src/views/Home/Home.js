import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import AutorTable from '../../components/AutorTable/AutorTable';


export default () => {
    const [autors, setAutors] = useState( [] );
    const [loaded, setLoaded] = useState( false );

    const [iconTheme, setIconTheme] = useState( false );
    const changeTheme = () => {
        document.body.classList.toggle( 'dark-theme-variables' );
        setIconTheme( !iconTheme );
    };

    useEffect( ()=>{
        axios.get( 'http://localhost:8000/api/autors' )
            .then( res=>{
                setAutors( res.data );
                setLoaded( true );
            });
    },[autors] );

    const removeFromDom = autorId => {
        setAutors( autors.filter( autor => autor._id !== autorId ) );
    };

    if ( !loaded ) {
        return <></>;
    };

    return (
        <div className='home'>
            <h1>
                Favorite authors
            </h1>
            <span className='material-icons theme-toggler' onClick={changeTheme}>{iconTheme ? "light_mode" : "dark_mode"}</span>
            <Link to={`/new`} >
                <div className='link'>
                    Add an author
                </div>
            </Link>
            <p>
                We have quotes by:
            </p>
            {loaded && <AutorTable autors={autors} removeFromDom={removeFromDom} />}
        </div>
    );
};