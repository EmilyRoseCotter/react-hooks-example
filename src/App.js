import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer';

function App() {
  const [subject, setSubject] = useState('thriller');
  const [booksData, setBooksData] = useState(null);

  const handleChange = (event) => {
    setSubject(event.target.value)
  }

  useEffect(() => {
    axios.get(`http://openlibrary.org/subjects/${subject}.json?limit=5`)
    .then(res => setBooksData(res.data))
  }, [subject]);
  return (
    <div className="App">
      <Header change={ handleChange }/>
      <BooksContainer />
    </div>
  );
}

export default App;
