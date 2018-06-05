function cadastro(numero){
    var display1 = document.getElementById('card1').style.display;
    var display2 = document.getElementById('card2').style.display;
    if(numero == 1){
        
        if(display1 == "none"){
            document.getElementById('card1').style.display = 'block';
            document.getElementById('card2').style.display = 'none';
        }
    }
    else{
        if(display2 == "none"){
            document.getElementById('card2').style.display = 'block';
            document.getElementById('card1').style.display = 'none';
        }
    }
}