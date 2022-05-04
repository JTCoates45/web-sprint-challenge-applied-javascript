import axios from 'axios';


const Card = (article) => {
  const card = document.createElement('div');
  const head = document.createElement('div');
  const auth = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img1 = document.createElement('img');
  const author = document.createElement('span');
  
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  card.classList.add('card');
  head.classList.add('headline');
  auth.classList.add('author');
  imgContainer.classList.add('img-container');
  
  head.textContent = article.headline;
  img1.src = article.authorPhoto;
  author.textContent = article.authorName;

  card.appendChild(head);
  card.appendChild(auth);
  auth.appendChild(imgContainer);
  imgContainer.appendChild(img1);
  auth.appendChild(author);

  return card
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const blah = document.querySelector(selector)

  axios.get (`http://localhost:5001/api/articles`)
  .then(res => {
    const response = res.data.articles;
    const bootstrap = response.bootstrap;
    const javascript = response.javascript;
    const jquery = response.jquery;
    const node = response.node;
    const tech = response.technology;
    
    // console.log(res.data.articles)
    function cardBuilder(duh) {
      duh.forEach(element => {
        const currentCard = Card(element)
          blah.appendChild(currentCard);
      })

    }
    cardBuilder(bootstrap)
    cardBuilder(javascript)
    cardBuilder(jquery)
    cardBuilder(node)
    cardBuilder(tech)
  })
  .catch(error => {
    console.error(error)
  })
}

export { Card, cardAppender }
