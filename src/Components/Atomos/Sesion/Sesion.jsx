// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
const Sesion = ({ name, userName }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginTop: '-1px',
                marginLeft: '1109px',  // Esto parece un valor muy específico, considera usar estilos más flexibles
                padding: '2px',
                borderRadius: '10px',
                backgroundColor: '#f0f0f0',
            }}
        >
            <Link to='/Registro' style={{ textDecoration: 'none' }}>
                <button
                    type="button"
                    style={{
                        padding: '10px 23px',
                        fontSize: '16px',
                        backgroundColor: 'black',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        
                    }}
                >
                    {userName}
                </button>
            </Link>
        </div>
    );
};

export default Sesion;
