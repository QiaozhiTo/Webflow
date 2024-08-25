let  container1= document.querySelector('.container1')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let background2 = document.getElementsByClassName('background2')[0]
let background3 = document.getElementsByClassName('background3')[0]
let sideBar = document.querySelector('.sideBar')
let dest = document.querySelector('.destination')
// console.log(background2);
let btn = document.getElementById('btn')
console.log(btn);

// 1. background image change
let idx = 0
let backgroundImg=['https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd3355581e17e093caed_011.jpeg','https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg', 'https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd2961c3e396968aac28_031.jpeg']
console.log(backgroundImg);
btn.addEventListener('click', function(){
    container1.style.backgroundImage = `url(${backgroundImg[idx]})`
    idx ++
    setTimeout(() => {
        box1.style.animation = 'none'
    }, 1000);


})
// loading
window.addEventListener('load' , function(){
    box1.style.marginTop='-500px'
    box2.style.marginTop = '1000px'
    setTimeout(function(){
        box2.style.display = 'none'
        
    }, 1000);

})
// change background
// btn.addEventListener('click', function(){
//     container1.style.backgroundImage= url('https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd3355581e17e093caed_011.jpeg')

// }) 

// 1. left menu bar
// let menuButton = document.getElementById('menuButton')
// console.log(menuButton);
// let computedStyle = window.getComputedStyle(sideBar)
// menuButton.addEventListener('click', function(){
//     if(computedStyle.visibility=='hidden'){
//         setTimeout(() => {
//             sideBar.style.visibility='visible'
            
//         }, 100);
//     }
//     else{
//         setTimeout(() => {
//             sideBar.style.visibility='hidden'
            
//         }, 100);
//     }

// }) 

let menuButton = document.getElementById('menuButton')
let menuButton2 = document.getElementById('menuButton2')

console.log(menuButton);

console.log(menuButton2);
let computedStyle = window.getComputedStyle(sideBar)
menuButton.addEventListener('click', function(){
    if(computedStyle.marginLeft=='-500px'){
        setTimeout(() => {
            sideBar.style.marginLeft='0px'
            
        }, 10);
    }

}) 

menuButton2.addEventListener('click',function(){
    if(computedStyle.marginLeft=='0px'){
        setTimeout(() => {
            sideBar.style.marginLeft='-500px'
            
        }, 10);
    }
})

// let imgAfrica = document.getElementById('africaImg')
let africaContents =document.getElementsByClassName('africaContents')[0]
// console.log(imgAfrica);
console.log(africaContents);

africaContents.addEventListener('mouseover', function(){
    // imgAfrica.src = 'https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg'
    africaContents.style.backgroundImage = 'url(https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg)'
    africaContents.style.color= 'white'
    africaContents.style.transform = 'scale(1.1)'
    // africaContents.style.overflow='hidden'
})
africaContents.addEventListener('mouseout', function(){
    africaContents.style.backgroundImage = ''
    africaContents.style.color= 'black'
    africaContents.style.transform = 'scale(1)'



})

let destinOption = document.getElementsByClassName('destinOption')[0]
let destination = document.getElementsByClassName('destination')[0]
destination.addEventListener('click', function(){
    if( destinOption.style.opacity == 0){
        destinOption.style.opacity = 1
        destinOption.style.transition = 'all 1s'

    }
    else{
        destinOption.style.opacity = 0

    }
})

let internalCircle = document.getElementsByClassName('internalCircle')[0]
let outerCircle =document.getElementsByClassName('outerCircle')[0]
let video = document.getElementsByClassName('video')[0]

internalCircle.addEventListener('mouseover', function(){
    video.style.opacity = '1'
    console.log('mouseover');
    internalCircle.style.animation = 'changes 3s linear infinite'
    internalCircle.style.backgroundColor = 'black'
    outerCircle.style.backgroundColor = 'white'

    outerCircle.style.animation = 'changesOutter 3s linear infinite'

})

internalCircle.addEventListener('mouseout', function(){
    console.log('mouseout');
    internalCircle.style.animation = ''
    internalCircle.style.backgroundColor = 'white'
    outerCircle.style.animation = ''
    video.style.opacity = '0'



})

let text = document.getElementsByClassName('text')[0]
text.addEventListener('mouseover', function(){
    text.style.borderRadius = '4px'
    // text.style.transform = 'scale(1.1)'
    text.style.transition = 'all 3s'
    text.style.backgroundColor = 'rgb(247, 248, 252)'
    text.style.overflow = 'hidden'
    

})
text.addEventListener('mouseout',function(){
    text.style.backgroundColor = ''
    text.style.transform = ''
})