document.addEventListener('DOMContentLoaded', function () {
    const quoteBox = document.getElementById('quote');
    const authorBox = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const searchQuoteButton = document.getElementById('search-quote');
    const authorSearchInput = document.getElementById('author-search');
  
    function fetchQuote(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          quoteBox.textContent = data.content;
          authorBox.textContent = `- ${data.author}`;
        });
    }
  
    function getRandomQuote() {
      fetchQuote('https://api.quotable.io/random');
    }
  
    function searchQuoteByAuthor() {
      const author = authorSearchInput.value;
      fetchQuote(`https://api.quotable.io/random?author=${author}`);
    }
  
    newQuoteButton.addEventListener('click', getRandomQuote);
    searchQuoteButton.addEventListener('click', searchQuoteByAuthor);
  
    getRandomQuote();
  });
  