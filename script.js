var iniciar = document.getElementById('iniciar');
var pause = document.getElementById('pause');
var redefinir = document.getElementById('redefinir');

var p_minutos = document.getElementById('p_minutos');
var p_segundos = document.getElementById('p_segundos');

var ciclos = document.getElementById('ciclos');

var d_minutos = document.getElementById('d_minutos');
var d_segundos = document.getElementById('d_segundos');

//musica
var parada = new Audio('tempo.wav');



var iniciarTempo;

iniciar.addEventListener('click', function(){
    
    if(iniciarTempo === undefined){
        iniciarTempo = setInterval(tempo,1000);
    }
    else{
        alert('O tempo já foi iniciado');
    }
});

redefinir.addEventListener('click', function(){
    p_minutos.innerText = 25;
    p_segundos.innerText = '00';

    d_minutos.innerText = 5;
    d_segundos.innerText = '00';

    ciclos.innerText = 0;
    
    pararTempo();
    iniciarTempo = undefined;

});

pause.addEventListener('click', function(){
    pararTempo();
    iniciarTempo = undefined;
});


function tempo(){
    //pomodoro
    if(p_segundos.innerText != 0){
        p_segundos.innerText--;
    }
    else if(p_minutos.innerText != 0 && p_segundos.innerText == 0){
        p_segundos.innerText = 59;
        p_minutos.innerText--;
    }
    
    //descanso
    if(p_minutos.innerText == 0 && p_segundos.innerText == 0){
        if(d_segundos.innerText != 0){
            d_segundos.innerText--;
        }
        else if(d_minutos.innerText != 0 && d_segundos.innerText == 0){
            d_segundos.innerText = 59;
            d_minutos.innerText--;
        }
    }
    //ciclos
    if(p_minutos.innerText == 0 && p_segundos.innerText==1){
        
        parada.play();
    }


    if(p_minutos.innerText == 0 && p_segundos.innerText == 0 && d_minutos.innerText == 0 && d_segundos.innerText == 0){
        p_minutos.innerText = 0;
        p_segundos.innerText = "10";

        d_minutos.innerText = 0;
        d_segundos.innerText = "10";

        if(ciclos.innerText >= 0 && ciclos.innerText <3){
            
            parada.play();
            ciclos.innerText++;
            
        }
        else if (ciclos.innerText == 3){
            
            parada.play()
            d_minutos.innerText = 0;
            d_segundos.innerText = "15"
            ciclos.innerText++;
        }

        else if(ciclos.innerText == 4){
            var final = new Audio('final.wav');
            final.play();
            
            

            ciclos.innerText = 0;

            pararTempo();
            iniciarTempo = undefined;
            
        }
        
    }


};



//Parar tempo
function pararTempo(){
    clearInterval(iniciarTempo);
}