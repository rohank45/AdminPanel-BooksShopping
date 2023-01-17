import axios from "axios";
import React, { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=bvvivAeO3fEKT66GAXKZU6DRfHSdNksv"
      );
      setBooks(res.data.results.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="pc:container mx-auto flex flex-wrap gap-10 pt-32 pb-20">
        {books.map((curElem) => {
          const { title, price, author, description, book_image } = curElem;

          return (
            <div
              key={curElem.rank}
              className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-xl border"
            >
              <img
                className="object-cover w-full h-48 mt-1"
                src={book_image}
                alt="books"
              />

              <div className="px-4 py-2 h-64">
                <h1 className="text-3xl font-bold text-gray-800 uppercase">
                  {title}
                </h1>
                <h1 className="text-lg font-bold py-2">${price}</h1>
                <h1 className="text-lg font-bold py-2">Author: {author}</h1>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
              </div>

              <div>
                <p className="text-xl py-1 text-center mx-5 mb-4 bg-red-600 text-white rounded-lg">
                  remaining books are {Math.floor(Math.random() * 1000)}.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;
