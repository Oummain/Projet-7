import { Link } from 'react-router-dom'
import './card.scss'




export function Card({hab}) {
    return (
        
        <div  className='card'>
            <Link to={`/logement/${hab.id}`}>
                <img className='card_img' src={hab.cover} alt={hab.title} />
                <h3 className='card_title'>{hab.title}</h3>
            </Link>
        </div>

    )
}

