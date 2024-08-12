// This is selecting the text

let maaa = document.getElementsByClassName("mmm");
// This allows the color to change when the mouse is on or off the text

for(let i = 0; i<maaa.length;i++){
maaa[i].addEventListener("mouseover", function(event){
  maaa[i].style.color = "yellow";
});
  
  maaa[i].addEventListener("mouseout", function(event){
    maaa[i].style.color = "black";
  });
  };

let ms = document.getElementById("mss");

for(let i = 0; i<ms.length;i++){
ms[i].addEventListener("  mouseover", function(event){
  ms[i].style.color = "yellow";
});
//also had another evenlistener
ms[i].addEventListener("mouseout", function(event){
  ms[i].style.color = "black";
});
};