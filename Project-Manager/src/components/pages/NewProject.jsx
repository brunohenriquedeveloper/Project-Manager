import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function Home(){
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    )
}

export default Home