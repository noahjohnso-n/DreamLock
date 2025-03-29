import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/sessionMenu", (req, res) => {
    res.render("sessionMenu.ejs");
});

app.post("/work", async (req, res) => {
    var style = req.body.styleSelect;
    var Thours = req.body.hours;
    var mins = req.body.mins;
    console.log("hours: " + Thours);
    console.log("mins: " + mins);
    console.log("style: " + style);

        if(style == 0){
            let badInput = true;
            res.render("index.ejs", {badInput: badInput});  
        }else{
            res.render("work.ejs", {style: style, Thours: Thours, mins: mins});
        }
});

app.listen(port, () => {
    console.log(`Server is now running at port ${port}`);
});