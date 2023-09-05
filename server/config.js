import { config } from "dotenv";
config();

const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "http://localhost";
const API_URL = process.env.API_URL || `${HOST}:${PORT}`;
const PUBLIC_URL = process.env.PUBLIC_URL;

export { MERCADOPAGO_ACCESS_TOKEN, PORT, API_URL, PUBLIC_URL };
