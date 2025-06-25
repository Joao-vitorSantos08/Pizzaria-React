import './style.css'
import CardPizza from '../../cardPizza'  
import pizza01  from '../../../assets/pizzas/pizza01.png'
import pizza02 from '../../../assets/pizzas/pizza02.png'
import pizza03 from '../../../assets/pizzas/pizza03.png'

const HighlightsSection = () => {
    return (
        <section className="highlights-section">

            <h3>Nossos Destaques</h3>

            <div className="cards">
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Palmito" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>                                                       
                <CardPizza pizzaImage={pizza02} pizzaName="Pizza de Cogumelos" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>                                                       
                <CardPizza pizzaImage={pizza03} pizzaName="Pizza de cogumelos com queijo Vegano" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>                                                       
            </div>
            
        </section>
    )
}

export default HighlightsSection