function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books') //returns the fetch()
  .then(resp => resp.json()) //The returned response should be converted to JSON.
  .then(json => renderBooks(json)) //passing in the JSON-ified data as the argument.

}
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});