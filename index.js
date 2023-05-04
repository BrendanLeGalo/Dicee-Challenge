
var n1 = Math.ceil(Math.random()*6);
var n2 = Math.ceil(Math.random()*6);
console.log(n1);
console.log(n2);

var img1 = "images/dice" + n1 + ".png";
var img2 = "images/dice" + n2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",img1);
document.querySelectorAll("img")[1].setAttribute("src",img2);


if (n1 > n2){
    document.querySelector("h1").textContent="Player 1 wins!";
}
else if (n1 === n2){
    document.querySelector("h1").textContent="Draw!";
}
else {
    document.querySelector("h1").textContent="Player 2 wins!";
}




document.querySelector(".btn").addEventListener("click",function(){
    location.reload();
})