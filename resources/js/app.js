//TOFIX: 1;

/*Display the AlertBox*/
let buCopy = document.querySelectorAll(".card-copy");
let alertBox = document.getElementById("alert-container");
let animationBlock = document.querySelectorAll(".animation-block")
for(let i = 0; i < buCopy.length; i++){

  buCopy[i].addEventListener("click", function(){
    alertBox.style = `display: block;`;
    /*get animation block html codes dynamically*/
    document.getElementById("htmlCodes").innerText = animationBlock[i].innerHTML ;
    /*TOFIX: get animation block styles dynamically!!!!!!!!!!!!!!!!!!*/
    document.getElementById("cssCodes").innerText = animationBlock[i].child.innerHTML;
    console.log()
})
}
/*Close the AlertBox when alert-close is clicked*/
/*revert buCopied background-color and color*/
let buClose = document.querySelector("#alert-close");
buClose.addEventListener("click", function(){
  alertBox.style = `display: none;`
  for(let k = 0; k < buCopied.length; k++){
    buCopied[k].style = `background-color: #1D1F31;color:white;`
  }
})
/*when buCopied is clicked change the color and background-color to green*/
let buCopied = document.querySelectorAll(".alert-content-copy");
for(let j = 0; j < buCopied.length; j++ ){
  buCopied[j].addEventListener("click", function(){
    this.style = `background-color: #1fe271;color:#1D1F31;`
  })
}
