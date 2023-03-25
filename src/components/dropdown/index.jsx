import { useState } from 'react'
import './dropdown.scss'
import vector from '../../assets/Vector.png'

export function Dropdown({ title, children }) {

    const [open, setOpen] = useState(false)


    return (
        <div>
            <div key={{title}} className='dropdown'>
                <p onClick={() => setOpen(!open)} className='dropdown_title'>
                    {title} 
                    <img className='vector' src={vector} alt="" />
                </p>


                {open &&
                    <div className='dropdown_content'>
                        {children}
                    </div>
                }


            </div>
        </div>
    )
}

