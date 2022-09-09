const express = require("express"); // npm i express
const app = express();
const port = process.env.PORT || 3000;
const nodemailer = require("nodemailer"); // npm i nodemailer

app.get("/", (req, res) => {
  res.send("Hello");
});

// Send a get request to /send/email {email parameter signifies receipients email address}

app.get("/send/:email", (req, res) => {
  const email = req.params.email;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "youremail@gmail.com", // Your email
      pass: "app password", // Your app password
    },
  });

  let options = {
    from: "youremail@gmail.com", // Your email
    to: email, // receivers email
    subject: "Hello", //
    html: "<h1>This email is sent via node js.</h1>",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, expedita.",
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      res.send("Error");
    } else {
      res.send("Success");
    }
  });
});

app.listen(port, () => {
  console.log("Listening on port:", port);
});
