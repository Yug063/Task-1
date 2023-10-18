import React from "react";
import { Button, ThemeProvider } from "@mui/material";
import "./FullArticlePage.css";
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1f8022", // Set the primary color to green
    },
    text: {
      primary: "#1f8022", // Set text color to green
    },
  },
});


const FullArticlePage = ({
  article,
  onBack,
  onViewFullArticle,
  showViewFullArticleButton,
  onBookmark,
}) => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="article-container">
        <Button variant="outlined" className="back-button" onClick={onBack}>
          &lt; Back
        </Button>
        <div className="article-content">
          <div>
            <a href={article.url} className="article-link" >
              <h4>{article.url}</h4>
            </a>
          </div>
          <h2 className="article-title">{article.title}</h2>
          <p className="article-abstract">
            {article.showFullArticle
              ? article.abstract
              : article.abstract?.length > 400
              ? article.abstract.slice(0, 400) + "..."
              : article.abstract}
          </p>
          {showViewFullArticleButton && (
            <Button
              variant="contained"
              color="primary"
              className="view-full-article-button"
              onClick={onViewFullArticle}
            >
              View Full Article
            </Button>
          )}
          <Button
            variant="outlined"
            className="bookmark-button"
            onClick={() => onBookmark(article)}
          >
            Bookmark
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default FullArticlePage;
