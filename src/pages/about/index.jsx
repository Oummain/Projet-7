import { useLoaderData } from "react-router-dom";
import { Banner } from "../../components/banner";
import { Dropdown } from "../../components/dropdown";
import './about.scss'

export function AboutPage() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <div className="collapse">
                {data.map((collapse, index) => <Dropdown key={index} title={collapse.title} >{collapse.content}</Dropdown>)}
            </div>
        </div>
    )
}

export async function loader() {
    return (await import('../../data/about.json')).default
}