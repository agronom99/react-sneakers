
import React from 'react';
import cardStyles from './Card.module.scss'

function Card({id, onFavorite, onPlus, title, imageUrl, price, favorited=false}) {
    const [isAdded, setIsAdded] = React.useState(false);  
    const [isFavorite, setIsFavorite] = React.useState(favorited);  

  const onClickPlus = () => {
     onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  }
  
  const onClickFavorite = () => {
    onFavorite({id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
}

  return (
      <div className={cardStyles.card}>
        <div className={cardStyles.favorite} onClick={onClickFavorite}>
          <img src={isFavorite ? "/img/heart_liked.svg" : "/img/heart_unliked.svg"} alt="Unliked" />
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
