
import styles from './Contatos.module.css'
import { GoMail } from 'react-icons/go'
import { BsYoutube,BsGithub,BsWhatsapp, BsLinkedin } from 'react-icons/bs'


function Contato (){
  return(
        <section className={styles.contato}>
          <h2>Contato</h2>
          <h3>Entre em Contato</h3>
          <p> Para que possamos conversar mais sobre.</p>
          <div className={styles.icones}>
            <a href='mailto:ggpanella@gmail.com' target='_blank' rel='noopener noreferrer'>
              <GoMail className={styles.icone}/>
            </a>  
            
           <a href=' https://www.youtube.com/@gigiopanella' target='_blank' rel='noopener noreferrer'>
              <BsYoutube className={styles.icone}/>
            </a> 
            <a href='https://github.com/giovanniPanella' target='_blank' rel='noopener noreferrer'>
              <BsGithub className={styles.icone}/>
            </a> 
            <a href='https://www.linkedin.com/in/giovanni-gilles-panella-9a101739/' target='_blank' rel='noopener noreferrer'>
              <BsLinkedin className={styles.icone}/>
              </a> 
              <a href='https://wa.me/5542999646825' target='_blank' rel='noopener noreferrer'>
              <BsWhatsapp className={styles.icone}/>
              </a> 
          </div>
        </section>
  )
}
export default Contato
