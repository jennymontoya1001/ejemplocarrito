//4 capturar el template
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

//1. importar la data e imprimirla por consola

import {data} from '../data/data.js';
//console.log(data);

// 2. crear una función para mostrar la data

const loadData = data => {

    data.forEach(personaje => {
        const {id, name, image } = personaje;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('.btn-dark').dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
        
    });

    items.appendChild(fragment);
}

// 3. Se cargue loadData luego de que se cargue el DOM
document.addEventListener('DOMContentLoaded', loadData(data))

//5. capturar el evento de items que allí estamos mostrando la data
items.addEventListener('click', (e) => {

    //que contenga btn dark y devuelve true
          if(e.target.classList.contains('btn-dark')){
              console.log(e.target.dataset.id)
              const id = e.target.dataset.id
              const per = data.find(p => p.id == id)
              console.log(`el personaje ${JSON.stringify(per)}`)
              localStorage.setItem('Detail',JSON.stringify(per))
              window.location.href = 'detail.html';
          }
})