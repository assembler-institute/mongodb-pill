`#mongodb` `#database` `#nrdb` `#master-in-software-engineering`

# MongoDB Pill <!-- omit in toc -->

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> The purpose of this project is to learn the basics of MongoDB for modeling, storing, retrieving and updating data.
>
> You will need to install the database engine and work locally.

## Index <!-- omit in toc -->

- [Requirements](#requirements)
- [Installing](#installing)
- [Directory structure](#directory-structure)
- [Queries](#queries)
- [Technologies used](#technologies-used)
- [Project delivery](#project-delivery)
- [Resources](#resources)

## Requirements

- Install MongoDB Community version engine locally from [here](https://www.mongodb.com/try/download/community).
- Record your queries on a .js file.
- Document your process on the README.md.

## Installing

Go to the official MongoDB website and download the Community version of the engine from [here](https://www.mongodb.com/try/download/community).

#### On Windows:

Execute the installer.

#### On UNIX / MacOS:

Extract the content of the tgz file and move it to a directory on your PATH system variable:

```sh
sudo cp /path/to/the/mongodb-directory/bin/* /usr/local/bin/
```

Check that the engine is properly installed with the following command on your teerminal

```sh
mongo --version

>> MongoDB shell version v5.0.0
```

Create a directory to store MongoDB Data

```sh
mkdir mongodb-data
```

Start the MongoDB server

```sh
mongod --dbpath mongodb-data
```

After some logs from the server, you should see a message like this:

```sh
{"t":{"$date":"2021-07-15T16:41:47.587+02:00"},"s":"I",  "c":"NETWORK",  "id":23016,   "ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"off"}}
```

Start the database client on a diferent terminal

```sh
mongo
```

Create a new databse

```sh
use books
```

## Directory structure

Basic schema of how folders are arranged inside this project.

```bash

repo
 ├── assets
 │     ├── authors.json
 │     └── books.json
 └── queries.js

```

- `db`: database JSON files.
- `queries.js`: list of MongoDB queries.

## Queries

MongoDB queries for following operations

### Insert data

1. Insert at least 3 authors with the following fields
   - Name: String
   - Last name: String
   - Date of Birth: Date
   - Date of death: Date
   - Country: String

```javascript
db.authors.insertMany([
  {
    name: "Jerome David",
    last_name: "Salinger",
    dob: new Date("1919-01-01"),
    dod: new Date("2010-01-27"),
    country: "United States of America",
  },
  {
    name: "Chuck",
    last_name: "Palahniuk",
    dob: new Date("1962-02-21"),
    country: "United States of America",
  },
  {
    name: "Pere",
    last_name: "Calders",
    dob: new Date("1912-09-29"),
    dod: new Date("1994-07-21"),
    country: "Catalunya",
  },
]);
```

2. Insert at least 10 books with the following fields:
   - Title: String
   - Release Year: [Date]
   - Category: String
   - Authors (id, name, lastName): [{id, name, lastName}, … ]

```javascript
db.books.insertMany([
  {
    title: "The Catcher in the Rye",
    releaseYear: [1951],
    category: "Realism",
    authors: [{ id: "1", name: "Jerome David", last_name: "Salinger" }],
  },
  {
    title: "Nine Stories",
    releaseYear: [1953],
    category: "Short stories",
    authors: [{ id: "1", name: "Jerome David", last_name: "Salinger" }],
  },
  {
    title: "Seymour: An Introduction",
    releaseYear: [1959],
    category: "Realism",
    authors: [{ id: "1", name: "Jerome David", last_name: "Salinger" }],
  },
  {
    title: "Franny & Zooey",
    releaseYear: [1961],
    category: "Thriller",
    authors: [{ id: "1", name: "Jerome David", last_name: "Salinger" }],
  },
  {
    title: "Fight Club",
    releaseYear: [1996],
    category: "Thriller",
    authors: [{ id: "2", name: "Chuck", last_name: "Palahniuk" }],
  },
  {
    title: "Diary",
    releaseYear: [2003],
    category: "Dirty realism",
    authors: [{ id: "2", name: "Chuck", last_name: "Palahniuk" }],
  },
  {
    title: "Doomed",
    releaseYear: [2013],
    category: "Psycological thriller",
    authors: [{ id: "2", name: "Chuck", last_name: "Palahniuk" }],
  },
  {
    title: "Adjustment Day",
    releaseYear: [2018],
    category: "Realism",
    authors: [{ id: "2", name: "Chuck", last_name: "Palahniuk" }],
  },
  {
    title: "L'ombra de l'atzavara",
    releaseYear: [1963],
    category: "Fantasy",
    authors: [{ id: "3", name: "Pere", last_name: "Calders" }],
  },
  {
    title: "La lluna a casa i altres contes",
    releaseYear: [1995],
    category: "Fantasy",
    authors: [{ id: "3", name: "Pere", last_name: "Calders" }],
  },
]);
```

### Update data

1. Add a date of death to one Author

```javascript
db.authors.updateOne(
  { name: "Pere" },
  { $set: { dod: new Date("1994-07-26") } }
);
```

2. Add a new release year to a book

```javascript
db.books.updateOne(
  { title: "The Catcher in the Rye" },
  { $set: { releaseYear: new Date("1952-01-01") } }
);
```

3. Change the title of a book adding (“New Edition”)

```javascript
db.books.updateOne(
  { title: "The Catcher in the Rye" },
  { $set: { title: "The Catcher in the Rye | New edition" } }
);
```

### Get data

1. Select all books

```javascript
db.books
  .find({}, { title: 1, "authors.name": 1, "authors.last_name": 1, _id: 0 })
  .pretty();
```

2. Select all books for a given category

```javascript
db.books.find({ category: "Thriller" }, { title: 1, _id: 0 }).pretty();
```

3. Select all books published before 2002

```javascript
db.books.find({ releaseYear: { $gt: 2002 } }, { title: 1, _id: 0 }).pretty();
```

4. Select all books with more than one author

```javascript
db.books.find({ $where: "this.authors.length > 1" }, { title: 1, _id: 0 });
```

5. Select all authors

```javascript
db.authors.find({}, { name: 1, _id: 0 }).pretty();
```

6. Select all death authors

```javascript
db.authors.find({ dod: { $exists: true } }, { name: 1, _id: 0 }).pretty();
```

7. Select all authors born before 1990

```javascript
db.authors
  .find({ dob: { $lt: new Date("1990-01-01") } }, { name: 1, _id: 0 })
  .pretty();
```

8. Select all authors from a given country

```javascript
db.authors
  .find(
    { country: { $ne: "United States of America" } },
    { name: 1, _id: 0, country: 1 }
  )
  .pretty();
```

### DELETE DATA

1. Eliminate all the books for a given author

```javascript
db.books.deleteMany({ "authors.name": "Jerome David" });
```

2. Eliminate all the death authors

```javascript
db.authors.deleteMany({ dod: { $exists: true } });
```

## Technologies used

\* MongoDB

## Resources

- [Official MongoDB documentation](https://www.mongodb.com)
- [W3Schools MongoDB](https://www.w3schools.in/mongodb/query-operations)
- [MongoDB queries](https://docs.mongodb.com/manual/tutorial/query-documents/)
- [MongoDB University](https://university.mongodb.com/)
