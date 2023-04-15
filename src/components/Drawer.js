function Drawer({onClose, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{" "}
          <img
            onClick={onClose}
            className="cu-p "
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})`}}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">
                  {obj.title}
                </p>
                <b>{obj.price} грн.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
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
