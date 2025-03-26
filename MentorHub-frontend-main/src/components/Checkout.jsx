import { RAZORPAY_KEY_ID } from "../const/env.const";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const handlePayment = async (orderId, handler) => {
  await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  const paymentObject = new window.Razorpay({
    key: RAZORPAY_KEY_ID,
    order_id: orderId,
    handler: function (response) {
      console.log(response);
      handler?.(response);
    },
  });
  paymentObject.open();
};

export default handlePayment;
