import './style.css'

const CardPizza = ({pizzaImage, pizzaName, pizzaIngredients}) => {
    return (
        <div className="card">
            <img src={pizzaImage} />
            <h4>{pizzaName}</h4>
            <p>{pizzaIngredients}</p>
        </div>
    )
}

export default CardPizza