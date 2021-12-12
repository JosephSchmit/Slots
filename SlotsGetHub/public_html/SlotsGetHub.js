var options = ["bar", "bell", "cherries", "melon", "orange", "plum"];




//FUNCTIONS
function random(total){
    return Math.floor(Math.random() * total);
}
function image(id, colom){
    var picture = document.getElementById(id);
    //var picsrc = picture.src;
    
    if (colom === "bar"){
        picture.src = "bar.jpg";
    }else if(colom === "bell"){
        picture.src = "bell.jpg";
    }else if(colom === "cherries"){
        picture.src = "cherries.jpg";
    }else if(colom === "melon"){
        picture.src = "melon.jpg";
    }else if(colom === "orange"){
        picture.src = "orange.jpg";
    }else if(colom === "plum"){
        picture.src = "plum.jpg";
    }
    return;
}
function roll(){
    var slot1=options[random(options.length)];
    var slot2=options[random(options.length)];
    var slot3=options[random(options.length)];
    //var money = document.getElementById("winnings");
    
    var bet = Number(document.getElementById("betInput").value);
    

        document.getElementById("winnings").innerHTML = 
                document.getElementById("winnings").innerHTML - bet;

        image("slot1", slot1);
        image("slot2", slot2);
        image("slot3", slot3);


        if(slot1 === slot2 === slot3){
            document.getElementById("winnings").innerHTML = 
                Number(document.getElementById("winnings").innerHTML) + (bet * 3);
            document.getElementById("endMGS").innerHTML = "You Won Big!!! You won: " + (bet *3) + ". play again?";
        }else if(slot1 === slot2 || slot1 === slot3 || slot3 === slot2){
            document.getElementById("winnings").innerHTML = 
                Number(document.getElementById("winnings").innerHTML) + (bet * 2);

            document.getElementById("endMGS").innerHTML = "You Won!!! You won: " + (bet *2) + ". play again?";
        }else{
            document.getElementById("endMGS").innerHTML = "Sorry you have lost. Try again?";
        }
        return;

        //document.getElementById("endMGS").innerHTML = "Sorry you can't spend more than you have.";

        //document.getElementById("endMGS").innerHTML = "You are out of money.";

    
}