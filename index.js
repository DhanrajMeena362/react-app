// Function to split text into individual words
function splitIntoWords(text) {
    return text.trim().split(" ");
  }
  
  // Function to reveal words as the user scrolls
  function revealWordsOnScroll() {
    var heading = document.getElementById("upper");
    var words = splitIntoWords(heading.innerText);
  
    // Wrap each word with a span element
    var wrappedWords = words.map(function (word) {
      return '<span class="word-by-word">' + word + "</span>";
    });
  
    // Replace the heading's content with the wrapped words
    heading.innerHTML = wrappedWords.join(" ");
  
    const pageHeight = document.body.scrollHeight;
  
    // Add a scroll event listener
    window.addEventListener("scroll", function () {
      var currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // console.log(currentScrollPosition);
      var elements = document.getElementsByClassName("word-by-word");
  
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var rect = element.getBoundingClientRect();
  
        console.log((pageHeight / elements.length) * i);
        if (currentScrollPosition > (pageHeight / elements.length) * i * 0.9) {
          element.style.opacity = 1;
        } else {
          element.style.opacity = 0;
        }
      }
    });
  }
  
  // Call the function to initiate the effect
  revealWordsOnScroll();
  