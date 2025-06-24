import './style.css'

const FormContact = () => {
    return (
        <form className="contato-form">
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu e-mail" required />
            <textarea placeholder="Sua mensagem" rows="5" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormContact