import './tag.scss'

export function Tag({tags}) {
    return (
        <div  className='tag'>
            <span className='tag_name'>{tags}</span>
        </div>
    )
}