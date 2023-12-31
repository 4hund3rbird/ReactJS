/*
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

let { title, publicationDate } = getBook(1);
title;
publicationDate;
console.log(getBook(3));
console.log(getBooks());
let n = getBooks();
console.log([...n]);

//1. Destructuring :
//<- rest operator :)
let [book1, book2, book3, ...otherbooks] = getBooks();
console.log(otherbooks);
book1;

book1;
const updatedBook = { ...book1, ratingsCount: 1000, hero: "Justin Timberlake" };

updatedBook;
updatedBook.ratingsCount > 900 ? console.log("hello") : console.log("no");
console.log(updatedBook.genres);
const newgeneres = updatedBook.genres.map((e) =>
  e == "high-fantasy" ? "thriller" : e
);
newgeneres;

const newBooks = getBooks().map((book) => {
  return { title: book.title, genres: book.genres };
});

newBooks;

const lessBooks = getBooks()
  .filter((book) => book.pages > 600)
  .filter((book) => book.hasMovieAdaptation)
  .map((book) => book.title);
lessBooks;

const adventureBooks = getBooks()
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

const totalPages = getBooks().reduce((pages, book) => book.pages + pages, 0);
totalPages;

let avgRatings = getBooks().reduce(
  (avg, book) => book.reviews.goodreads.rating + avg,
  0
);
avgRatings /= getBooks().length;
avgRatings;

let arr = [12, 32, 12, 4, 3, 54, 32, 554];

let m = arr.slice().sort((a, b) => a - b);
m;
arr;
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));

let sortedbyPages = getBooks()
  .map((book) => book.reviews.goodreads.ratingsCount)
  .sort((a, b) => a - b);
sortedbyPages;

let s = getBooks()
  .sort(
    (a, b) =>
      b.reviews.goodreads.ratingsCount - a.reviews.goodreads.ratingsCount
  )
  .map((book) => {
    return [book.title, book.reviews.goodreads.ratingsCount];
  });
s;

const newBook = {
  id: 6,
  title: "Elden Ring",
  pages: 100202,
};

const NewBooks = [...getBooks(), newBook];
NewBooks;

console.log(getBooks());
console.log(data);

const addedBooks = NewBooks.filter((book) => book.id != 3);
addedBooks;
const deletedBooks = NewBooks.filter((book) => book.id != 6).sort(
  (a, b) => a.id - b.id
);
deletedBooks;
*/

// Promises for asynchronous functions

// await fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => data.json())
//   .then((data) => console.log(data));

// console.log("hello");

const getdata = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const newdata = await data.json();
  console.log(newdata);
};

getdata();
