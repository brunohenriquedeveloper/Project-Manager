import {useEffect, useState} from 'react'

import styles from "./ProjectForm.module.css"
import Input from "../form/input"
import Select from "../form/Select"
import Submit from "../form/Submit"

function ProjectForm({btnText}){

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((resp) => resp.json()).then((data) => {
        setCategories(data)
    }).catch((err) => console.log(err))
    }, [])

    

    return (
        <form className={styles.form}>
           <Input
            type="text" 
           text="Nome do Projeto" 
           name="name"
           placeholder="Insira o nome do Projeto"

           />

            <Input
            type="number" 
           text="Orçamento do Projeto" 
           name="budget"
           placeholder="Insira o orçamento total"

           />

            <Select name = "category_id" text="Selecione a categoria" options={categories}/>

            <Submit text = {btnText}/>
            
        </form>
    )
}

export default ProjectForm