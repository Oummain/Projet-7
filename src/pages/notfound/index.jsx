import { Link } from 'react-router-dom'
import { Nav } from '../../components/nav'
import './notfound.scss'

export function NotFound(){
    return(

        <div className='notfound'>
            <Nav></Nav>
            <div className='notfound_bloc' >
                <h1 className='notfound_bloc_title'>404</h1>
                <p className='notfound_bloc_txt'>Oops ! La page que vous recherchez n'existe pas.</p>
            </div>
            <Link className='notfound_link' to={'/'}>Retourner sur la page d'accueil</Link>
            
        </div>
    )
}