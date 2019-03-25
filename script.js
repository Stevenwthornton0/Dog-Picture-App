"use strict";

function getDogImages() {
  let pictures = $('input').val();
  console.log(pictures);
  fetch(`https://dog.ceo/api/breeds/image/random/${pictures}`)
    .then(response => response.json())
    .then(responseJSON => displayResults(responseJSON))
    // .catch(error => alert("Something went wrong. Try again later"));
}

function displayResults(responseJSON) {
  let pictures = $('input').val();
  const total = parseInt(pictures);
  console.log(total);
  for (let i = 0; i < total; i++) {
    $('images').append(`
    <img src="${responseJSON.message[i]}" class="results-img">`
    );
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    console.log('form submitted!');
    getDogImages();
  })
}


$(function() {
  console.log('Page loaded. Enter a number!');
  watchForm();
})