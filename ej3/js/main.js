

  'use strict';

  const body = document.querySelector('.page__main');
  const btn = document.querySelector('.btn');
  const input = document.querySelector('.input');
  const repo__list = document.querySelector('.repo__list');

  function getInfo(event){
      fetch(`https://api.github.com/orgs/${input.value}`)
      .then(response => response.json())
      .then(data => {
        const reposUrl = data.repos_url
        console.log(reposUrl);
        return fetch(reposUrl)
      })
      .then(urlResponse => urlResponse.json())
      .then(urlData => {
          for (let item in urlData){
            repo__list.innerHTML+=`
            <li class = "item__${item}">${urlData[item].name}</li>
            `
          }
      });
  }
  
    btn.addEventListener('click', getInfo);
