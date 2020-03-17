var categories = document.querySelector('#categories');

var mains = [];
var categori = [];

var informascion = [];

fetch("https://raw.githubusercontent.com/andresnorato/JSON/master/categories%20(1).json")

.then(data => data.json())
    .then(users => {
        categori = users;
        categori.map((user, i) => {
            sums = i + 1;
            categories.innerHTML += `
            <div class= "categories-item"  onmouseup="cl1(${i})" id = "e${i}">
            <div class = "categories-item-icon" onclick = ${"catego"+sums+"()"} id = "cambio" >
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
(global) => {

}

var sum = 0;
var con = 1



//Funciones Javascript

function fethcc() {
    fetch("https://raw.githubusercontent.com/andresnorato/JSON/master/products%20(1).json")



    .then(data => data.json())
        .then(produc => {
            var mains = produc;
            mains.map((pro, e) => {
                sum = e + 1;
                menus.innerHTML += `
        <div class ="contenedor" onclick = "${"producto"+sum+"()"}">
            <div class = "products"  id = "animado">
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

                console.log(mains);

            });

        });


}
fethcc()


//Funtions

var result = document.getElementById("direct")

result.addEventListener("click", (ubi) => {
    var direc = document.getElementById("parrafo")
    var direccion = prompt("Ingresa la direccion", "--");
    if (direccion == "") {
        alert("Ingrese la ubicacion correctament")
    } else {
        direc.innerHTML = direccion;
    }
});

var times = document.getElementById("time")


times.addEventListener("click", (tim) => {
    var tin = document.getElementById("timess")
    var tiempo = prompt("Tiempo Destinado", "0000");

    tin.innerHTML = tiempo;

})

var totalpro = 0;

var cops = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var por1 = 1;
var precio = 90;

function producto1() {

    if (por1 == 1) {

        document.getElementById("pedido").innerHTML += `
                    <div class="delivery-item text-bold">
                    <img src="assets/images/pexels-photo-675951.jpeg" alt="" class="img-delivery">
                    <span id='dta'>${por1}x</span>                   
                    <span>Filete de Ternera</span>
                    <span href="#" class="text-muted" id = "cop1"></span>
                    </div>`
        por1++
        cops[0] = precio;
        totall()
        precio = precio + precio;
        console.log("precio1" + cops)

    } else {
        document.getElementById("dta").innerHTML = `${por1}x`
        por1++
        totall()
        cops[0] = precio;
        precio = precio + precio;
    }
}

var por2 = 1;
var precio2 = 100;

function producto2() {
    if (por2 == 1) {
        document.getElementById("pedido").innerHTML += `
    <div class="delivery-item text-bold">
    <img src="assets/images/pexels-photo-376464.jpeg" alt="" class="img-delivery">
    <span id='dtas'>${por2}x</span>                   
    <span>Desayuno de primer</span>
    <span href="#" class="text-muted" id = "cop1"></span>
</div>
  `
        por2++
        cops[1] = precio2;
        totall()
        precio2 = precio2 + precio2;
        console.log("precio2" + cops)

    } else {
        document.getElementById("dtas").innerHTML = `${por2}x`

        por2++
        totall()
        cops[1] = precio2;
        precio2 = precio2 + precio2;

    }
}
var por3 = 1;
var precio3 = 100;

function producto3() {
    if (por3 == 1) {
        document.getElementById("pedido").innerHTML += `
    <div class="delivery-item text-bold">
    <img src="assets/images/pexels-photo-461198.jpeg" alt="" class="img-delivery">
    <span id='dtaas'>${por3}x</span>                   
    <span>Burrito de pollo</span>
    <span href="#" class="text-muted" id = "cop1"></span>
</div>
  `
        por3++
        cops[2] = precio3;
        totall()
        precio3 = precio3 + precio3;
        console.log("precio2" + cops)

    } else {
        document.getElementById("dtaas").innerHTML = `${por3}x`

        por3++
        totall()
        cops[2] = precio3;
        precio3 = precio3 + precio3;

    }
}

var por4 = 1;

function producto4() {
    if (por4 == 1) {
        document.getElementById("pedido").innerHTML += `
        <div class="delivery-item text-bold">
        <img src="assets/images/salmon-dish-food-meal-46239.jpeg" alt="" class="img-delivery">
        <span id='dtastt'>${por4}x</span>                   
        <span>Plato de salmon</span>
        <span href="#" class="text-muted">$${preci}</span>
    </div>
        `
        por4++
    } else {
        document.getElementById("dtastt").innerHTML = `${por4}x`
        por4++
    }
}


function producto5() {
    document.getElementById("pedido").innerHTML += ` <
        div class = "delivery-item text-bold" >
            <
            img src = "assets/images/pexels-photo-1099680.jpeg"
            alt = ""
            class = "img-delivery" >
            <
            span > 1 x < /span> <
            span > Postre < /span> <
            span href = "#"
            class = "text-muted" > $0 .99 < /span> <
            /div>
        `
}

function totall() {
    var prec = 0;

    cops.map((sum) => {

        prec = prec + sum
        console.log(prec + "total")

    })
    document.getElementById("precio").innerHTML = prec + '$'

}
totall()


function producto6() {
    document.getElementById("pedido").innerHTML += ` <
        div class = "delivery-item text-bold" >
            <
            img src = "assets/images/pexels-photo-1600711.jpeg"
            alt = ""
            class = "img-delivery" >
            <
            span > 1 x < /span> <
            span > Sandwich < /span> <
            span href = "#"
            class = "text-muted" > $0 .99 < /span> <
            /div>
        `


}

