function Drawer({ onClose, onRemove, items = [] }) {
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

        {items.length > 0 ? (
          <div className="items">
            <div>
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
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
        ) : (
          <div className="cartEmpty d-flex align-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
              alt="empty"
            />
            <h2>Корзина порожня</h2>
            <p className="opacity-6">
              Добавте хоча б одну пару кросівок, для оформленя заказу
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="arrow" />
              Повернутися назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
