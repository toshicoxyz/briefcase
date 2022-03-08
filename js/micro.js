

function hablar() {
    let rec;
        if(!('webkitSpeechRecognition' in window)) {
            alert("Lo siento, no puedes usar la API")
        } else {
            rec = new webkitSpeechRecognition();
            rec.lang = "es-PE";
            rec.continuous = true;
            rec.interium = true;
            rec.addEventListener("result",iniciar);
        }

    function iniciar(event){
        for (i = event.resultIndex; i < event.results.length; i++) {
            document.getElementById('texto').innerHTML = event.results[i][0].transcript;
        }
    }
    textaudio=document.querySelector('#texto')
    textaudio.innerHTML = "-Escuchando-";
    
    
    rec.start(); 
    console.log(textaudio.innerHTML);   
    
}