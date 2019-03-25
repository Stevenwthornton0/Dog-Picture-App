"use strict";

let pictures = $('input').val();

function getDogImages() {
  fetch(`https://dog.ceo/api/breeds/image/random/${pictures}`)
    .then(response => response.json())
    .then(responseJSON => displayResults(responseJSON))
    // .catch(error => alert("Something went wrong. Try again later"));
}

function displayResults(responseJSON) {
  for (i = 0; i < pictures; i++) {
    $('images').html(`
    <img src="${responseJSON.message[i]} class=results-img>`
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