import Link from "next/link";
import React, { useState } from "react";
import { BiPencil, BiShow, BiTrash, BiUserCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { PiBookOpenTextLight } from "react-icons/pi";
import BookModal from "./BookModal";

export interface Book {
  _id: string;
  title: string;
  author: string;
  year: string;
}
interface BookCardProps {
  book: Book;
}

const Card: React.FC<BookCardProps> = ({ book }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.year}
      </h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link href={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link href={`/books/update/${book._id}`}>
          <BiPencil className="text-2xl text-yellow-800 hover:text-black" />
        </Link>
        <Link href={`/books/delete/${book._id}`}>
          <BiTrash className="text-2xl text-red-800 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Card;
