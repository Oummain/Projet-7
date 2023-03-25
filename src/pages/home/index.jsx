import { useLoaderData } from "react-router-dom";
import { Banner } from "../../components/banner";
import { Card } from "../../components/card";


import './home.scss'

export function HomePage() {
    const logements= useLoaderData()
    
    const logement= logements.map(logement=> (<Card key={logement.id}hab={logement}></Card>) )
    return (

        <div className="home">

           
            <Banner>Chez vous, partout et ailleurs</Banner>
            <div className="home_cards">{logement}</div>
            
           
        </div>

    )

}

export async function loader() {
    return (await import("../../data/logements.json")).default
}