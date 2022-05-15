import React, {PureComponent} from 'react'

interface ISearchResults {
    searchText: string
}

export class SearchResults extends PureComponent<ISearchResults> {

    render() {
        return (
            <>
                <hr/>
                <div className="card">
                    <div className="card-header">
                        <h4>Search results</h4>
                    </div>
                    <div className="card-body">
                        <p>You try to find: <b>{this.props.searchText}</b></p>
                    </div>
                </div>
            </>
        )
    }
}
