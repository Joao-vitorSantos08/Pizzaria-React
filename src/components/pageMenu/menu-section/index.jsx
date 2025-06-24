import './style.css'
import pizza01 from '../../../assets/pizzas/pizza01.png'
import pizza02 from '../../../assets/pizzas/pizza02.png'
import CardPizza from '../../cardPizza'

const MenuSection = () => {
    return (
        <section className="cardapio-section">

            <h2>Cardápio Completo</h2>
            <div className="menu-grid">
            <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Palmito" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>
            <CardPizza pizzaImage={pizza02} pizzaName="Pizza de Cogumelos" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>  
            <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Palmito" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>
            <CardPizza pizzaImage={pizza02} pizzaName="Pizza de Cogumelos" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>  
            <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Palmito" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>
            <CardPizza pizzaImage={pizza02} pizzaName="Pizza de Cogumelos" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>  
            <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Palmito" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>
            <CardPizza pizzaImage={pizza02} pizzaName="Pizza de Cogumelos" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>  
            <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Palmito" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>
            <CardPizza pizzaImage={pizza02} pizzaName="Pizza de Cogumelos" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>  
            <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Palmito" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>
            <CardPizza pizzaImage={pizza02} pizzaName="Pizza de Cogumelos" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>  
            <CardPizza pizzaImage={pizza01} pizzaName="Pizza de Palmito" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>
            <CardPizza pizzaImage={pizza02} pizzaName="Pizza de Cogumelos" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>  
            <CardPizza pizzaImage={pizza02} pizzaName="Pizza de Cogumelos" pizzaIngredients="Tradicional, com bastante sabor crocâcia"/>  
            </div>
        </section>
    )
}

export default MenuSection