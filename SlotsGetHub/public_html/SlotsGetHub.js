var options = ["bar", "bell", "cherries", "melon", "orange", "plum"];
//change user bet into a html text prompt
//var userBet = Number(prompt("How much are you betting"));
//document.write(roll(userBet));


//FUNCTIONS
function random(total){
    return Math.floor(Math.random() * total);
}
function roll(){
    var slot1=options[random(options.length)];
    var slot2=options[random(options.length)];
    var slot3=options[random(options.length)];
    var bet = document.getElementsByName("betInput");
    document.write(slot1 + " - " + slot2 + " - " + slot3 + "<br>");
    if(slot1 === slot2 === slot3){
        document.write((bet *3));
        return;
    }else if(slot1 === slot2 || slot1 === slot3 || slot3 === slot2){
        document.write((bet *2));
        return;
    }else{
        return 0;
    }
}