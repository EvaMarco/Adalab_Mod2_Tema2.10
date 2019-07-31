'use strict';

const body = document.querySelector('.page__main');

fetch('https://api.rand.fun/number/integer?max=100')
.then(response => response.json())
.then(data => body.innerHTML = data.result);