const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const { request } = require('express');
const path = require('path');

require('dotenv').config();

const app = express();

mongoose.set('strictQuery', true);
// dbName: https://stackoverflow.com/questions/57337218/how-to-connect-to-specific-database-with-mongoose-and-node
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'neuroaid-blog' });

let posts;

const connection = mongoose.connection;
connection.once('open', async () =>{
  console.log('MongoDB database connection established successfully');
  // https://dev.to/kamalhossain/mongodb-without-mongoose-1k69
  // https://stackoverflow.com/questions/21429630/querying-a-collection-without-passing-schema-in-mongoose
  posts = await connection.useDb('neuroaid-blog').collection('posts').find().toArray();
});

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true }
});

const Email = mongoose.model('email', emailSchema, 'emails');


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/blog', (req, res) => {
  (async () =>{
    posts = await connection.useDb('neuroaid-blog').collection('posts').find().toArray();
    res.json(posts);
  })();
});

app.get('/blog/:name', (req, res) => {
  (async () =>{
    posts = await connection.useDb('neuroaid-blog').collection('posts').find().toArray();
    let post = posts.filter(obj => obj.params === req.params.name);
    res.json(post[0]);
  })();
});

app.post('/mailinglist', (req, res) => {
  console.log('request: ', req.body.email);
  const email = req.body.email;
  Email.find({ email: email.toLowerCase() })
      .then(doc => {
        if (doc.length !== 0) {
          console.log('doc: ', doc);
          console.log('already subbed');
          res.json({ response: "You're already subscribed!" });
        }
        else {
          const emailDoc = new Email({ email: email.toLowerCase() });
          emailDoc.save()
              .then(() => {
                console.log('Email successfully added to the mailing list.');
                res.json('Email successfully added to the mailing list.');
              })
              .catch(err => {
                console.log(err);
              })
        }
      })
      .catch(err => {
        console.log(err);
      })
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));

  // app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
})
