import './style.css'
import pizza from '../../assets/pizzas/Pizza.png'
import { Link } from 'react-router-dom'

const Pagina404 = () => {
    return(
        <section className="section-404"> 
               <div className='content-404'>
               <div className='container-404'>
               <div>
                    <h1>4</h1>
                </div>
                <div>
                    <img className='img-404' src={pizza} alt="Foto de uma pizza" />
                </div>
                <div>
                    <h1>4</h1>
                </div>
               </div>
               <div>
                <h2>Página Não encontrada</h2>
                <p>Parece que essa fatia de piza foi furtada 😂</p>
               </div>
               <Link to="/">Voltar ao Início</Link>
               </div>
        </section>
    )
}

export default Pagina404