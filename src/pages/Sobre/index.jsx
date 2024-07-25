import styles from './Sobre.module.css'
import avatar from './images/avatar.png'

function Sobre (){
  return(
      <section className={styles.sobre}>
          <div className={styles.bio}>
            <img src={avatar} alt="Foto Avatar" className={styles.avatar}/>
            <div>
              <h2>Sobre</h2>
            </div>
          </div>
          <div className={styles.techs}>
            <h3>Tecnologias</h3>

          </div>
      </section>
  )
}
export default Sobre
