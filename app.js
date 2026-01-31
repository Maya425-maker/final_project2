'use strict';

let username = document.getElementById("username");
let btn = document.querySelector(".actions");

username.addEventListener("focus", function(event) {
    username.style.backgroundColor = "rgba(238, 173, 87, 0.568)";
});

username.addEventListener("blur", function(event) {
    username.style.backgroundColor = ""; 
});

let countA = 0, countB = 0, countC = 0, countD = 0;
let inputs = document.querySelectorAll('#hp-quiz input[type="radio"]');
let result = document.querySelector('.result');
let answer = document.querySelectorAll(".answer");
let elem = document.createElement('h2');
let currentResult = {
  newEl: null,
  newElem: null,
  newImg: null
};



btn.addEventListener("click", function(event){
    event.preventDefault();
    if (elem) elem.remove();
    if(currentResult.newEl) currentResult.newEl.remove();
    if(currentResult.newElem) currentResult.newElem.remove();
    if(currentResult.newImg) currentResult.newImg.remove();
    let data;
  if (username.value !== "") {
    data = { name: username.value };
  } else {
    username.value = "Неизвестный волшебник";
    data = { name: username.value };
  }
  let dataJSON = JSON.stringify(data);
  fetch("http://web4.informatics.ru:82/api/8dc794a0052182965f3fef656483b504/test", { method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: dataJSON
  })
  .then(function(response) {
      if (response.status === 201) {
        console.log("Данные успешно отправлены!");
        return response.json();
      } else {
        console.log("Ошибка! Код: " + response.status);
      }
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log("Ошибка соединения!");
  });

    countA = 0; countB = 0; countC = 0; countD = 0;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
          if (inputs[i].value == "А") {
            countA++;
          } else if(inputs[i].value == "Б") {
            countB++;
          } else if(inputs[i].value == "В") {
            countC++;
          } else if(inputs[i].value == "Г") {
            countD++;
          }
        }
    }

    if(countA === countB && countB === countC && countC === countD){
      let newEl = document.createElement('h2');
      newEl.innerText = "Джинни Уизли:";
      let newElem = document.createElement('p');
      newElem.innerText = "Ты — воплощение энергии и независимости. Твоя уверенность в себе и талант притягивают людей, а твоей силе духа можно только позавидовать.";
      let newImg = document.createElement('img');
      newImg.src = "джинни.jpeg";
      newImg.alt = "Джинни Уизли";
      newImg.style.maxWidth = "200px";
      newImg.style.height = "auto";
      newImg.style.borderRadius = "10px";
      newImg.style.margin = "10px auto";
      newImg.style.display = "block";
      result.prepend(newEl);
      result.appendChild(newImg);
      result.append(newElem);
      currentResult.newEl = newEl;
      currentResult.newElem = newElem;
      currentResult.newImg = newImg;
    } else if(countA == countB){
      let newEl = document.createElement('h2');
      newEl.innerText = "Минерва Макгонагалл:";
      let newElem = document.createElement('p');
      newElem.innerText = "Ты воплощаешь мудрость, строгость и справедливость. За твоей дисциплиной скрывается огромное сердце и непоколебимая верность своим принципам.";
      let newImg = document.createElement('img');
      newImg.src = "макгонагалл.webp";
      newImg.alt = "Минерва Макгонагалл";
      newImg.style.maxWidth = "200px";
      newImg.style.height = "auto";
      newImg.style.borderRadius = "10px";
      newImg.style.margin = "10px auto";
      newImg.style.display = "block";
      result.prepend(newEl);
      result.appendChild(newImg);
      result.append(newElem);
      currentResult.newEl = newEl;
      currentResult.newElem = newElem;
      currentResult.newImg = newImg;
    } else if(countA == countC){
      let newEl = document.createElement('h2');
      newEl.innerText = "Невилл Лонгботтом:";
      let newElem = document.createElement('p');
      newElem.innerText = "Твой путь — это путь истинного роста. Ты доказываешь, что настоящая храбрость — это не отсутствие страха, а способность преодолеть его ради защиты близких.";
      let newImg = document.createElement('img');
      newImg.src = "невилл.jpg";
      newImg.alt = "Невилл Лонгботтом";
      newImg.style.maxWidth = "200px";
      newImg.style.height = "auto";
      newImg.style.borderRadius = "10px";
      newImg.style.margin = "10px auto";
      newImg.style.display = "block";
      result.prepend(newEl);
      result.appendChild(newImg);
      result.append(newElem);
      currentResult.newEl = newEl;
      currentResult.newElem = newElem;
      currentResult.newImg = newImg;
    } else if(countA == countD){
      let newEl = document.createElement('h2');
      newEl.innerText = "Регулус Блэк:";
      let newElem = document.createElement('p');
      newElem.innerText = "Ты — человек чести, способный на тихий, но великий подвиг. Ты умеешь признавать свои ошибки и готов пойти против течения ради того, что считаешь правильным.";
      let newImg = document.createElement('img');
      newImg.src = "регулус.jpg";
      newImg.alt = "Регулус Блэк";
      newImg.style.maxWidth = "200px";
      newImg.style.height = "auto";
      newImg.style.borderRadius = "10px";
      newImg.style.margin = "10px auto";
      newImg.style.display = "block";
      result.prepend(newEl);
      result.appendChild(newImg);
      result.append(newElem);
      currentResult.newEl = newEl;
      currentResult.newElem = newElem;
      currentResult.newImg = newImg;
    } else if(countB == countC){
      let newEl = document.createElement('h2');
      newEl.innerText = "Билл Уизли:";
      let newElem = document.createElement('p');
      newElem.innerText = "Ты — идеальное сочетание крутости и ответственности. Ты не боишься опасностей, любишь приключения и при этом остаешься надежной опорой для всей семьи.";
      let newImg = document.createElement('img');
      newImg.src = "билл.jpg";
      newImg.alt = "Билл Уизли";
      newImg.style.maxWidth = "200px";
      newImg.style.height = "auto";
      newImg.style.borderRadius = "10px";
      newImg.style.margin = "10px auto";
      newImg.style.display = "block";
      result.prepend(newEl);
      result.appendChild(newImg);
      result.append(newElem);
      currentResult.newEl = newEl;
      currentResult.newElem = newElem;
      currentResult.newImg = newImg;
    } else if(countB == countD){
      let newEl = document.createElement('h2');
      newEl.innerText = "Перси Уизли:";
      let newElem = document.createElement('p');
      newElem.innerText = "Ты амбициозен, исполнителен и ценишь правила. Твое стремление к успеху иногда ослепляет, но в конечном итоге любовь к семье всегда берет верх над карьерой.";
      let newImg = document.createElement('img');
      newImg.src = "перси.webp";
      newImg.alt = "Перси Уизли";
      newImg.style.maxWidth = "200px";
      newImg.style.height = "auto";
      newImg.style.borderRadius = "10px";
      newImg.style.margin = "10px auto";
      newImg.style.display = "block";
      result.prepend(newEl);
      result.appendChild(newImg);
      result.append(newElem);
      currentResult.newEl = newEl;
      currentResult.newElem = newElem;
      currentResult.newImg = newImg;
    } else if(countC == countD){
      let newEl = document.createElement('h2');
      newEl.innerText = "Кормак Маклагген:";
      let newElem = document.createElement('p');
      newElem.innerText = "Ты уверен в себе (иногда даже слишком!) и обожаешь быть в центре внимания. Твоему напору и умению добиваться своего можно только поаплодировать.";
      let newImg = document.createElement('img');
      newImg.src = "кормак.webp";
      newImg.alt = "Кормак Маклагген";
      newImg.style.maxWidth = "200px";
      newImg.style.height = "auto";
      newImg.style.borderRadius = "10px";
      newImg.style.margin = "10px auto";
      newImg.style.display = "block";
      result.prepend(newEl);
      result.appendChild(newImg);
      result.append(newElem);
      currentResult.newEl = newEl;
      currentResult.newElem = newElem;
      currentResult.newImg = newImg;
    } else if(countA > countB && countA > countC && countA > countD){
      let newEl = document.createElement('h2');
      newEl.innerText = "Гарри Поттер:";
      let newElem = document.createElement('p');
      newElem.innerText = "Ты — настоящий лидер с обостренным чувством справедливости. Твоя смелость и готовность жертвовать собой ради друзей делают тебя тем, на кого всегда можно положиться в трудную минуту.";
      let newImg = document.createElement('img');
      newImg.src = "гарри.jpg";
      newImg.alt = "Гарри Поттер";
      newImg.style.maxWidth = "200px";
      newImg.style.height = "auto";
      newImg.style.borderRadius = "10px";
      newImg.style.margin = "10px auto";
      newImg.style.display = "block";
      result.prepend(newEl);
      result.appendChild(newImg);
      result.append(newElem);
      currentResult.newEl = newEl;
      currentResult.newElem = newElem;
      currentResult.newImg = newImg;
    } else if(countA < countB && countB > countC && countB > countD){
      let newEl = document.createElement('h2');
      newEl.innerText = "Гермиона Грейнджер:";
      let newElem = document.createElement('p');
      newElem.innerText = "Твой острый ум и страсть к знаниям — твоя главная суперсила. Ты ценишь логику и порядок, но в глубине души ты невероятно верный и храбрый человек.";
      let newImg = document.createElement('img');
      newImg.src = "гермиона.jpg";
      newImg.alt = "Гермиона Грейнджер";
      newImg.style.maxWidth = "200px";
      newImg.style.height = "auto";
      newImg.style.borderRadius = "10px";
      newImg.style.margin = "10px auto";
      newImg.style.display = "block";
      result.prepend(newEl);
      result.appendChild(newImg);
      result.append(newElem);
      currentResult.newEl = newEl;
      currentResult.newElem = newElem;
      currentResult.newImg = newImg;
    } else if(countC > countB && countA < countC && countC > countD){
      let newEl = document.createElement('h2');
      newEl.innerText = "Рон Уизли:";
      let newElem = document.createElement('p');
      newElem.innerText = "Ты — душа компании и самый преданный друг. Твое чувство юмора спасает в любой ситуации, а за скромностью скрывается сердце истинного льва.";
      let newImg = document.createElement('img');
      newImg.src = "рон.png";
      newImg.alt = "Рон Уизли";
      newImg.style.maxWidth = "200px";
      newImg.style.height = "auto";
      newImg.style.borderRadius = "10px";
      newImg.style.margin = "10px auto";
      newImg.style.display = "block";
      result.prepend(newEl);
      result.appendChild(newImg);
      result.append(newElem);
      currentResult.newEl = newEl;
      currentResult.newElem = newElem;
      currentResult.newImg = newImg;
    } else if(countD > countB && countD > countC && countA < countD){
      let newEl = document.createElement('h2');
      let newElem = document.createElement('p');
      newEl.innerText = "Драко:";
      newElem.innerText = "Ты амбициозен и всегда защищаешь интересы своей семьи. За внешней холодностью скрывается сложная личность, которой пришлось рано повзрослеть и сделать непростой выбор.";
      let newImg = document.createElement('img');
      newImg.src = "малфой.jpeg";
      newImg.alt = "Драко Малфой";
      newImg.style.maxWidth = "200px";
      newImg.style.height = "auto";
      newImg.style.borderRadius = "10px";
      newImg.style.margin = "10px auto";
      newImg.style.display = "block";
      result.prepend(newEl);
      result.appendChild(newImg);
      result.append(newElem);
      currentResult.newEl = newEl;
      currentResult.newElem = newElem;
      currentResult.newImg = newImg;
    }
    
    
  fetch("http://web4.informatics.ru:82/api/8dc794a0052182965f3fef656483b504/test", { method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: dataJSON
  })
  .then(function(response) {
      if (response.status === 201) {
        console.log("Данные успешно отправлены!");
        return response.json();
      } else {
        console.log("Ошибка! Код: " + response.status);
      }
    })
    .then(function(data) {
      console.log(data);
      elem.innerText = data.name + ", поздравляю с завершением теста!"; 
      elem.classList.add("character");
      if (result) {
          result.prepend(elem);
      }
    })
    .catch(function(error) {
      console.log("Ошибка соединения!");
  });
});


for(let i = 0; i < inputs.length; i++){
  inputs[i].addEventListener("click", function(event){
      for(let j = 0; j < answer.length; j++){
          if (inputs[j].checked){
              answer[j].classList.add("checked");
          } else {
              answer[j].classList.remove("checked");
          }
      }
  });
}