let dom = document.querySelector(".cart_wrapper")



// img
// name
//user

let cam = "https://media.mercola.com/assets/images/foodfacts/mango-nutrition-facts.jpg"

for(let i = 0; i<10; i ++){
    let html = `<div class="cart">
<div id="ava"></div>
<div class="cart_content">
    <p id="name">2020 World Champs Gaming Warzone</p>
    <div class="user">
        <img src="${cam}" alt="">
        <div class="name">
            <p>Nguyen Cuong <i class="fad fa-check-circle"></i></p>
            <p>Call of Duty</p>
        </div>
    </div>
    <hr>
    <div class="info">
        <div class="live"><i class="fas fa-wifi"></i> <span> Live</span></div>
        <div class="watching">
            <div class="dot"></div>
            <span>4.2K watching</span>
        </div>
    </div>
</div>
</div> 
`
dom.innerHTML +=  html
}



