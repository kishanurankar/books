import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [book, setBook] = useState([]);

  const createBook = (title) => {
    setBook(title);
    console.log("Book name is", title);
    
  };

  return (
    <div>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
