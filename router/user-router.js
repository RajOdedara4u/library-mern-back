import express from "express"; // Importing express
const Userrouter = express.Router(); // Creating a new router instance
import validate from "../middlewares/validate-middleware.js";
import { login, registration } from "../controllers/userControllers.js";
import { loginSchema, registerSchema } from "../validator/auth-validator.js";
import { contact, placeOrderRoute } from "../controllers/userControllers.js";
import { messageSchema, checkoutSchema } from "../validator/user-validator.js";
Userrouter.route("/login").post(validate(loginSchema), login);

Userrouter.route("/registration").post(validate(registerSchema), registration);

Userrouter.route("/contact").post(validate(messageSchema), contact);

Userrouter.route("/orderPlace").post(validate(checkoutSchema), placeOrderRoute);

export default Userrouter; // Exporting the router using ES6 syntax
