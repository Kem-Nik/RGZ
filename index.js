//Выбор варианта
//хэш - 3611a5ebd2abc4fed23d17c905070238

let a = 0x5070238;
console.log(a%600); //для компании
console.log(a%9); //для меню
console.log(a%43); //для валюты

//Страница О компании
function showKr(){
    document.querySelector('.inf1').style.display = 'block';
    document.querySelector('.inf2').style.display = 'none';
    document.querySelector('.inf3').style.display = 'none';
    document.querySelector('.inf4').style.display = 'none';
}
function showDep(){
    document.querySelector('.inf1').style.display = 'none';
    document.querySelector('.inf2').style.display = 'block';
    document.querySelector('.inf3').style.display = 'none';
    document.querySelector('.inf4').style.display = 'none';
}
function showGar(){
    document.querySelector('.inf1').style.display = 'none';
    document.querySelector('.inf2').style.display = 'none';
    document.querySelector('.inf3').style.display = 'block';
    document.querySelector('.inf4').style.display = 'none';
}
function showRas(){
    document.querySelector('.inf1').style.display = 'none';
    document.querySelector('.inf2').style.display = 'none';
    document.querySelector('.inf3').style.display = 'none';
    document.querySelector('.inf4').style.display = 'block';
}

// Страница Новости
function showNews (){
    document.querySelector('.text2').style='display:block;';
    document.querySelector('.show').style='display:none;';
    document.querySelector('.hide').style='display:block;';
}
function hideNews(){
    document.querySelector('.hide').style='display:none;';
    document.querySelector('.text2').style='display:none;';
    document.querySelector('.show').style='display:block;';
}

// Страница Курс Валют

function cursZAR(){
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    fetch (url)
        .then( function(response){
            return response.json();
        })
        .then( function(json){
            console.log(json)
            let ZAR = json.Valute.ZAR.Value / 10;
            let val = document.querySelector('.val');
            let from = document.querySelector('.from');
            let result = document.querySelector('.result');

            if (from.value == 'ZAR'){
                result.value =  (val.value * ZAR).toFixed(5);
            }
            else{
                result.value =  (val.value * (1/ZAR)).toFixed(5);
            }
        })
}