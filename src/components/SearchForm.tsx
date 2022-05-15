import React, {FC, FormEvent, useEffect, useState} from 'react'
import {SearchResults} from './SearchResults'

export const SearchForm: FC = () => {
    const [value, setValue] = useState('')
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        if (value.length) {
            setSearchText('')
        }
    }, [value])

    const formHandler = (event: FormEvent) => {
        event.preventDefault()

        if (value.length) {
            setSearchText(value)
            setValue('')
        } else {
            alert('Enter some text!')
        }
    }

    return (
        <>
            <form
                className="row align-items-center"
                onSubmit={formHandler}
            >
                <div className="col-auto">
                    <input
                        type="text"
                        placeholder="Enter text"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button
                        type="submit"
                        className="btn btn-success"
                    >Submit</button>
                </div>
            </form>
            { searchText && <SearchResults searchText={searchText}/> }
        </>
    )
}
