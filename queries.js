// Insert data

// Insert at least 3 authors with the following fields:

// Name: String
// Last name: String
// Date of Birth: Date
// Date of death: Date
// Country: String

db.authors.insert({ name: 'Josep', lastName: 'Pla', dateOfBirth: '1950-02-01', 
dateOfDeath: '1897-03-08', country: 'Catalunya' })

db.authors.insert({ name: 'Josep Maria', lastName: 'de Sagarra', dateOfBirth: '1894-03-05', country: 'Catalunya' })

db.authors.insert({ name: 'Miguel', lastName: 'de Cervantes', dateOfBirth: '1547-09-29', country: 'Spain' })

// Insert at least 10 books with the following fields:

// Title: String
// Release Year: [Date]
// Category: String
// Authors (id, name, lastName): [{id, name, lastName}, … ]

db.books.insert({ title: 'Mai', releaseYears: [2021], category: 'Poesia', authors: [{ name: 'Josep', lastName: 'Pla' }] })
db.books.insert({ title: 'Llibre1', releaseYears: [2021], category: 'Narrativa', authors: [{ name: 'Josep Maria', lastName: 'de Sagarra'}] })
db.books.insert({ title: 'Llibre2', releaseYears: [2021], category: 'Poesia', authors: [{ name: 'Miguel', lastName: 'de Cervantes' }, { name: 'Josep', lastName: 'Pla'}] })
db.books.insert({ title: 'Llibre3', releaseYears: [2021], category: 'Poesia', authors: [{ name: 'Josep', lastName: 'Pla'}] })
db.books.insert({ title: 'Llibre4', releaseYears: [2020, 2021], category: 'Prosa', authors: [{ name: 'Miguel', lastName: 'de Cervantes'}] })
db.books.insert({ title: 'Llibre5', releaseYears: [2020, 2021], category: 'Narrativa', authors: [{ name: 'Miguel', lastName: 'de Cervantes'}] })
db.books.insert({ title: 'Llibre6', releaseYears: [2021], category: 'Poesia', authors: [{ name: 'Josep', lastName: 'Pla'}] })
db.books.insert({ title: 'Llibre7', releaseYears: [2021], category: 'Narrativa', authors: [{ name: 'Miguel', lastName: 'de Cervantes'}] })
db.books.insert({ title: 'Llibre8', releaseYears: [2020, 2021], category: 'Prosa', authors: [{ name: 'Josep', lastName: 'Pla'}] })
db.books.insert({ title: 'Llibre9', releaseYears: [2021], category: 'Narrativa', authors: [{ name: 'Josep', lastName: 'Pla'}] })

db.books.insertMany(
    [
    { title: 'Llibre10', releaseYears: [2021], category: 'Poesia', authors: { name: 'Maria', lastName: 'Delao' }},
    { title: 'Llibre11', releaseYears: [2020], category: 'Prosa', authors: 
    [{ name: 'Miguel', lastName: 'de Cervantes'}, { name: 'Pepitu', lastName: 'Vadecurt'}] }
    ]);

// Update data

db.authors.update({ name: 'Josep' }, { $set: { dateOfDeath: '2021-02-10' } });

db.books.update({ title: 'Llibre1' }, { $push: { releaseYears: 2022 } })

db.books.update({ title: 'Llibre9' }, { $set: { title: 'Llibre9 New Edition' } })

// Get data

// Select all books
// Select all books for a given category
// Select all books published before 2002
// Select all books with more than one author
// Select all authors
// Select all death authors
// Select all authors born before 1990
// Select all authors from a given country

//Select all books
db.books.find({})

//Select all books for a given category
db.books.find({ category: 'Narrativa' })

//Select all books published before 2002
db.books.find({ releaseYears: { $lt: 2021 } })

//Select all books with more than one author
db.books.find({ 'authors.1': { $exists: true } })  //busca la posicio 1 de l'array si existeix o no, si fem 2 el mateix

db.books.find( {Authors : {$exists:true}, $where:'this.authors.length>1'} )

//Select all authors
db.authors.find({})

//Select all death authors
db.authors.find({ dateOfDeath: { $exists: true } })

//Select all authors born before 1990
db.authors.find({ dateOfBirth: { $lt: ('1990-01-01') } })

//Select all authors from a given country
db.authors.find({ country: 'Spain' })


// Delete data

// Eliminate all the books for a given author
// Eliminate all the death authors

//Eliminate all the books for a given author
db.books.remove({ 'authors.name': 'Miguel' })

//Eliminate all the death authors
db.authors.remove({ dateOfDeath: { $exists: true } })