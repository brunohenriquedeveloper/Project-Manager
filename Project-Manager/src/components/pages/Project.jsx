import styles from './Project2.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Project() {

    const { id } = useParams()
    const cleanedId = id.trim()

    const [project, setProject] = useState({})
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${cleanedId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json()).catch(err => console.log(err)).then((data) => {
            setProject(data)
        })
        }, 300)

    }, [id])

    function toggleProjectForm(){ 
        setShowProjectForm(!showProjectForm)
    }

    return (

       <>
       {project.name?(
       <div className={styles.project_details}>
        <Container customClass="column">
        <div className={styles.details_container}>
            <h1>Projeto: {project.name}</h1>
            <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm? 'Editar Projeto' : 'Fechar'}

            </button>
            {!showProjectForm ? (
                <div className= {styles.project_info}>
                    <p>
                        <span>Categoria:</span> {project.category.name}
                    </p>
                    
                    <p>
                        <span>Total de Orçamento:</span> {project.budget}
                    </p>

                    <p>
                        <span>Total Utilizado:</span> R${project.cost}
                    </p>
                </div>
            ) : (
                <div className= {styles.project_info}>
                    
                </div>
            )}
        </div>
        </Container>

       </div>): <Loading />}
       </>
    )
}

export default Project