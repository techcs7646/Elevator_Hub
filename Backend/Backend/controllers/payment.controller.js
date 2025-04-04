const razorpay = require("razorpay");
const crypto = require("crypto");
const Razorpay = require("razorpay");
require("dotenv").config();
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const createOrder = async (req, res) => {
  try {
    const { amount, currency, name, description } = req.body;
    if (!amount || !currency || !name || !description) {
      return res
        .status(400)
        .send({ success: false, message: "Missing Details" });
    }
    const amountInPaise = amount * 100;
    const options = {
      amount: amountInPaise,
      currency: "INR",
      receipt: `receipt_${new Date().getTime()}`,
      notes: {
        description,
        name,
      },
    };
    razorpayInstance.orders.create(options, (err, order) => {
      if (err) {
        return res
          .status(400)
          .send({ success: false, message: "Missing Details" });
      }
      res.status(200).send({
        success: true,
        order_id: order.id,
        amount: amountInPaise,
        key_id: razorpayInstance.key_id,
        product_name: name,
        description,
        contact: "",
        name: "",
        email: "",
      });
    });
  } catch (e) {
    console.log(e);
  }
};
const verifyPayment = (paymentId, orderId, signature) => {
  const body = orderId + "|" + paymentId;
};
