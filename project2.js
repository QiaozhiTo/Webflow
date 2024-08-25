let  aegeanSea= document.getElementsByClassName('aegeanSea')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let background2 = document.getElementsByClassName('background2')[0]
console.log(background2);
let btn = document.getElementById('btn')
console.log(btn);


window.addEventListener('load' , function(){
    box1.style.marginTop='-500px'
    box2.style.marginTop = '1000px'
    setTimeout(function(){
        box2.style.display = 'none'
        
    }, 1000);

})
btn.addEventListener('click', function(){
    // background2.style.display='none'
    background2.style.width='0px'
}) 


// let pageBox = document.getElementsByClassName('pageBox')
// var w1 = aegeanSea.offsetWidth, h1 = aegeanSea.offsetHeight;
// var w2 = pageBox.offsetWidth, h2 = pageBox.offsetHeight;
// document.querySelector('.pageBox').style.left = (w1-w2)+ 'px';
// document.querySelector('.pageBox').style.top = (h1-h2) + 'px';
