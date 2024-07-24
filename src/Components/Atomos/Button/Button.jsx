import '../Button/Button.css'; // Ajusta la ruta según tu estructura de archivos y nombre correcto del archivo CSS

// eslint-disable-next-line react/prop-types
const Button = ({ name,className, onClick }) => { 
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;

