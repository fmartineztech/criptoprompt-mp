import mercadopago from "mercadopago";
import { MERCADOPAGO_ACCESS_TOKEN, PUBLIC_URL } from "../config.js";

const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: MERCADOPAGO_ACCESS_TOKEN,
  });

  try {
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: "bundle-1",
          unit_price: 500,
          currency_id: "ARS",
          quantity: 1,
        },
      ],
      notification_url: `${PUBLIC_URL}/webhook`,
      back_urls: {
        success: `${PUBLIC_URL}/success`,
        pending: `${PUBLIC_URL}/pending`,
        failure: `${PUBLIC_URL}/failure`,
      },
    });

    console.log(result);

    // res.json({ message: "Payment creted" });
    res.json(result.body);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

const receiveWebhook = async (req, res) => {
  try {
    const payment = req.query;
    console.log(payment);
    if (payment.type === "payment") {
      const data = await mercadopage.payment.findById(payment["data.id"]);
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

const getSuccess = (req, res) => {
  res.send("success");
};
const getPending = (req, res) => {
  res.send("pending");
};
const getFailure = (req, res) => {
  res.send("failure");
};

export { createOrder, receiveWebhook, getSuccess, getPending, getFailure };
