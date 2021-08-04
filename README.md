`#mongodb` `#database` `#CRUD` `#master-in-software-engineering`

# MongoDB Pill <!-- omit in toc -->

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> The purpose of this project is to learn the basics of MongoDB for Create, Read, Update and Delete data from a MongoDB database

## Index <!-- omit in toc -->

- [Requirements](#requirements)
- [Tasks](#tasks)
  - [Insert data](#insert-data)
  - [Update data](#update-data)
  - [Get data](#get-data)
  - [Delete Data](#delete-data)
- [How to use](#how-to-use)
- [Technologies used](#technologies-used)
- [Resources](#resources)

## Requirements

- Install MongoDB Community version engine locally from [here](https://www.mongodb.com/try/download/community).
- Then, you will need to init a server with mongod
- Run the mongo command to initialize the database.

## Tasks

In order to complete this pill you must execute the proper MongoDB queries for the following operations

### Insert data

1. Insert at least 3 authors with the following fields

   - Name: String
   - Last name: String
   - Date of Birth: Date
   - Date of death: Date
   - Country: String

2. Insert at least 10 books with the following fields:
   - Title: String
   - Release Year: [Date]
   - Category: String
   - Authors (id, name, lastName): [{id, name, lastName}, … ]

### Update data

1. Add a date of death to one Author
2. Add a new release year to a book
3. Change the title of a book adding (“New Edition”)

### Get data

1. Select all books
2. Select all books for a given category
3. Select all books published before 2002
4. Select all books with more than one author
5. Select all authors
6. Select all death authors
7. Select all authors born before 1990
8. Select all authors from a given country

### Delete Data

1. Eliminate all the books for a given author
2. Eliminate all the death authors

## How to use

In order to see the queries applied to achieve the tasks, you will find the next files:

1. Mongodb folder with the presets.mongodb file. This file contains the commands to create the database and the required collections, one of them using a Schema
2. insert-authors and insert-books.mongodb files that contains the commands for the Insert Tasks
3. get-authors and get-books.mongodb files with the commands to get the data
4. update-data.mongodb file with the queries to update values on both collections books and authors
5. delete-data.mongodb file with the querie to remove the asked values for both collections.

You will need to copy any query of these files you want to run and paste on the mongoDB command line so you can see the results of the task.

## Technologies used

\* MongoDB

## Resources

- [Official MongoDB documentation](https://www.mongodb.com)
- [W3Schools MongoDB](https://www.w3schools.in/mongodb/query-operations)
- [MongoDB queries](https://docs.mongodb.com/manual/tutorial/query-documents/)
- [MongoDB University](https://university.mongodb.com/)
