import { API } from "../../backend";

export const getmeToken = (userId, token) => {
  return fetch(`${API}payment/gettoken/${userId}/${token}/`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((err) => {
      console.error("Error in getmeToken:", err);
      throw err; // Re-throw the error to propagate it further if needed
    });
};

export const processPayment = (userId, token, paymentInfo) => {
  const formData = new FormData();

  for (const name in paymentInfo) {
    formData.append(name, paymentInfo[name]);
  }

  return fetch(`${API}payment/process/${userId}/${token}/`, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((err) => {
      console.error("Error in processPayment:", err);
      throw err; // Re-throw the error to propagate it further if needed
    });
};
