// Insert authors
db.authors.insert({ name: 'Juan', lastName: 'Alvarez', dateOfBirth: '1989-02-01',  country: 'Spain' })

db.authors.insert({ name: 'Pedro', lastName: 'Rodriguez', dateOfBirth: '1990-02-01', country: 'Spain' })

db.authors.insert({ name: 'Jose', lastName: 'Perez', dateOfBirth: '1965-02-01', dateOfDeath: '2020-02-01', country: 'Spain' })


//Insert 10 books
db.books.insertMany([{ title: 'Book0', releaseYears: [2001, 2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b90', name: 'AuthorName1', lastName: 'AuthorLastname1' }]},
{ title: 'Book1', releaseYears: [2001, 2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b91', name: 'AuthorName2', lastName: 'AuthorLastname2' }]},
{ title: 'Book2', releaseYears: [2001, 2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b92', name: 'AuthorName3', lastName: 'AuthorLastname3' }]},
{ title: 'Book3', releaseYears: [2001, 2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b93', name: 'AuthorName4', lastName: 'AuthorLastname4' }]},
{ title: 'Book4', releaseYears: [2001, 2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b94', name: 'AuthorName5', lastName: 'AuthorLastname5' }]},
{ title: 'Book5', releaseYears: [2001, 2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b95', name: 'AuthorName6', lastName: 'AuthorLastname6' }]},
{ title: 'Book6', releaseYears: [2001, 2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b96', name: 'AuthorName7', lastName: 'AuthorLastname7' }]},
{ title: 'Book7', releaseYears: [2001, 2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b97', name: 'AuthorName8', lastName: 'AuthorLastname8' }]},
{ title: 'Book8', releaseYears: [2001, 2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b98', name: 'AuthorName9', lastName: 'AuthorLastname9' }]},
{ title: 'Book9', releaseYears: [2001, 2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b99', name: 'AuthorName0', lastName: 'AuthorLastname0' }]}
])