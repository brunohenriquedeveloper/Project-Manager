import styles from "./ProjectForm.module.css"
import Input from "../form/input"
import Select from "../form/Select"
import Submit from "../form/Submit"

function ProjectForm({btnText}){
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

            <Select name = "category_id" text="Selecione a categoria"/>

            <Submit text = {btnText}/>
            
        </form>
    )
}

export default ProjectForm