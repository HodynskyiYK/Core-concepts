import React, {FC, useState} from 'react'
import ToggleContent from './ToggleContent'

const GenreToggle: FC = () => {
    const [toggle, setToggle] = useState(false)

    const checkedHandler = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <>
                <input
                    type="checkbox"
                    id="toggle"
                    checked={toggle}
                    onChange={checkedHandler}
                />
                <label
                    htmlFor="toggle"
                    style={{margin: '0 0 0 0.25rem'}}
                >Toggle</label>
            </>
            {toggle && <ToggleContent/>}
        </>
    )
}

export default GenreToggle