function Card(params) {
    return (
      <div className="card">
        <div className="favorite">
          <img src="/img/heart.svg" alt="Unliked" />
        </div>
        <img
          width={133}
          height={112}
          src="/img/sneackers/image 5.jpg"
          alt="sneackers"
        ></img>
        <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center ">
          <div className="d-flex flex-column ">
            <span>Ціна:</span>
            <b>4 999 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/Vector.svg" alt="plus"></img>
          </button>
        </div>
      </div>
    );
}

export default Card;