function producto7() {
    document.getElementById("pedido").innerHTML += ` <
        div class = "delivery-item text-bold" >
            <
            img src = "assets/images/pexels-photo-262959.jpeg"
            alt = ""
            class = "img-delivery" >
            <
            span > 1 x < /span> <
            span > Plato de agucate < /span> <
            span href = "#"
            class = "text-muted" > $0 .99 < /span> <
            /div>
        `
}

var por8 = 1;
var precio8 = 100;

function producto8() {
    if (por8 == 1) {
        document.getElementById("pedido").innerHTML += `
    <div class="delivery-item text-bold">
    <img src="assets/images/pexels-photo-156114.jpeg" alt="" class="img-delivery">
    <span id='dtats'>${por8}x</span>                   
    <span>Hamburgesas</span>
    <span href="#" class="text-muted" id = "cop1"></span>
    </div>
  `
        por8++
        cops[7] = precio8;
        totall()
        precio8 = precio8 + precio8;
        console.log("precio2" + cops)

    } else {
        document.getElementById("dtats").innerHTML = `${por8}x`

        por8++
        totall()
        cops[7] = precio8;
        precio8 = precio8 + precio8;

    }
}


//funciones de busquedad

function catego1() {
    document.getElementById("menu").innerHTML = ""
    fethcc()
}

function catego2() {
    var dis = document.getElementById("menu");
    document.getElementById("menu").innerHTML = `
    <div class="products-item" onclick = "producto3()" >
                        <div class="img-product" id="le-paris-dakar">
                            <div class="duration-product">
                                40-60 min
                            </div>
                        </div>
                        <h3>Pizza</h3>
                        <div class="content-product">
                            <img src="assets/icons/star.svg" width="12px"> &nbsp; 4.7
                            <div class="product-description">
                                &nbsp; Crepepies &nbsp; Sandwich &nbsp; $
                            </div>
                        </div>
                    </div>
    `
}


function catego3() {
    var dis = document.getElementById("menu");
    document.getElementById("menu").innerHTML = `
    <div class="products-item">
                        <div class="img-product" id="le-paris-dakar">
                            <div class="duration-product">
                                40-60 min
                            </div>
                        </div>
                        <h3></h3>
                        <div class="content-product">
                            <div class="product-description">
                                &nbsp; Crepepies &nbsp; Sandwich &nbsp; $
                            </div>
                        </div>
                    </div>
    `

}


function catego4() {
    var dis = document.getElementById("menu");
    document.getElementById("menu").innerHTML = `
    <div class="products-item"   onclick =  "producto8()">
                        <div class="img-product" id="hambur">
                            <div class="duration-product">
                                40-60 min
                            </div>
                        </div>
                        <h3>Hambugers</h3>  
                        <div class="content-product">
                            <img src="assets/icons/star.svg" width="12px"> &nbsp; 4.7
                            <div class="product-description">
                                &nbsp; Crepepies &nbsp; Sandwich &nbsp; $
                            </div>
                        </div>
                    </div>
    `
}

function catego5() {
    var dis = document.getElementById("menu");
    document.getElementById("menu").innerHTML = `
    <div class="products-item">
                        <div class="img-product" id="le-paris-dakar">
                            <div class="duration-product">
                                40-60 min
                            </div>
                        </div>
                        <h3>askdhjkhasd</h3>
                        <div class="content-product">
                            <img src="assets/icons/star.svg" width="12px"> &nbsp; 4.7
                            <div class="product-description">
                                &nbsp; Crepepies &nbsp; Sandwich &nbsp; $
                            </div>
                        </div>
                    </div>
    `
}

function catego6() {
    var dis = document.getElementById("menu");
    document.getElementById("menu").innerHTML = `
    <div class="products-item">
                        <div class="img-product" id="le-paris-dakar">
                            <div class="duration-product">
                                40-60 min
                            </div>
                        </div>
                        <h3>askdhjkhasd</h3>
                        <div class="content-product">
                            <img src="assets/icons/star.svg" width="12px"> &nbsp; 4.7
                            <div class="product-description">
                                &nbsp; Crepepies &nbsp; Sandwich &nbsp; $
                            </div>
                        </div>
                    </div>
    `
}

function catego7() {
    var dis = document.getElementById("menu");
    document.getElementById("menu").innerHTML = `
    <div class="products-item">
                        <div class="img-product" id="le-paris-dakar">
                            <div class="duration-product">
                                40-60 min
                            </div>
                        </div>
                        <h3>askdhjkhasd</h3>
                        <div class="content-product">
                            <img src="assets/icons/star.svg" width="12px"> &nbsp; 4.7
                            <div class="product-description">
                                &nbsp; Crepepies &nbsp; Sandwich &nbsp; $
                            </div>
                        </div>
                    </div>
    `
}

function catego8() {
    var dis = document.getElementById("menu");
    document.getElementById("menu").innerHTML = `
    <div class="products-item">
                        <div class="img-product" id="le-paris-dakar">
                            <div class="duration-product">
                                40-60 min
                            </div>
                        </div>
                        <h3>askdhjkhasd</h3>
                        <div class="content-product">
                            <img src="assets/icons/star.svg" width="12px"> &nbsp; 4.7
                            <div class="product-description">
                                &nbsp; Crepepies &nbsp; Sandwich &nbsp; $
                            </div>
                        </div>
                    </div>
    `
}

function cl1(vd) {
    ani()
}

function ani() {
    cal.addEventListener("click", (functio) => {
        cal.style.backgroundColor = "green";
    });
}