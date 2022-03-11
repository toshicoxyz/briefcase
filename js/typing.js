const tyText = document.querySelector('#title');


const tyTitle = (text = '',time = 200 ,hashtag = '' ) => {
    let arrayCharacters = text.split('');
    hashtag.innerHTML = '';
    let i = 0;
    let writing = setInterval(function() {
        hashtag.innerHTML += arrayCharacters[i];
        i++;
        if (i === arrayCharacters.length) {
            clearInterval(writing);
        }
    },time)
} 

tyTitle("Bienvenido a mi portafolio",200, tyText);

