import React, {FC, createElement} from 'react'

interface IMainTitle {
    title: string
}

export const MainTitle: FC<IMainTitle> = ({title}) => {
    const mainTitle = createElement(
        'h1',
        {className: 'main-title h1'},
        title
    )

    return (
        <>
            {mainTitle}
        </>
    )
}
