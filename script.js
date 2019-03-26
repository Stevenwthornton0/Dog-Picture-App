"use strict";

function getDogImages(pictures) {
  fetch(`https://dog.ceo/api/breeds/image/random/${pictures}`)
    .then(response => response.json())
    .then(responseJSON => displayResults(responseJSON, pictures))
    .catch(error => alert("Something went wrong. Try again later"));
}

function displayResults(responseJSON, pictures) {
  const total = parseInt(pictures);
  let index = responseJSON.message;
  for (let i = 0; i < total; i++) {
    $('.images').append(`<img src="${index[i]}" class="results-img">`);
  }
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    let pictures = $('input').val();
    event.preventDefault();
    $('.images').empty();
    console.log('form submitted!');
    getDogImages(pictures);
  })
}


$(function() {
  console.log('Page loaded. Enter a number!');
  watchForm();
})