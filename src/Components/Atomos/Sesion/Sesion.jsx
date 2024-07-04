
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Sesion = ({ name }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '-1px',
        marginLeft: '1101px',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Link to='/Registro' style={{ textDecoration: 'none' }}>
        <button
          type="button"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'black',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Sesion;
