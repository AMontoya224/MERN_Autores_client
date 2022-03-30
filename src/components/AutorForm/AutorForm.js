import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AutorForm.css';



export default props => {
    const { initialName, onSubmitProp, initialNameError } = props;
    const [name, setName] = useState( initialName );

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp( {name} );
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='inp-container'>
                <label htmlFor='name' className='inp'>
                    <input type='text' id='name' className='inp-input' placeholder=' ' value={name} 
                           onChange = {e => setName( e.target.value )} />
                    <span className='inp-label'>Name</span>
                    <span className='inp-focus'></span>
                    <p className='inp-error'>{initialNameError}</p>
                </label>
            </div>
            <div className='row' >
                <Link  to={`/`} >
                    <button type='submit' className='submit-form'>
                        Cancel
                    </button>
                </Link>
                <button type='submit' className='submit-form'>
                    Submit
                </button>
            </div>
        </form>
    );
};