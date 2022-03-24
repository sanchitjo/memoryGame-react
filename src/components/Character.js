import React from 'react'

const Character = ({ item, id, handleClick }) => {

    const characterStatus = item.status ? ' active ' + item.status : ''
    return (
        <div className={'character'+ characterStatus} onClick={() => handleClick(id)}>
            <h1 className='character-heading' >
                {item.letter}
            </h1>
        </div>
    )
}

export default Character