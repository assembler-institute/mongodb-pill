// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://Ernest:<password>@cluster0.zcwvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


db.authors.insert({ name: 'name1', lastName: 'lastName1', dateOfBirth: '13-05-1995', dateOfDeath: '13-05-2095', country: 'country1' })
db.authors.insert({ name: 'name2', lastName: 'lastName2', dateOfBirth: '13-06-1996', dateOfDeath: '13-06-2096', country: 'country2' })
db.authors.insert({ name: 'name3', lastName: 'lastName3', dateOfBirth: '13-07-1997', dateOfDeath: '13-07-2097', country: 'country3' })

db.books.insert({ title: 'book1', releaseYear: [2001], category: 'category1', author: [{ id: '123456789123456789123450', name: 'name1', lastName: 'lastName1' }] })
db.books.insert({ title: 'book2', releaseYear: [2002], category: 'category2', author: [{ id: '123456789123456789123451', name: 'name2', lastName: 'lastName2' }] })
db.books.insert({ title: 'book3', releaseYear: [2003], category: 'category3', author: [{ id: '123456789123456789123452', name: 'name1', lastName: 'lastName3' }] })
db.books.insert({ title: 'book4', releaseYear: [2004], category: 'category4', author: [{ id: '123456789123456789123453', name: 'name1', lastName: 'lastName4' }] })
db.books.insert({ title: 'book5', releaseYear: [2005], category: 'category5', author: [{ id: '123456789123456789123454', name: 'name1', lastName: 'lastName5' }] })
db.books.insert({ title: 'book6', releaseYear: [2006], category: 'category6', author: [{ id: '123456789123456789123455', name: 'name2', lastName: 'lastName6' }] })
db.books.insert({ title: 'book7', releaseYear: [2007], category: 'category7', author: [{ id: '123456789123456789123456', name: 'name3', lastName: 'lastName7' }] })
db.books.insert({ title: 'book8', releaseYear: [2008], category: 'category8', author: [{ id: '123456789123456789123457', name: 'name3', lastName: 'lastName8' }] })
db.books.insert({ title: 'book9', releaseYear: [2009], category: 'category9', author: [{ id: '123456789123456789123458', name: 'name1', lastName: 'lastName9' }] })
db.books.insert({ title: 'book10', releaseYear: [2010], category: 'category10', author: [{ id: '123456789123456789123459', name: 'name2', lastName: 'lastName10' }] })