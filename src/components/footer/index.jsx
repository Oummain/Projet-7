import './footer.scss'
import Logo from '../../assets/LOGO_footer.svg'

export function Footer(){
    return(
       <div className='footer'>
        <img className='footer_logo' src={Logo} alt="" />
        <p className='footer_txt' >2020 Kasa. All right reserved</p>
       </div> 
    )
}