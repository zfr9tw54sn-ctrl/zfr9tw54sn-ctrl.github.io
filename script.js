// Получаем сохраненный язык
let currentLanguage = localStorage.getItem("language") || "ru";


// Функция смены языка

function setLanguage(language){


    currentLanguage = language;


    // сохраняем выбор

    localStorage.setItem(
        "language",
        language
    );



    // находим все элементы с переводами

    const elements = document.querySelectorAll(
        "[data-ru]"
    );



    elements.forEach(element => {


        element.innerHTML =
        element.dataset[language];


    });



    // меняем активный язык


    const ruButton =
    document.getElementById("ru");


    const enButton =
    document.getElementById("en");



    if(ruButton && enButton){


        if(language === "ru"){


            ruButton.classList.add("active");

            enButton.classList.remove("active");


        } else {


            enButton.classList.add("active");

            ruButton.classList.remove("active");


        }


    }



}




// =====================================
// КНОПКИ RU / EN
// =====================================


const ruButton =
document.getElementById("ru");


const enButton =
document.getElementById("en");




if(ruButton){


    ruButton.addEventListener(
        "click",
        function(){

            setLanguage("ru");

        }
    );


}




if(enButton){


    enButton.addEventListener(
        "click",
        function(){

            setLanguage("en");

        }
    );


}




// =====================================
// ЗАПУСК ПРИ ОТКРЫТИИ СТРАНИЦЫ
// =====================================


document.addEventListener(
"DOMContentLoaded",
function(){


    setLanguage(currentLanguage);


});