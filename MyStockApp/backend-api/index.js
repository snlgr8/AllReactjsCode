const express = require('express');
const app = express();
const uuid = require('uuid');

var bodyParser = require("body-parser");
const cors = require('cors')
const port = 9000;
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
const custItem = [];
const customers = [{
    "id": "001",
    "name": "Sonal",
    "address": "Mumbai"
}, {
    "id": "002",
    "name": "ABCC",
    "address": "Pune"
}, {
    "id": "003",
    "name": "XYZZ",
    "address": "Mumbai"
}, {
    "id": "004",
    "name": "T",
    "address": "Delhi"
}]

const items = [{
        id: 001,
        name: "Item 01",
        qty: 90
    },
    {
        id: 003,
        name: "Item 03",
        qty: 100
    }
]

app.get('/items', (req, res) => {
    res.send(items);

});


app.get('/customers', (req, res) => {
    res.send(customers);
})


app.post('/addItem', (req, res) => {
    const newCustItem = req.body;
    custItem.push(newCustItem);

    items.find(x => {
        if (x.id === newCustItem.itemId) {
            x.qty = +newCustItem.pricing + x.qty;
        }
        return x;
    });
    res.send(custItem);

})

app.post('/createItem', (req, res) => {
    console.log(req.body.name);
    const name = req.body.name;
    const qty = +req.body.qty;
    const itemId = uuid.v1();
    items.push({
        itemId,
        name,
         qty 
    });
    res.send(items);
})

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})