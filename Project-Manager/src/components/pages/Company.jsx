import styles from "./Company.module.css"
import companyImg from '../../img/Company-img.jpg';

function Company(){
    return(
        <div className={styles.conteinerCompany}>

            <div className={styles.leftCompany}>
            <h4>Onde tudo começou</h4>
            <h2>Tornando o Mundo Mais Organizado!</h2>
            <p>Em 2023, um grupo de desenvolvedores apaixonados por tecnologia decidiu criar uma plataforma inovadora para gerenciar projetos de forma eficiente e colaborativa. Com o objetivo de simplificar a gestão de tarefas e melhorar a comunicação entre equipes, nasceu o Project Manager.</p>
            </div>

            <div className={styles.rightCompany}>
            <div className={styles.imgCompany}>
            <img src={companyImg} alt="Imagem da empresa" />
            </div>

            <div className={styles.DataCompany}>

            <div className={styles.databox}>
            <h3>2.5</h3>
            <h4>Anos de Experiência</h4>
            </div>

            <div className={styles.databox}>
            <h3>+17k</h3>
            <h4>Projetos Gerenciados</h4>
            </div>

            
            <div className={styles.databox}>
            <h3>+150</h3>
            <h4>Avaliações Positivas</h4>
            </div>

            <div className={styles.databox}>
            <h3>+1.630</h3>
            <h4>Usuários Ativos</h4>
            </div>
            </div>

            </div>
        </div>
    ) 
}

export default Company