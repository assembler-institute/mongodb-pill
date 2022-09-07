// Insert authors
db.authors.insert({
    name: 'John',
    lastName: 'Smith',
    dateOfBirth: '1936-04-22',
    dateOfDeath: '2020-02-01',
    country: 'Spain'
})


db.authors.insertMany([{
    name: 'Pedro',
    lastName: 'Ramirez',
    dateOfBirth: '1960-02-01',
    country: 'Spain'
}, {
    name: 'Jean',
    lastName: 'Pierre',
    dateOfBirth: '1970-02-01',
    country: 'France'
}])


// Insert books

db.books.insertMany([{
    title: 'The Lord of the Rings',
    releaseYear: 1954,
    category: 'Fantasy',
    authors: [{
        id: '5f1f1b1b1b1b1b1b1b1b1b1b',
        name: 'John',
        lastName: 'Smith'
    }]
}, {
    title: 'The Hobbit',
    releaseYear: 1937,
    category: 'Fantasy',
    authors: [{
        id: '5f1f1b1b1b1b1b1b1b1b1b1b',
        name: 'John',
        lastName: 'Smith'
    },
    {
        id: '5f1f1b1b1b1b1b1b1b1b1b1c',
        name: 'Pedro',
        lastName: 'Ramirez'
    }],
}, {
    title: 'The Silmarillion',
    releaseYear: 1977,
    category: 'Fantasy',
    authors: [{
        id: '7f1f1b1b1b1b1b1b1b1b1b1b',
        name: 'Pedro',
        lastName: 'Ramirez'
    }]
}, {
    title: 'The Chronicles of Narnia',
    releaseYear: 1950,
    category: 'Fantasy',
    authors: [{
        id: '7f1f1b1b1b1b1b1b1b1b1b1b',
        name: 'Pedro',
        lastName: 'Ramirez'
    }]
}, {
    title: 'The Little Prince',
    releaseYear: 1943,
    category: 'Fantasy',
    authors: [{
        id: '7f1f1b1b1b1b1b1b1b1b1b1b',
        name: 'Pedro',
        lastName: 'Ramirez'
    }]
}, {
    title: 'A Tale of Two Cities',
    releaseYear: 1859,
    category: 'Historical',
    authors: [{
        id: '2f1f1b1b1b1b1b1b1b1b1b1b',
        name: 'Jean',
        lastName: 'Pierre'
    }]
}, {
    title: 'The Count of Monte Cristo',
    releaseYear: 1844,
    category: 'Historical',
    authors: [{
        id: '2f1f1b1b1b1b1b1b1b1b1b1b',
        name: 'Jean',
        lastName: 'Pierre'
    }]
}, {
    title: 'The Three Musketeers',
    releaseYear: 1877,
    category: 'Historical',
    authors: [{
        id: '2f1f1b1b1b1b1b1b1b1b1b1b',
        name: 'Jean',
        lastName: 'Pierre'
    }]
}, {
    title:
    'The Adventures of Sherlock Holmes',
    releaseYear: 1892,
    category: 'Detective',
    authors: [{
        id: '2f1f1b1b1b1b1b1b1b1b1b1b',
        name: 'Jean',
        lastName: 'Pierre'
    }]
}, {
    title: 'The Hound of the Baskervilles',
    releaseYear: 1902,
    category: 'Detective',
    authors: [{
        id: '2f1f1b1b1b1b1b1b1b1b1b1b',
        name: 'Jean',
        lastName: 'Pierre'
    }]
}])
