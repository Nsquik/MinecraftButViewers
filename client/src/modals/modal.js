import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { counterContext } from "../context/CounterContext";
import { context } from "../context/ItemContext";
import "./Modal.scss";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Modal = (props) => {
  const counter = useContext(counterContext);
  const { item, type, price } = useContext(context);
  const itemPrice = price * counter.count;
  const loggedIn = useSelector((state) => state.auth);
  const [error, setError] = useState(false);
  console.log(loggedIn);

  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: () => {
          return axios
            .post(`/api/paypal/transaction`, {
              body: {
                quantity: counter.count,
                item: item,
                type: type,
                priceOne: price,
                price: itemPrice,
              },
            })
            .then(function (res) {
              return res.data;
            })
            .then(function (data) {
              return data.orderID;
            });
        },
        onApprove: async (data) => {
          return axios.post("/api/paypal/transaction/finalise", { orderID: data.orderID }).then((r) => {
            window.location.href = "/";
          });
        },
        onError: (err) => {
          console.log(err);
          setError(err);
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
        <div className="content">
          <div className="content__error">{error && "ERROR PROCESSING PAYMENT!!!"}</div>

          {renderContent()}
        </div>
        {renderPaypal()}
      </div>
    </div>,
    document.querySelector("#myportal")
  );
};
export default Modal;
