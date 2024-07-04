import "../Card/Card.css"; 

// eslint-disable-next-line react/prop-types
const Card = ({ src, name, precio }) => {
    return (
        <div className="card-container">
            <img src={src} alt={name} className="card-image" />
            <div className="card-content">
                <h2>{name}</h2>
                <p>${precio}</p>
                <button className="card-button">Comprar</button>
            </div>
        </div>
    );
};

export default Card;
