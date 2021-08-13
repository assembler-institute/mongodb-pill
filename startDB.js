const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const AuthorSchema = new mongoose.Schema({
    Name: {
      type: String,
      required: true,
    },
    Last_name: {
        type: String,
        required: true,
      },
    Date_of_Birth: {
        type: Date,
        required: true,
      },
    Date_of_death: {
        type: Date,
        required: true,
      },
    Country: {
        type: String,
        required: true,
    }
});
const BookSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: true,
    } ,
    Release_Year:{
        type: Date,
        required: true,
    } ,
    Category:{
        type: String,
        required: true,
    } ,
    Authors:{
        type:{
        id:{type:mongoose.Schema.Types.ObjectId},
        Name:{type:String},
        Last_name:{type:String}       
    },
        ref: 'authors'
    }
})
const Book= new mongoose.model("Book", BookSchema)
const Author = new mongoose.model("Author", AuthorSchema);

async function createAuthor(Name,Last_name,Date_of_Birth,Date_of_death,Country){
    const authors=new Author({
        Name,
        Last_name,
        Date_of_Birth,
        Date_of_death,
        Country
    })
    const result = await authors.save();
}

async function createBook(Title,Release_Year,Category,Authors){
    const books=new Book({
        Title,
        Release_Year,
        Category,
        Authors,
        
    })
    const result = await books.save();
}

 createAuthor("Josua","Kokari","1956-12-24","2030-12-24","Germeany") ; 
 createAuthor("Adolf","Smith","1998-05-14","2030-12-24","China") ; 
 createAuthor("Json","Object","1976-02-13","2030-12-24","MongoLIA") ; 

 createBook("Volando","1956-12-24","Dreams",
 [
    { "_id" : "610a9d34430604144d71ce70", "Name" : "Josua", "Last_name" : "Kokari"},
    {"_id" : "610a9d34430604144d71ce71", "Name" : "Adolf", "Last_name" : "Smith"}
]);

 createBook("Nadando","1980-12-24","Sports",
 [
    { "_id" : "610a9d34430604144d71ce70", "Name" : "Josua", "Last_name" : "Kok"}
]);

 createBook("Volcanes","2002-12-24","Geography",
 [
    { "_id" : "610a9d34430604144d71ce70", "Name" : "Josua", "Last_name" : "Kokari"},
   
]);

 createBook("El viaje en bolas","1987-12-24","Aventura",
 [
    { "_id" : "610a9d34430604144d71ce70", "Name" : "Josua", "Last_name" : "Kokari"},
    
]);

 createBook("Patadas Y cama","2020-12-24","Accion",
 [
    { "_id" : "610a9d34430604144d71ce70", "Name" : "Josua", "Last_name" : "Kokari"},
    {"_id" : "610a9d34430604144d71ce71", "Name" : "Adolf", "Last_name" : "Smith"},
    {"_id" : "610a9d34430604144d71ce72", "Name" : "Json", "Last_name" : "Object"}
]);

 createBook("Pan con Habichuelas","1999-12-24","Comedia",
 [
    { "_id" : "610a9d34430604144d71ce70", "Name" : "Josua", "Last_name" : "Kokari"}
   
]);

createBook("Programando celebros","2033-12-24","Miedo",
[
   { "_id" : "610a9d34430604144d71ce71", "Name" : "Adolf", "Last_name" : "Smith"}
  
]);

createBook("cruzando el rio","1923-12-24","Novel",
[
   { "_id" : "610a9d34430604144d71ce70", "Name" : "Josua", "Last_name" : "Kokari"},
   { "_id" : "610a9d34430604144d71ce71", "Name" : "Adolf", "Last_name" : "Smith"},
   { "_id" : "610a9d34430604144d71ce72", "Name" : "Json", "Last_name" : "Object"},
  
]);

createBook("El fin de los Tiempos","2050-12-24","Historia",
[
   { "_id" : "610a9d34430604144d71ce73", "Name" : "Json", "Last_name" : "Object"}
 
  
]);


 
