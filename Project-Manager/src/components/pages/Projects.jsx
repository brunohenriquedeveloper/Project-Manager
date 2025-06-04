import Message from '../layout/message'
import { useLocation } from 'react-router-dom'
import styles from './Project.module.css'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import { useState, useEffect } from 'react'

function Projects(){

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    useEffect(() =>{

        setTimeout(() => {
            fetch('http://localhost:5000/projects',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        } ).then(resp => resp.json()).then(data => {
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
            .catch(err => console.log(err))
        }, 300)

        
    }, [])

    return ( 
    <div className={styles.project_container}>
       
          <div className={styles.title_container}>
            <h1>Meus Projetos</h1>
            <LinkButton to= "/newproject" text="Criar Projeto" />
            <a href="#">novo projeto</a>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass="start">
            {projects.length > 0 && projects.map((project) => {
              return(<ProjectCard 
                name={project.name}
                id={project.id}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                />)  
            })}
            {!removeLoading && <Loading/>}
            {removeLoading && projects.length === 0 && (
                <p>Não há Projetos Cadastrados!</p>
            )}
            </Container>
  </div>
         )
}

export default Projects