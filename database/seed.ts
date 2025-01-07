// import { createBooks } from "../src/functions/book/create-books";
// import { createUser } from "../src/functions/user/create-users";
// import { prisma } from "./script";

// async function seed() {
//     await prisma.loan.deleteMany();
//     await prisma.user.deleteMany();
//     await prisma.book.deleteMany();

//     await createUser({ 
//         name: "John Doe",
//         email: "johndoe23@gmail.com",
//     });
    
    
//     await createBooks({
//         title: "The Lord of the Rings",
//         author: "J.R.R. Tolkien",
//         gender: "Fantasy",
//         publicationDate: new Date("1954-07-29"),
//         available: true,
//     });   
// }