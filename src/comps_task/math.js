let coins=5;
let color_ar=["green", "red"];
let ans_ar=["you win ", "you lose"];
window.onload=function(){
   
document.querySelector("#id_cons").innerHTML=coins;
}

function rollDice(){
    if(coins>0){
    let rnd=Math.random()*6;
    rnd=Math.ceil(rnd);
    if(rnd==5||rnd==6){
        coins++
        document.querySelector("#id_ans").innerHTML=ans_ar[0];
        document.querySelector("#id_ans").style.color=color_ar[0]
    }
    else{
        coins--;
        document.querySelector("#id_ans").innerHTML=ans_ar[1];
        document.querySelector("#id_ans").style.color=color_ar[1]
    }

    document.querySelector("#id_cons").innerHTML=coins;
    document.querySelector("#id_img").src=`dice_images/dice${rnd}.jpg`;
}else{
    alert("you need give money from the bank");
    coins=0;
}
}
