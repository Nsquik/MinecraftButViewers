import React, { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { counterContext } from "../context/CounterContext";
import { context } from "../context/ItemContext";
import "./Modal.scss";
import axios from "axios";

const Modal = (props) => {
  const counter = useContext(counterContext);
  const { item, type, price } = useContext(context);
  const itemPrice = price * counter.count;
  const loggedIn = useSelector((state) => state.auth);
  console.log(loggedIn);

  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: item,
                amount: {
                  currency_code: "USD",
                  value: itemPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order");
          console.log(order);
        },
        onError: (err) => {
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [item, itemPrice]);

  const renderContent = () => {
    switch (loggedIn) {
      case null || false: {
        return (
          <div className="content__error">
            <div className="content__item" style={{ color: "red" }}>
              MUSISZ BYC ZALOGOWANY!
            </div>
          </div>
        );
      }
      default: {
        return (
          <>
            <div className="content__text">Czy na pewno chcesz kupić:</div>
            <p className="content__item">
              {item} {counter.count} szt.
              <div className="content__price">Cena: {itemPrice}$</div>
            </p>
          </>
        );
      }
    }
  };

  const renderPaypal = () => {
    switch (loggedIn) {
      case null || false: {
        return (
          <div className="actions">
            <div className="ui button" onClick={() => props.showModal(false)}>
              ZAMKNIJ
            </div>
          </div>
        );
      }

      default: {
        return <div className="actions" ref={paypalRef}></div>;
      }
    }
  };

  return ReactDOM.createPortal(
    <div onClick={() => props.showModal(false)} className="ui dimmer modals visible active">
      <div onClick={(e) => e.stopPropagation()} className="ui tiny modal visible active">
        <div className="header">
          <div className="header__text">
            {type.pl}: {item}{" "}
          </div>
        </div>
        <div className="content">{renderContent()}</div>
        {renderPaypal()}
      </div>
    </div>,
    document.querySelector("#myportal")
  );
};
export default Modal;
