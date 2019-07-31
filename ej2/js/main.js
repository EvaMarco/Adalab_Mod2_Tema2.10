'use strict';

const body = document.querySelector('.page__main');
const btn = document.querySelector('.btn');

function moreChiguagua(event){
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('.img');
      img.src = data.message;
      img.alt = 'Chihuahua';
    });
}

  btn.addEventListener('click', moreChiguagua);