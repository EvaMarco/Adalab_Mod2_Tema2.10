

  'use strict';

  const body = document.querySelector('.page__main');
  const btn = document.querySelector('.btn');
  const input = document.querySelector('.input');
  const text__name = document.querySelector('.text__name');
  const img = document.querySelector('.img');
  const text__repo = document.querySelector('.text__repo');
  
  
  function getInfo(event){
      fetch(`https://api.github.com/users/${input.value}`)
      .then(response => response.json())
      .then(data => {
          text__name.innerHTML = data.name;
        img.src = data.avatar_url;
        img.alt = data.login;
        text__repo.innerHTML = data.public_repos;
      });
  }
  
    btn.addEventListener('click', getInfo);
  
  