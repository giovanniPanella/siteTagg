
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home (){
  return(

      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>Olá Somos<br/>
          <span>TAGG Sistemas</span><br/>
          Fazemos sua ideia virar Tecnologia ;)
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>Saiba Mais</Link>
        </div>
        <figure>
          <img className={styles.img_home} src="/imagemHome.svg" alt="Imagem de Home" />
        </figure>

      </section>

  )
}
export default Home
