import React, {FC, useState} from 'react'
import {ToggleContent} from './ToggleContent'

export const GenreToggle: FC = () => {
    const [toggle, setToggle] = useState<boolean>(false)

    const checkedHandler = () => {
        setToggle((prev: boolean) => !prev)
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
