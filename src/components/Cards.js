import React from 'react'
import { useState } from 'react'
import Character from './Character'

const Cards = ({increamentCounter, matchCounter}) => {
    
    

    const [items, setItems] = useState([
        { id: 1, letter: 'A', status: '' },
        { id: 2, letter: 'A', status: '' },
        { id: 3, letter: 'B', status: '' },
        { id: 4, letter: 'B', status: '' },
        { id: 5, letter: 'C', status: '' },
        { id: 6, letter: 'C', status: '' },
        { id: 7, letter: 'D', status: '' },
        { id: 8, letter: 'D', status: '' },
        { id: 9, letter: 'E', status: '' },
        { id: 10, letter: 'E', status: '' },
        { id: 11, letter: 'F', status: '' },
        { id: 12, letter: 'F', status: '' },
        { id: 13, letter: 'G', status: '' },
        { id: 14, letter: 'G', status: '' },
        { id: 15, letter: 'H', status: '' },
        { id: 16, letter: 'H', status: '' }
    ].sort(() => Math.random() - 0.5))

    const [prevValue, setPrevValue] = useState(-1)
    
    
    const check = (currentValue) => {
        
        if(items[currentValue].letter === items[prevValue].letter){
            matchCounter()
            items[currentValue].status = 'correct'
            items[prevValue].status = 'correct' 
            // setItems([...items])
            setPrevValue(-1)
        }else{
            items[currentValue].status = 'incorrect'
            items[prevValue].status = 'incorrect'
            setItems([...items])

            setTimeout(() => {
                items[prevValue].status = ''
                items[currentValue].status = ''
                setItems([...items])
                setPrevValue(-1)
            }, 1000)
        }
        
    }
    
    const handleClick = (id) => {
        increamentCounter()
        if(prevValue === -1){
            items[id].status = 'active'
            setItems([...items])
            setPrevValue(id)
        }else if(prevValue !== id){
            check(id)
        }
    }

    

    return (
        <div className='container'>
        
            {
                items.map((item, index) => {
                    return(
                        <Character 
                        key={index} 
                        item={item} 
                        id={index}
                        handleClick={handleClick}

                        />
                    )
                })
            }
        </div>
    )
}

export default Cards

