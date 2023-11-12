import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { cartEmpty } from "./helper/cartHelper";
import { getmeToken, processPayment } from "./helper/paymentHelper";
import { createOrder } from "./helper/orderHelper";
import { isAuthenticated, signout } from "../auth/helper";

import DropIn from "braintree-web-drop-in-react";

const PaymentB = ({
  products,
  reload = undefined,
  setReload = (f) => f,
}) => {
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {},
  });

  const history = useHistory();

  const userId = isAuthenticated && isAuthenticated().user.id;
  const token = isAuthenticated && isAuthenticated().token;

  const getToken = (userId, token) => {
    getmeToken(userId, token)
      .then((info) => {
        if (info.error) {
          setInfo({
            ...info,
            error: info.error,
          });
          signout(() => {
            history.push("/");
          });
        } else {
          const clientToken = info.clientToken;
          setInfo({ clientToken });
        }
      })
      .catch((error) => {
        console.error("Error in getToken:", error);
      });
  };

  useEffect(() => {
    getToken(userId, token);
  }, [userId, token]); // Include userId and token in the dependency array

  const getAmount = () => {
    const total = products.reduce((acc, product) => acc + parseFloat(product.price), 0);
    return total.toFixed(2); // Rounds to 2 decimal places
  };
  

  const onPurchase = () => {
    setInfo({ loading: true });
    let nonce;
    let getNonce = info.instance.requestPaymentMethod().then((data) => {
      console.log("MYDATA", data);
      nonce = data.nonce;
      const paymentData = {
        paymentMethodNonce: nonce,
        amount: getAmount(),
      };
      processPayment(userId, token, paymentData)
        .then((response) => {
          console.log("POINT-1", response);
          if (response.error) {
            if (response.code === "1") {
              console.log("PAYMENT Failed!");
              signout(() => {
                history.push("/");
              });
            }
          } else {
            setInfo({ ...info, success: response.success, loading: false });
            console.log("PAYMENT SUCCESS");

            let product_names = "";
            products.forEach(function (item) {
              product_names += item.name + ", ";
            });

            const orderData = {
              products: product_names,
              transaction_id: response.transaction.id,
              amount: response.transaction.amount,
            };
            createOrder(userId, token, orderData)
              .then((response) => {
                if (response.error) {
                  if (response.code === "1") {
                    console.log("Order Failed!");
                    signout(() => {
                      history.push("/");
                    });
                  }
                } else {
                  if (response.success === true) {
                    console.log("ORDER PLACED!!");
                  }
                }
              })
              .catch((error) => {
                setInfo({ loading: false, success: false });
                console.error("Order FAILED", error);
              });
            cartEmpty(() => {
              console.log("Did we get a crash?");
            });

            setReload(!reload);
          }
        })
        .catch((error) => {
          setInfo({ loading: false, success: false });
          console.error("PAYMENT FAILED", error);
        });
    });
  };

  const showbtnDropIn = () => {
    return (
      <div>
        {info.clientToken !== null && products.length > 0 ? (
          <div>
            <DropIn
              options={{ authorization: info.clientToken }}
              onInstance={(instance) => (info.instance = instance)}
            />
            <button
              onClick={onPurchase}
              className="btn btn-block btn-success"
            >
              Buy Now
            </button>
          </div>
        ) : (
          <h3>Please login first or add something in the cart</h3>
        )}
      </div>
    );
  };

  return (
    <div>
      <h3>Your bill is $ {getAmount()}</h3>
      {showbtnDropIn()}
    </div>
  );
};

export default PaymentB;

