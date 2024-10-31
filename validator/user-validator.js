import { z } from "zod";

const messageSchema = z.object({
  email: z
    .string({ message: "Email Required" })
    .trim()
    .email({ message: "Invalid email format" })
    .min(5, { message: "email Required at least 5 characters" })
    .max(25, { message: "Max 25 characters allowed" }),

  subject: z
    .string({ message: "subject Required" })
    .trim()
    .min(5, { message: "subject Required at least 5 characters" })
    .max(255, { message: "Max 255 characters allowed" }),

  message: z
    .string({ message: "Message Required" })
    .trim()
    .min(10, { message: "message Required at least 10 characters" })
    .max(255, { message: "Max 255 characters allowed" }),
});

const checkoutSchema = z.object({
  email: z
    .string({ message: "Email Required" })
    .trim()
    .email({ message: "Invalid email format" })
    .min(5, { message: "Email must be at least 5 characters" })
    .max(25, { message: "Max 25 characters allowed" }),

  name: z
    .string({ message: "Name Required" })
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Max 50 characters allowed" }),

  city: z
    .string({ message: "City Required" })
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Max 50 characters allowed" }),

  address: z
    .string({ message: "Address Required" })
    .trim()
    .min(5, { message: "Address must be at least 5 characters" })
    .max(100, { message: "Max 100 characters allowed" }),

  contact: z
    .string({ message: "Contact Required" })
    .trim()
    .min(10, { message: "Contact must be at least 10 characters" })
    .max(10, { message: "Max 10 characters allowed for contact" }),

  amount: z
    .number({ message: "amount Required" })
    .min(2, { message: "amount must be at least 10 characters" }),

  items: z
    .number({ message: "items Required" })
    .min(1, { message: "items must be at least 10 characters" })
    .max(10, { message: "Max 10 characters allowed for items" }),

  paymentMethod: z
    .string({ message: "Please Select Payment" })
    .trim()
    .min(2, { message: "Please Select Payment" })
    .max(50, { message: "Max 50 characters allowed" }),

  reachMethod: z
    .string({ message: "Please Select reachMethod" })
    .trim()
    .min(2, { message: "Please Select reachMethod" })
    .max(50, { message: "Max 50 characters allowed" }),

  pinCode: z
    .string({ message: "Pin code Required" })
    .trim()
    .length(6, { message: "Pin code must be exactly 6 characters" }),

  arrayObj: z
    .array(
      z.object({
        // Define the structure of the object within the array
        name: z.string().nonempty({ message: "Item name cannot be empty" }),
        sellPrice: z.any(), // Allows any value without validation
        cartQuantity: z.any(), // Allows any value without validation
      })
    )
    .nonempty({ message: "Order items cannot be empty" }),
});

export { messageSchema, checkoutSchema };
