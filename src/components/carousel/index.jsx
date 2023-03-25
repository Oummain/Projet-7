import { useEffect, useState } from "react"
import './carousel.scss'
import   v_left  from '../../assets/Vector_left.png'
import   v_right  from '../../assets/Vector_right.png'


export function Carousel({a}) {
    const [index, setIndex] = useState(0)
    const pictures= a.pictures
    const prec = () => setIndex((index - 1 + pictures.length) % pictures.length)
    const suiv = () => setIndex((index + 1) % pictures.length)


    // useEffect(()=>{
    //     alert('salut')
    // },[index])


    return (
        <div className="carousel">
            
            <img className="carousel_img" src={pictures[index]} alt="" />
            <img className="carousel_left" src={v_left} onClick={prec} alt="" />
            <img className="carousel_right" src={v_right} onClick={suiv} alt="" />
            <span className="carousel_compteur">{index}/{pictures.length}</span>
        </div>



    )
}
































































