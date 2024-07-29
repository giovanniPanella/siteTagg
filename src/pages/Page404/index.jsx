
import sytles from './Page404.module.css'

function Page404(){
    return(
         <>
            <h2 className={sytles.titulo2}>Algo deu Errado!</h2>
            <div className={sytles.textos}>
                <span className={sytles.texto_grande}>404</span>
                <strong className={sytles.texto_vermelho}> Página não Localizada!</strong>
            </div>
        </>
    )
}

export default Page404