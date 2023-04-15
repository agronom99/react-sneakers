
import React from 'react';
import cardStyles from './Card.module.scss'

function Card({onFavorite, onPlus, title, imageUrl, price}) {
    const [isAdded, setIsAdded] = React.useState(false);  

  const onClickPlus = () => {
     onPlus({ title, imageUrl, price });
      setIsAdded(!isAdded)
    }
  return (
      <div className={cardStyles.card}>
        <div className={cardStyles.favorite} onClick={onFavorite}>
          <img src="/img/heart.svg" alt="Unliked" />
        </div>
        <img
          width={133}
          height={112}
          src={imageUrl}
          alt="sneackers"
        ></img>
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center ">
          <div className="d-flex flex-column ">
            <span>Ціна:</span>
            <b>{price} грн.</b>
          </div>
          
            <img className={cardStyles.plus}
              onClick={onClickPlus}

          src={isAdded ? '/img/btn-checked.svg' : "/img/btn-plus.svg"}
              alt="plus"
            ></img>
          
        </div>
      </div>
    );
}

export default Card;
