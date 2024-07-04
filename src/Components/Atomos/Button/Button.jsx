import '../Button/Button.css'; // Ajusta la ruta según tu estructura de archivos y nombre correcto del archivo CSS

// eslint-disable-next-line react/prop-types
const Button = ({ name,className }) => { // Corrige la declaración para recibir props
  return (
    <button className={className}>
      {name}
    </button>
  );
};

export default Button;
