import Submit from "../form/Submit"
import styles from "./Contact.module.css"
import Input from "../form/input"
import contactImg from '../../img/Contact-img.jpg';

function Contact(){

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value })
    }


    return (
        <div className={styles.conteiner_Contact}>
        <div className={styles.conteiner_form}>
        <form onSubmit={Submit} className={styles.contact_form}>
            <h2>Entre em Contato:</h2>
              <Input
            type="text" 
           name="name"
           placeholder="Insira o seu nome"
           handleOnChange={handleChange}

           />

           <Input
            type="email" 
           name="name"
           placeholder="Insira o seu E-mail"
           handleOnChange={handleChange}

           />

           <Input
            type="text" 
           name="name"
           placeholder="Sua Mensagem"
           handleOnChange={handleChange}

           />
           
            <Submit text = "Enviar"/>
        </form>
         </div>
        <div className={styles.Contact_img}>
            <img src={contactImg} alt="Imagem do contato" />
        </div>
       
        </div>
    )
}

export default Contact