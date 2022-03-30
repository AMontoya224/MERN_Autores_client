import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AutorTable.css'


export default props => {
    const { removeFromDom } = props;

    const deleteAutor = ( autorID ) => {
        axios.delete( 'http://localhost:8000/api/' + autorID + '/delete' )
            .then( () => {
                removeFromDom( autorID )
            })
    };

    return (
        <div className='autorTable'>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
                {props.autors.map( ( autor, idx ) => {
                    return(
                        <tr key={idx} className='autor'>
                            <td>{autor.name}</td>
                            <td>
                                <div className='row'>
                                    <Link className='product-link' to={`/edit/${autor._id}`} >
                                        <button className='submit-table' >
                                            Edit
                                        </button>
                                    </Link>
                                    <button className='submit-table' onClick={ ()=>{deleteAutor( autor._id )}} >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )}
                )}
            </table>
        </div>
    )
}