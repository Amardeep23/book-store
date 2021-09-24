import React from 'react'

const MainHeding = (props) => {
    return (
        <div className="m-3 p-3 border-start border-end round-pill border-5 border-primary">
            <h1 className="display-2">{props.head}</h1>
        </div>
    )
}

export default MainHeding
