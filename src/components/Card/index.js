import cardStyles from './Card.module.scss'

function Card(props) {

  const onClickButton = () => {
  alert(props.title)
}

    return (
      <div className={cardStyles.card}>
        <div className={cardStyles.favorite}>
          <img src="/img/heart.svg" alt="Unliked" />
        </div>
        <img
          width={133}
          height={112}
          src={props.imageUrl}
          alt="sneackers"
        ></img>
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center ">
          <div className="d-flex flex-column ">
            <span>Ціна:</span>
            <b>{props.price} грн.</b>
          </div>
          <button className={cardStyles.button} onClick={onClickButton}>
            <img width={11} height={11} src="/img/Vector.svg" alt="plus"></img>
          </button>
        </div>
      </div>
    );
}

export default Card;
