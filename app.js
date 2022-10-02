import express from "express"

const app = express();

const workTime = (req, res, next) => {
  let date = new Date();
  let day = date.getDay();
  let Hours = date.getHours();

  if (day >= 1 && day <= 5 && Hours >= 9 && Hours <= 16 )   {
    next();
  } else {
    res.send(
        "This website is only available from monday to friday from 9 AM to 5 PM"
    );
  }
};

app.use(workTime);
app.use(express.static('pages'));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/contact.html`);
});
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/services.html`);
});

app.listen(5000, (err) =>
  err ? console.log(err) : console.log("App is listening on port 5000")
);