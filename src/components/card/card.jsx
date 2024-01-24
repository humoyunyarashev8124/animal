import React, { useState } from 'react'
import './card.css'
import Button from '../button/button'

const Card = props => {
    const [count, setCount] = useState(0)
    const {animal, onAddItem, onRemoveItem} = props
    
    const handleIncrement = () => {
        setCount(prev => prev + 1)
        onAddItem(animal)
    }

    const handleDecrement = () => {
        setCount(prev => prev - 1)
        onRemoveItem(animal)
    }

  return (
    <div className='card'>
        <span className={`${count !== 0 ? 'card__badge' : 'card__badge-hidden'}`}>{count}</span>

        <div className="image-container">
            <img src={animal.Image} alt={animal.title} width={'100%'} height={'200px'} />
        </div>

        <div className="card__content">
            <h2 className="card-title">
                {animal.title}
            </h2>
            <p className='card__price'>
                {animal.price}
            </p>
        </div>

        <div className='hr'></div>

        <div className="card-group">
            <Button title={'+'} onClick={handleIncrement} type={'add'} />
            {count !== 0 && (
                 <Button title={'-'} onClick={handleDecrement} type={'remove'} />
            )}
           
        </div>
    </div>
  )
}

export default Card