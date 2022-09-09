<!-- INSERT DATA -->

db.authors.insertOne();
db.authors.insertMany();

<!-- UPDATE DATA -->
<!-- Add a date of death to one Author -->

db.authors.updateOne({name: "Jannelle"}, {$set: { date_death:ISODate("2021-01-01")}}

<!-- Add a new release year to a book -->

db.books.updateOne({Title: "Neverwas"}, {$set: {ReleaseYear: 2000}})

<!-- Change the title of a book adding (“New Edition”) -->

db.books.updateOne({Title: "Neverwas"}, {$set: {Title: "Neverwas, New Edition"}})

<!-- GET DATA -->
<!-- Select all books -->

db.books.find()

<!-- Select all books for a given category -->

db.books.find({Category: "Drama"})

<!-- Select all books published before 2002 -->

db.books.find({ReleaseYear: {$lt: 2002}})

<!-- Select all books with more than one author -->

db.books.find({$expr: {$gte: [{$size: "$Authors"}, 2]}});

<!-- Select all death authors -->

db.authors.find({date_death: {$exists: true}})

<!-- Select all authors born before 1990 -->

db.authors.find({date_birth: {$lte: ISODate("1990-01-01")}})

<!-- Select all authors from a given country -->

db.authors.find({Country: "Indonesia"})

<!-- DELETE DATA -->
<!-- Eliminate all the books for a given author -->

db.books.deleteOne({Authors: {$elemMatch: {firstName: "Celka"}}})

<!-- Eliminate all the death authors -->

db.authors.deleteMany({date_death: null})