import React, {FC} from 'react'
import {MainTitle} from './components/MainTitle'
import {Counter} from './components/Counter'
import {SearchForm} from './components/SearchForm'
import {GenreToggle} from './components/GenreToggle'

const mainTitle = 'Hello World'

const App: FC = () => {

    return (
        <main className="pt-2">
            <div className="container">
                <MainTitle title={mainTitle}/>
                <hr/>
                <Counter/>
                <hr/>
                <SearchForm/>
                <hr/>
                <GenreToggle/>
            </div>
        </main>
    )
}

export default App