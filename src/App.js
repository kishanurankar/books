import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [book, setBook] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...book, 
      {id: 123, title: title}
    ]
    setBook(updatedBooks);
    console.log("Book name is", title);
    
  };

  return (
    <div>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
