const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route: list available templates
app.get("/", (req, res) => {
  res.render("index", {
    templates: [
      "order_confirmation",
      "thankyou_for_purchase",
      "referral_code_used",
      "order_creation",
      "inquiry",
      "leave_a_review",
      "email_invitation",
      "magiclink_invite",
      "product_replaced",
      "otp_email",
      "temporary_account_suspension",
      "out_of_stock",
      "new_product_request_from_customer",
      "account_permanently_suspended",
      "thank_you_for_your_purchase",
      "join_telegram",
    ], // list of templates
  });
});

// Route: preview a specific email template
app.get("/preview/:template", (req, res) => {
  const { template } = req.params;

  // ✅ Dummy Data for order-confirmations-2

  //   for Thank you for your purchase
  //   const templateData = {
  //     customer_name: "John Doe",
  //     invoice_id: "INV-2024-1001",
  //     invoice_amount: 299.99,
  //     product_variants: [
  //       {
  //         product_name: "Gaming Mouse",
  //         variant_name: "RGB Edition",
  //         quantity: 1,
  //         notes: "Gift wrapped", // optional
  //       },
  //       {
  //         product_name: "Mechanical Keyboard",
  //         variant_name: "Blue Switch",
  //         quantity: 1,
  //       },
  //     ],
  //     inventory_items_sold: [
  //       {
  //         item_info: { value: "Gaming Mouse - RGB Edition" },
  //         product_info: { notes: "Check warranty card inside the box." },
  //       },
  //       {
  //         item_info: { value: "Mechanical Keyboard - Blue Switch" },
  //         product_info: { notes: "" },
  //       },
  //     ],
  //     FRONTEND_URL: "https://example.com",
  //     hash: "abc123xyz",
  //     customer_id: "user_789",
  //     customer_email: "john@example.com",
  //   };

  // For order-confirmations-2
  // const templateData = {
  //   customer_name: "John Doe",
  //   invoice_id: "INV-2024-0001",
  //   product_variants: [
  //     {
  //       product_name: "Wireless Gaming Mouse",
  //       variant_name: "RGB Edition",
  //     },
  //     {
  //       product_name: "Mechanical Keyboard",
  //       variant_name: "Blue Switch",
  //     },
  //   ],
  //   invoice_amount: "149.99", // each item shows same total since template uses invoice_amount
  //   purchase_date: "22 September 2024, 08:45 PM",
  //   payment_gateway: "Stripe",
  //   payment_status: "Paid",
  //   wallet_amount: "$20.00",
  //   type_amount: "$129.99", // final amount after wallet deduction
  // };

  // for referral code user
  // const templateData = {
  //   referal_link: "https://example.com/referral/12345",
  //   referalSettings: {
  //     type: "Wallet",
  //     amount: 100,
  //     percent: 10,
  //   },
  // };

  // for order created dummy data
  const templateData = {
    customer_name: "John Doe",
    product_variants: [
      {
        product_name: "Wireless Gaming Mouse",
        variant_name: "RGB Edition",
        quantity: 1,
        amount: 49.99,
        notes: "Gift wrapped",
      },
      {
        product_name: "Mechanical Keyboard",
        variant_name: "Blue Switch",
        quantity: 1,
        amount: 89.99,
        notes: "",
      },
      {
        product_name: "Gaming Headset",
        variant_name: "Surround Sound",
        quantity: 2,
        amount: 119.98,
        notes: "Deliver before weekend",
      },
    ],
  };

  // For Inquiry
  // const templateData = {
  //   orderId: "3103893",
  //   email: "example@example.com",
  //   message:
  //     "Hi, I would like to inquire about the Netflix 12 Month Account that’s currently out of stock. Could I perhaps get a reminder email when it’s back in stock.",
  // };

  // Email Invitation
  //   const templateData = {

  //   email: "example@example.com",
  //   password:
  //     "yujgjhb76867",
  // };

  //   const templateData = {

  //   username: "Bilal",

  // };

  // const templateData = {
  //   product_name: "Disney",
  //   product_variant: "2 months",
  //   rem_qty: "02",
  //   alert_limit:"05" ,
  // };

  // const templateData = {
  //   username: "john_doe_92",
  //   email: "john.doe@example.com",
  //   message: "I’d like to request the PlayStation .",
  //   dateTime: "22 September 2024, 08:45 PM",
  //   requested_product: "Disney, 2 Month",
  // };
  // For Congratulation for order creation
  res.render(`templates/${template}`, templateData);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// /-------------------------------------------------

// const express = require("express");
// const path = require("path");
// const nodemailer = require("nodemailer");
// const ejs = require("ejs");

// require("dotenv").config();

// const app = express();
// app.use(express.static("public"));

// // Set EJS as the template engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail", // or "hotmail", "yahoo", or SMTP details
//   auth: {
//     user: "your_email@gmail.com", // change to your email
//     pass: "your_app_password_here", // use app password, not Gmail password
//   },
// });

// // Route: list available templates
// app.get("/", (req, res) => {
//   res.render("index", {
//     templates: [
//       "order_confirmation",
//       "thankyou_for_purchase",
//       "referral_code_used",
//       "order_creation",
//       "inquiry",
//       "leave_a_review",
//       "email_invitation",
//       "magiclink_invite",
//       "product_replaced",
//       "otp_email",
//       "temporary_account_suspension",
//       "out_of_stock",
//       "new_product_request_from_customer",
//       "account_permanently_suspended",
//       "thank_you_for_your_purchase",
//       "join_telegram",
//     ],
//   });
// });

// // Route: preview a specific email template
// app.get("/preview/:template", (req, res) => {
//   const { template } = req.params;

//   // const templateData = {
//   //   orderId: "3103893",
//   //   email: "example@example.com",
//   //   message:
//   //     "Hi, I would like to inquire about the Netflix 12 Month Account that’s currently out of stock. Could I perhaps get a reminder email when it’s back in stock.",
//   // };

//   // const templateData = {
//   //   username: "Bilal",
//   //   otp: "678678",
//   // password:
//   //   "yujgjhb76867",
//   // };

//   const templateData = {
//     username: "John Doe",
//     product_variants: [
//       {
//         product_name: "Wireless Gaming Mouse",
//         variant_name: "RGB Edition",
//         quantity: 1,
//         amount: 49.99,
//         notes: "Gift wrapped",
//       },
//       {
//         product_name: "Mechanical Keyboard",
//         variant_name: "Blue Switch",
//         quantity: 1,
//         amount: 89.99,
//         notes: "",
//       },
//       {
//         product_name: "Gaming Headset",
//         variant_name: "Surround Sound",
//         quantity: 2,
//         amount: 119.98,
//         notes: "Deliver before weekend",
//       },
//     ],
//   };

//   res.render(`templates/${template}`, templateData);
// });

// // ✅ Route: send email using nodemailer
// app.get("/send/:template", async (req, res) => {
//   const { template } = req.params;

//   const templateData = {
//     customer_name: "John Doe",
//     invoice_id: "INV-2024-0001",
//     product_variants: [
//       { product_name: "Wireless Gaming Mouse", variant_name: "RGB Edition" },
//       { product_name: "Mechanical Keyboard", variant_name: "Blue Switch" },
//     ],
//     invoice_amount: "149.99",
//     purchase_date: "22 September 2024, 08:45 PM",
//     payment_gateway: "Stripe",
//     payment_status: "Paid",
//     wallet_amount: "$20.00",
//     type_amount: "$129.99",
//   };
//   sendEmailWithTemplate(
//     //   // const templateData = {
//     //   //   orderId: "3103893",
//     //   //   email: "example@example.com",
//     //   //   message:
//     //   //     "Hi, I would like to inquire about the Netflix 12 Month Account that’s currently out of stock. Could I perhaps get a reminder email when it’s back in stock.",
//     //   // };
//     {
//       email: "bilalaarbi300@gmail.com",
//       subject: "Your Order Confirmation ✅",
//       template: "leave_a_review",
//       // data: {
//       //   username: "John Doe",
//       //   invoice_id: "INV-2024-0001",
//       //   product_variants: [
//       //     { product_name: "Wireless Gaming Mouse", variant_name: "RGB Edition" },
//       //     { product_name: "Mechanical Keyboard", variant_name: "Blue Switch" },
//       //   ],
//       //   invoice_amount: "149.99",
//       //   purchase_date: "22 September 2024, 08:45 PM",
//       //   payment_gateway: "Stripe",
//       //   payment_status: "Paid",
//       //   wallet_amount: "$20.00",
//       //   type_amount: "$129.99",
//       // },

//       data: {
//         orderId: "3103893",
//         email: "example@example.com",
//         message:
//           "Hi, I would like to inquire about the Netflix 12 Month Account that’s currently out of stock. Could I perhaps get a reminder email when it’s back in stock.",
//       },
//     }
//   )
//     .then(() => console.log("Email sent successfully"))
//     .catch((err) => console.error("Error:", err));
// });

// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// const sendEmailWithTemplate = ({ email, subject, template, data }) => {
//   return new Promise((resolve, reject) => {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false, // use TLS
//       auth: {
//         user: process.env.EMAIL_AUTH_USER,
//         pass: process.env.EMAIL_AUTH_PASS,
//       },
//     });

//     // Render EJS template into HTML
//     ejs.renderFile(
//       path.join(__dirname, "views", "templates", `${template}.ejs`),
//       data,
//       (err, html) => {
//         if (err) {
//           console.error("EJS rendering error: ", err);
//           return reject(err);
//         }

//         const mailOptions = {
//           from: `Invador Shop <${process.env.EMAIL_AUTH_USER}>`,
//           to: email,
//           subject,
//           html, // rendered HTML from EJS
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             console.error("Email sending error: ", error);
//             reject(error);
//           } else {
//             console.log("✅ Email sent: ", info.response);
//             resolve(info);
//           }
//         });
//       }
//     );
//   });
// };
