import './App.css';
import BooksContainer from './components/BooksContainer';
import Header from './components/Header';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios'

export const BooksContext = createContext()

function App() {
  const [booksData, setBooksData] = useState(null)
  const [subject, setSubject] = useState('thriller')

  useEffect(() => {
    axios.get(`http://openlibrary.org/subjects/${subject}.json?limit=5`)
      .then(response => setBooksData(response.data))
  }, [subject])

  function handleSetSubject(event) {
    setSubject(event.target.value)
  }

  const booksDataValue = { booksData, handleSetSubject }

  return (
    <BooksContext.Provider value={booksDataValue}>
    <div className="App">
      <Header 
      // handleSetSubject={handleSetSubject} 
      />
      <BooksContainer 
      // booksData={booksData} 
      />
    </div>
    </BooksContext.Provider>
  );
}

export default App;
