import React, { useState } from "react";
import axios from "axios";
import SearchPage from "./SearchPage";
import SearchResultsPage from "./SearchResultsPage";
import FullArticlePage from "./FullArticlePage";
import { Button } from "@mui/material";
import "./App.css";

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [showViewFullArticleButton, setShowViewFullArticleButton] =
    useState(true);
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);

  const handleSearch = async (keyword, academic) => {
    try {
      const response = await axios.post(
        "https://api.gyanibooks.com/search_publication/",
        {
          keyword,
          academic,
        }
      );

      const searchResults = response.data?.data;

      if (Array.isArray(searchResults)) {
        setResults(searchResults);
        setSelectedResult(null);
      } else {
        console.error("Invalid search results format:", searchResults);
      }
    } catch (error) {
      console.error("Error while fetching search results:", error);
    }
  };

  const handleViewContent = (result) => {
    setSelectedResult(result);
  };

  const handleViewFullArticle = () => {
    if (selectedResult) {
      setSelectedResult({ ...selectedResult, showFullArticle: true });
      setShowViewFullArticleButton(false);
    }
  };

  const handleBack = () => {
    setSelectedResult(null);
    setShowViewFullArticleButton(true);
  };

  const handleBookmark = (article) => {
    setBookmarks([...bookmarks, article]);
  };

  const handleToggleBookmarks = () => {
    setShowBookmarks(!showBookmarks);
  };

  return (
    <div className="app-container">
      <div className="header">
        <Button
          variant="outlined"
          onClick={handleToggleBookmarks}
          style={{ border:"1px solid  green", color:"green"}}
        >
          Bookmarks
        </Button>
      </div>
      {showBookmarks ? (
        <div className="bookmarks-container">
          <h1 className="heading">Bookmarks</h1>
          {bookmarks.map((bookmark) => (
            <div key={bookmark.url} className="bookmark-item">
              <a href={bookmark.url} className="bookmark-link">
                <h4>{bookmark.url}</h4>
              </a>
              <h2>{bookmark.title}</h2>
              <p>{bookmark.abstract}</p>
            </div>
          ))}
        </div>
      ) : selectedResult ? (
        <FullArticlePage
          article={selectedResult}
          onBack={handleBack}
          onViewFullArticle={handleViewFullArticle}
          showViewFullArticleButton={showViewFullArticleButton}
          onBookmark={handleBookmark}
        />
      ) : results.length > 0 ? (
        <SearchResultsPage
          results={results}
          onBack={handleBack}
          onGetContent={handleViewContent}
        />
      ) : (
        <SearchPage onSearch={handleSearch} />
      )}
    </div>
  );
};

export default App;
