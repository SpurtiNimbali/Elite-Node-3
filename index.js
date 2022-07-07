const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/number", (req, res) => {
  res.send("Go to /number/:num to check if :num is prime or composite");
});

app.get("/number/:num", (req, res) => {
  const num= req.params.num;
  let isPrime= true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
  }
  if (isPrime) {
    res.send(`The number ${num} is prime`);
  } else {
    res.send(`The number ${num} is composite`);
  }

  res.send("Go to /number/:num to check if :num is prime or composite");
});

app.listen(3000, () => console.log("Server started"));
