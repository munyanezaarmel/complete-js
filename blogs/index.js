const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const blogModel = require('./Models/Model');
app.use(morgan('dev'));
app.use(express.json());
const debURL =
  'mongodb+srv://munyanezaarmel:Kigali123@cluster0.ffpseqv.mongodb.net/HNGx?retryWrites=true&w=majority';
mongoose
  .connect(debURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => console.log('connected to db'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
   blogModel
     .find()
     .then(result => res.send(result))
     .catch(err => console.log(err));
})

app.post('/create', (req, res) => {
  const blog = new blogModel({
    title: req.body.title,
    details: req.body.details,
  });
  blog
    .save()
    .then(result => res.status(201).send(result))
    .catch(err => console.log(err));
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  blogModel
    .findById(id)
    .then(result => res.send(result))
    .catch(err => console.log(err));
});
app.delete('/:id', (req, res) => {
    const id = req.params.id
    blogModel.findByIdAndDelete(id).then((result) => {
        res.json({
            status: "405",
            message:"blog deleted successful"
        })
    }).catch((err)=>console.log(err))
})
app.listen(8080, () => {
  console.log('app is listening on port 8080');
});
