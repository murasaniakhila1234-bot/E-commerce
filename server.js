const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.send("E-commerce API Running");
});


// Products API
app.get("/api/products", (req, res) => {

    const products = [
{
    id:1,
    name:"Laptop",
    price:50000,
    category:"Electronics",
    image:"laptop.png"
},

{
    id:2,
    name:"Mobile",
    price:20000,
    category:"Electronics",
    image:"mobile.png"
},

{
    id:3,
    name:"Smart Watch",
    price:4500,
    category:"Accessories",
    image:"watch.png",
},

{
    id:4,
    name:"Headphones",
    price:3000,
    category:"Accessories",
    image:"headphones.png",
}

];
    res.json(products);

});


// Server start
const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});