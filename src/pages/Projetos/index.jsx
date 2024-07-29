import { useEffect, useState } from "react"
import Card from "../../components/Card"
import styles from './Projetos.module.css'
import axios from 'axios';



function Projetos (){
  const [repositories, setRepositories] = useState([])
  const token ='' 
  const userName = 'giovanniPanella'
  
  
  useEffect(()=>{
    const buscarRepositorios =async()=>{
      //const response = await fetch()
      try {
        const response = await axios.get(`https://api.github.com/users/${userName}/repos?sort=created&direction=desc`, {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        setRepositories(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(setRepositories)
    buscarRepositorios();
  },[])
  
  return(
      <section className={styles.projetos}>

          <h2>Projetos</h2>
          {
            repositories.length>0? (
              <section className={styles.lista}>
              {
                repositories.map((repo)=>(
                  <Card 
                  key={repo.id} 
                  name={repo.name} 
                  description={repo.description} 
                  html_url={repo.html_url} 
                  
                  />
                ))
              }
            </section>
            ):(<p>Carregando Respositórios..</p>)
          }
        </section>
  )
}
export default Projetos
