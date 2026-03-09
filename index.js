import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();

const app = express();  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }),);

const port = process.env.PORT || 3000;
const baseURL = process.env.BASE_URL;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// post -> request information from body
app.post("/joke", (req, res) => {
  try {
    const { name, category, blacklist} = req.body;

    //clear previous joke
    req.session.joke = null;

    res.redirect(`/joke?name=${name}&category=${category || ""}&blacklist=${blacklist || ""}`);
  } catch (error) {
    res.redirect("/");
  }
});

// get -> joke route
app.get("/joke", async (req, res) => {
  try {
    const { name, category, blacklist, new: newJoke } = req.query;

    //clear previous joke if user request new joke
    if (newJoke) {
      req.session.joke = null;
      // redirect to clean URL without new=true
      return res.redirect(
        `/joke?name=${name}&category=${category || ""}&blacklist=${blacklist || ""}`,
      );
    }

    //show same joke in session if refreshed the page
    if (req.session.joke) {
      const joke = req.session.joke;

      return res.render("joke.ejs", {
        name,
        jokeSetup: joke.setup || joke.joke,
        jokeDelivery: joke.delivery || null,
        category,
        blacklist,
      });
    }

    const categories = Array.isArray(category) ? category.join(",") : category || "Any";
    const blacklistFlags = Array.isArray(blacklist) ? blacklist.join(",") : blacklist || "";

    //api fetch
    const response = await axios.get(`${baseURL}/joke/${categories}?blacklistFlags=${blacklistFlags}`);
    //got api data
    const joke = response.data;

    // store joke in session
    req.session.joke = joke;

    // render joke
    res.render("joke.ejs", {
      name: name,
      jokeSetup: joke.joke || joke.setup,
      jokeDelivery: joke.delivery || null,
      category,
      blacklist,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("failed to fetch joke.");
  }
});

app.get("/lol", (req, res) => {
  res.render("lol.ejs");
})

app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
