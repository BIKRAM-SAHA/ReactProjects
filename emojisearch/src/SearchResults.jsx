import React, { useEffect } from "react";
import Clipboard from "clipboard";
import SearchResultsRow from "./SearchResultsRow";

function SearchResults({ results }) {
  
  useEffect(() => {
    const clipboardInstance = new Clipboard(".copy-to-clipboard");
    return ()=>{clipboardInstance.destroy()};
  }, []);

  return (
    <div className="search-result">
      {results.map((element) => (
        <SearchResultsRow key={element.title} emoji={element} />
      ))}
    </div>
  );
}

export default React.memo(SearchResults);
