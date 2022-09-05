const h2 = document.getElementById('h2');
const h4 = document.getElementById('h4');
const btn = document.getElementById('btn');
const number = document.getElementById('numero');
const info = document.getElementById('info');
const cantidadIngredientes = document.getElementById('cant_ing');
const formPizza = document.getElementById('form_pizza');
const ing = document.getElementById('ing');
const nombrePizza = document.getElementById('nombre_pizza');
const precioPizza = document.getElementById('precio');
const allin = document.querySelectorAll('input[name="alling"]');


let pizzas = [{
        id: 1,
        nombre: "Napolitana",
        ingredientes: ["salsa de Tomate", " Morron", "Queso"],
        precio: 500
    },
    {
        id: 2,
        nombre: "4 Quesos",
        ingredientes: ["Roquefort", "Provolone", "Queso Azul", "Queso sardo"],
        precio: 1100
    },
    {
        id: 3,
        nombre: "Especial",
        ingredientes: ["Huevo", "lPanceta", "Morron", " Queso"],
        precio: 1499
    },
    {
        id: 4,
        nombre: "Calabreza",
        ingredientes: ["Aceitunas", "Calabreza", "Queso"],
        precio: 1300
    },
    {
        id: 5,
        nombre: "J y Q",
        ingredientes: ["Jamon", "Queso", "Aceitunas"],
        precio: 990
    },
    {
        id: 6,
        nombre: "Cantimpalo",
        ingredientes: ["Cantimpalo", "Queso", "Aceitunas"],
        precio: 1400
    }
];

const renderPizza = () => {
    if (pizzaSearch(pizzas) == undefined) {
        alert(' no existe la pizza sleccionada');
        return
    } else {
        info.innerHTML =
            ` <h2 class="h2" id="h2">Nombre de la pizza:</h2>
              <h2 class="h2"><b class ="pizza" >${pizzaSearch(pizzas).nombre}</b> <h2>  
              <h4 class="h4" id="h4">Precio:<b class ="pizza">$${pizzaSearch(pizzas).precio} </b></h4> `
    }
    number.value = '';
}

const pizzaSearch = (p) => {
    const valor = getValue();
    const laPizza = p.find(pizza => pizza.id == valor)
    return laPizza
}

const getValue = () => {
    const valor = number.value
    return valor;
}
const agregarInputs = () => {
    const ingrediente = document.createElement('input');
    ingrediente.classList.add('inp');
    ingrediente.name = "alling"
    ingrediente.placeholder = 'Ingrediente';
    ing.appendChild(ingrediente);

}


const addorLess = () => {


    let cantidad = ing.childNodes.length - 1

    if (cantidad <= cantidadIngredientes.value) {
        agregarInputs()
    } else {
        const last = ing.lastChild;
        ing.removeChild(last)
    }


}
const savePizza = (e) => {
    e.preventDefault();
    pizzas = [...pizzas, {
        id: pizzas.length + 1,
        nombre: nombrePizza.value,
        precio: precioPizza.value,
        ingredientes: []

    }]
    console.log(allin)
    console.log(pizzas)
}

const init = () => {
    btn.addEventListener('click', renderPizza);

    cantidadIngredientes.addEventListener('change', addorLess);
    formPizza.addEventListener('submit', savePizza)

}

init();