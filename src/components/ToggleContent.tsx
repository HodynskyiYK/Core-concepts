import React, {FC} from 'react'

export const ToggleContent: FC = () => {

    return (
        <>
            <hr/>
            <div className="card">
                <div className="card-header">
                    <h4>Genre title</h4>
                </div>
                <div className="card-body">
                    <p>Genre content</p>
                </div>
            </div>
        </>
    )
}
