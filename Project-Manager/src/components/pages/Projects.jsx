import Message from '../layout/message'
import { useLocation } from 'react-router-dom'
import styles from './Project.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
function Projects(){

    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    return ( 
    <div className={styles.project_container}>
       
          <div className={styles.title_container}>
            <h1>Meus Projetos</h1>
            <LinkButton to= "/newproject" text="Criar Projeto" />
            <a href="#">novo projeto</a>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass="start">
            <p>Projetos...</p>
            </Container>
  </div>
         )
}

export default Projects