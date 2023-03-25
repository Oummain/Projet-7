import './banner.scss'
import banner_home from '../../assets/banner_home.png'
import banner_about from '../../assets/banner_about.png'
import { useLocation } from 'react-router-dom'

export function Banner({children }) {
let location= useLocation()


const url = location.pathname === '/' ? { backgroundImage: `url(${banner_home})`} : { backgroundImage: `url(${banner_about})`}

    return (
        <div key={url} style={ url } className='banner'>
            {/* <img className='banner_img' src={banner} alt="" /> */}
            <h2  className='banner_title'>{children}</h2>
        </div>

    )
}


// const style = {
//     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`
// }