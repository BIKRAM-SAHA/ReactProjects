import './App.css';
import Header from './Header';
import Search from './Search';
import SearchResults from './SearchResults';
import { filterEmoji } from './filterEmoji';

import { useState } from 'react';
function App() {
  const [filteredEmoji, setFilteredEmoji]=useState(filterEmoji('', 20))
  const handleSearch=(text)=>{
    const newEmojiList=filterEmoji(text, 20)
    if (newEmojiList !== filteredEmoji)  setFilteredEmoji(newEmojiList)
  }
  return (
    <div className="App">
      <Header/>
      <Search handleSearch={handleSearch}/>
      <SearchResults results={filteredEmoji}/>
    </div>
  );
}

export default App;
