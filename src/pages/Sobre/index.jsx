import styles from './Sobre.module.css'
import avatar from './images/avatar.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import node from './images/icon-node.svg'
import react from './images/icon-react.svg'
import sql from './images/icon-sql.svg'

function Sobre (){
  return(
      <section className={styles.sobre}>
          <div className={styles.bio}>
            <img src={avatar} alt="Foto Avatar" className={styles.avatar}/>
            <div className={styles.textos}>
              <h2>Sobre</h2>
              <p>Sou<span> Giovanni Gilles Panella</span><br/> <strong>Engenheiro de Software, Desenvolvedor Full Stack</strong> e<br/> professor
                dos Cursos de Tecnologia da Informarção e Automação industrial.
              </p>
              <p>Sou Proprietário da TAGG Sistemas e Trabalho com desenvolvimento desde 2020</p>
              <p>Desenvolvo projetos conforme a solicitação do Cliente</p>
              <p>Busco desenvolver uma aplicação dinânica e intuitiva, com o foco na 
                experiência do usuário.<br/>
              </p>
            </div>
          </div>
          <div className={styles.techs}>
            <h3>Tecnologias</h3>
              <div className={styles.icones}>
                  <img src={html} alt='Ícone do HTML'/>
                  <img src={css} alt='Ícone do CSS'/>
                  <img src={js} alt='Ícone do JavaScript'/>
                  <img src={react} alt='Ícone do react'/>
                  <img src={node} alt='Ícone do NODE'/>
                  <img src={sql} alt='Ícone do SQL'/>
              </div>
          </div>
      </section>
  )
}
export default Sobre
