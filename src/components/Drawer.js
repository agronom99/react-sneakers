function Drawer(params) {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{" "}
          <img className="removeBtn " src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneackers/image_5_2.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20">
              <p className="mb-5">Чоловічі Кросівки Nike Air Max 270</p>
              <b>7 999 грн.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneackers/image_5_4.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20">
              <p className="mb-5">Чоловічі Кросівки Nike Air Max 270</p>
              <b>7 999 грн.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>

        <ul className="cartTotalBlock">
          <li className="">
            <span>Всього:</span>
            <div></div>
            <b>15 998 грн.</b>
          </li>
          <li className="">
            <span>НДС 20%:</span>
            <div></div>
            <b>3 199,60 грн.</b>
          </li>
        </ul>
        <button>
          Оформити заказ <img src="/img/arrow.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  );
}

export default Drawer;
