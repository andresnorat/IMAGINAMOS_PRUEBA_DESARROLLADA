var categories = document.querySelector('#categories');

categori = [];

fetch("https://raw.githubusercontent.com/andresnorato/JSON/master/categories%20(1).json")

.then(data => data.json())
    .then(users => {
        categori = users;
        categori.map((user, i) => {
            // div_user.innerHTML += "<img src= " + user.icon + " >";
            categories.innerHTML += `
            <div class= "categories-item">
            <div class = "categories-item-icon">
            <img  class="img_icon"  src  = ${user.icon}>
            </div>
            <div class = "categories-item-content"> ${user.name} </div>
          </div>
            `;
            console.log(i);
        });
    });



var menus = document.querySelector('#menu');

mains = [];


fetch("https://raw.githubusercontent.com/andresnorato/JSON/master/products%20(1).json")

.then(data => data.json())
    .then(produc => {
        mains = produc;
        mains.map((pro, e) => {
            // div_user.innerHTML += "<img src= " + user.icon + " >";
            menus.innerHTML += `
        <div class ="contenedor">
            <div class = "products">
                <div class="products-item">
                <img  class= "img-product" src  = ${pro.image}>
                <div class="duration-product">
                ${pro.time}
            </div>
                <h4> ${pro.name} </h4>  
                </div>
               
                    <div class="product-description">
                    <img class="iconss" src = "./assets/icons/star.svg">   ${pro.qualification}  &nbsp; Crepepies &nbsp; Sandwich &nbsp; $  ${+pro.price}
                </div>
                </div>
            </div>
           
            </div>
            `;
            console.log(e);
        });
    });