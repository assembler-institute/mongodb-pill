// INSERT DATA


// insert several authors at once
db.authors.insertMany({ firstName: "Dante", lastName: "Alighieri", dateOfBirth: new Date('1265-05-29'), dateOfDeath: new Date('1321-0-14'), country: "Republic of Florence"},
{ firstName: "Ernest", lastName: "Hemingway", dateOfBirth: new Date('1899-07-21'), dateOfDeath: new Date('1961-07-02'), country: "United States"},
{ firstName: "Agatha", lastName: "Christie", dateOfBirth: new Date('1890-09-15'), dateOfDeath: new Date('1976-01-12'), country: "United Kingdom"} )

db.authors.insertOne({ firstName: "JK", lastName: "Rowling", dateOfBirth: new Date('1965-07-31'), dateOfDeath: null, country: "United Kingdom"})


// insert one book
db.books.insertOne({ title: 'On the Road', releaseYear: [new Date('1957-09-05')], category: ["novel", "fiction"], authors: [{id: 1, firstName: 'Jack', lastName: 'Kerouac'}] })


// insert more than one book
db.books.insertMany([{ title: 'A Portrait of the Artist as a Young Man', releaseYear: [new Date('1916-12-29')], category: ["novel", "fiction"], authors: [{id: 2, firstName: 'James', lastName: 'Joyce'}] },
{ title: 'To Kill a Mockingbird', releaseYear: [new Date('1960-07-11')], category: ["novel"], authors: [{id: 3, firstName: 'Harper', lastName: 'Lee'}] },
{ title: 'The Catcher in the Rye', releaseYear: [new Date('1951-07-16')], category: ["novel", "fiction"], authors: [{id: 
4, firstName: 'JD', lastName: 'Salinger'}] },
{ title: 'Brave New World', releaseYear: [new Date('1932')], category: ["novel", "fiction", "dystopian"], authors: [{id: 5, firstName: 'Aldous', lastName: 'Huxley'}] },    
{ title: 'Nineteen Eighty-Four', releaseYear: [new Date('1949-06-08')], category: ["fiction", "dystopian"], authors: [{id: 6, firstName: 'George', lastName: 'Orwell'}] },
{ title: 'To the Lighthouse', releaseYear: [new Date('1927-05-05')], category: ["novel"], authors: [{id: 7, firstName: 'Virginia', lastName: 'Woolf'}] },
{ title: 'House of the Spirits', releaseYear: [new Date('1982')], category: ["novel", "magical realism"], authors: [{id: 8, firstName: 'Isabel', lastName: 'Allende'}] },
{ title: 'The Shining', releaseYear: [new Date('1977-01-27')], category: ["novel", "horror fiction"], authors: [{id: 9, firstName: 'Stephen', lastName: 'King'}] },
{ title: 'War and Peace', releaseYear: [new Date('1869')], category: ["novel", "historical fiction"], authors: [{id: 10, firstName: 'Leo', lastName: 'Tolstoy'}] }])


// add one author, without dod
db.authors.insertOne({ firstName: "George", lastName: "Orwell", dateOfBirth: new Date('1903-06-25'), dateOfDeath: null, country: "United Kingdom"})


// add book with more than one author
db.books.insertOne({ title: 'Good Omens', releaseYear: [new Date('1990-05-10')], category: ["fiction", "comedy", "horror fiction"], authors: [{id: 11, firstName: 'Neil', lastName: 'Gaiman'}, {id: 12, firstName: 'Terry', lastName: 'Pratchett'}] })
