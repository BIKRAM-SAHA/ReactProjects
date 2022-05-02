import React from "react";

function SearchResultsRow({ emoji }) {
  const unicodeValue = emoji.symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${unicodeValue}.png`;
  return (
    <div
      className="search-result-row copy-to-clipboard"
      data-clipboard-text={emoji.symbol}
    >
      <img src={src} alt={emoji.title} />
      <span>{emoji.title}</span>
      <span className="info">Click to copy emoji</span>
    </div>
  );
}

export default React.memo(SearchResultsRow);
