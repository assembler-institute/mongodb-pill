// Insert data
// 1)Insert at least 3 authors with the following fields

// Name: String
// Last name: String
// Date of Birth: Date
// Date of death: Date
// Country: String

// use author
db.dropDatabase()
db.author.insertMany([{
            name: "Gabriel",
            lasName: "Gacia Marquez",
            DateofBirth: new Date("06-03-1927"),
            DateofeDeath: new Date("17-04-1927"),
            Country: "Colombia"
        },
        {
            name: "Juan",
            lasName: "Rulfo",
            DateofBirth: new Date("1917-03-"),
            DateofeDeath: new Date("1986-04-17"),
            Country: "Mexican"
        },
        {
            name: "Edgar",
            lasName: "Allan poe",
            DateofBirth: new Date("1809-01-19"),
            DateofeDeath: new Date("1849-10-07"),
            Country: "American"
        }
    ])
    // 2)Insert at least 10 books with the following fields:
    // Title: String
    // Release Year: [Date]
    // Category: String
    // Authors (id, name, lastName): [{id, name, lastName}, … ]

// use mybooks
db.dropDatabase()
db.mybooks.insertMany([{
        title: "Cien años de soledad",
        releaseYear: [new Date("1967-05-01")],
        category: "narrativa",
        Autors: [{
            id: ObjectId("61b9e8a3e293caee93bc2463"),
            name: "Gabriel",
            lastName: "Garcia Marquez",
        }]
    },
    {
        title: "Un sueño",
        releaseYear: [new Date("1831-08-13")],
        category: "cuentos",
        Autors: [{
            id: ObjectId("61b9e8a3e293caee93bc2465"),
            name: "Edgar",
            lastName: "Allan Poe",
        }]
    },
    {
        title: "Pedro paramo",
        releaseYear: [new Date("1961-01-01")],
        category: "Narrativa",
        Autors: [{
            id: ObjectId("61b9e8a3e293caee93bc2464"),
            name: "Juan",
            lastName: "Rulfo",
        }]
    }
])

// Update Data
// 1)Add a date of death to one Author
db.author.update({ name: "Gabriel" }, { $set: { releaseYear: [new Date("17-04-1928")] } })
    // Add a new release year to a book
db.mybooks.update({ title: "Un sueño" }, { $set: { DateofeDeath: new Date("2013-04-14") } })
    // Add a new release year to a book
db.mybooks.update({ title: "Pedro paramo", }, { $set: { title: "Pedro paramo2" } })

// Get data
// Select all books
db.find()
    // Select all books for a given category
db.mybooks.find({ "category": "cuentos" })
    // Select all books published before 1950
db.mybooks.find({ releaseYear: { $gte: [new Date("1950-01-01")] } })
    // Select all books with more than one author
db.mybooks.find({ "author.1": { $exists: true } })
    // Select all authors
db.author.find()
    // Select all death authors
db.author.find({
        "DateofeDeath": {
            "$gte": new Date("2021-01-01")
        }
    })
    // Select all authors born before 1990
db.author.find({
    "DateofBirth": {
        "$gte": new Date("2021-01-01")
    }
})

// Select all authors from a given country
db.author.find({ Country: "Colombia" })
    // DELETE DATA
    // Eliminate all the books for a given author

// Eliminate all the death authors
db.author.deleteMany({
    DateofBirth: {
        $exists: true
    }
})