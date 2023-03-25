import { useLoaderData, useParams } from "react-router-dom";
import { Carousel } from "../../components/carousel";
import { Dropdown } from "../../components/dropdown";

import { Tag } from "../../components/tag";
import './logement.scss'
import StarRed from "../../assets/star-red.png"
import StarGrey from "../../assets/star-grey.png"

export function LogementPage() {
    const apartment = useLoaderData()
    // let params = useParams()
    // const apartment = apartments.find(apartment => apartment.id === params.id)
    console.log(apartment)
    const rating = apartment.rating

    // const a = []
    // const b = Array(5).map((x, index) => {
    //     const rating = apartment.rating
    //     index < rating ? a.add(index) : none
    // })

    // const c = [...Array(5)]

    // console.log(a)
    // console.log(b)
    // console.log(c)
    return (

        <div className="logement">
            <Carousel a={apartment}></Carousel>

            <div className="logement_presentation">

                <div className="bloc">
                    <h1 className="title">{apartment.title}</h1>
                    <p className="location">{apartment.location}</p>
                    <div className="tags">{apartment.tags.map(tags => (<Tag key={tags} tags={tags}></Tag>))}</div>
                </div>

                <div className='bloc2'>
                    <div className='loueur'>
                        <p className='loueur_name'>{apartment.host.name}</p>
                        <img className='loueur_img' src={apartment.host.picture} alt="" />
                    </div>
                    <div className="star">
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <img key={index} src={ratingValue <= rating ? StarRed : StarGrey} alt="star" />
                            )
                        })}
                    </div>


                </div>
            </div>


            <div className="dropdowns">
                <Dropdown title="Description"  >{apartment.description}</Dropdown>
                <Dropdown title='Equipement' >
                    <ul>{apartment.equipments.map(l => (<li key={l}>{l}</li>))}</ul>
                </Dropdown>
            </div>

        </div>
    )
}

export async function loader({ params }) {
    const apartments = (await import('../../data/logements.json')).default
    return apartments.find(apartment => apartment.id === params.id)
}
// export async function loader() {
//     return (await import("../../data/logements.json")).default
// }


// const Rating = ({hostRate}) => {
//  
//     const fullStars = Array(5).fill(<img src={StarRed} alt='' className='redStar'/>)
//     const emptyStars = Array(5).fill(<img src={StarGrey} alt='' className='greyStar'/>)
//     return (
//             <div className='ratingStars'>
//                 {fullStars.slice(5-hostRate).map((fullStar, index) => {
//                 return (<p key={index}>{fullStar}</p>)
//                 })}
//                 {emptyStars.slice(hostRate).map((emptyStar, index) => {
//                 return (<p key={index}>{emptyStar}</p>)
//                 })}
//             </div>
//     );
// };

// export default Rating;