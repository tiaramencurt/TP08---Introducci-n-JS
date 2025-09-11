const input = document.getElementById("opciones");
const resultado = document.getElementById("resultado");
const titulo = document.getElementById("titulo");

function ej1pc() {
    titulo.innerHTML = "Ejercicio 1 - MIDEMA";
    resultado.innerHTML = "<h1>Resultado</h1>";
    input.innerHTML = "<p>Ingrese su nombre: </p><input type='text' id='nombre'>";
    input.innerHTML += "<p>Ingrese su fecha de nacimiento: </p><input type='date' id='fecha'>";
    input.innerHTML += "<button onclick='ej1()'>Enviar</button>";
}

function ej2pc() {
    titulo.innerHTML = "Ejercicio 2 - MIDEMA";
    resultado.innerHTML = "<h1>Resultado</h1>";
    input.innerHTML = "<p>Ingrese una fruta:</p><input type='text' id='fruta'>";
    input.innerHTML += "<button onclick='ej2()'>Enviar</button>";
}

function ej3pc() {
    titulo.innerHTML = "Ejercicio 3 - MIDEMA";
    resultado.innerHTML = "<h1>Resultado</h1>";
    input.innerHTML = "<button onclick='ej3()'>Ver comparaciones</button>";
}

function ej4pc() {
    titulo.innerHTML = "Ejercicio 4 - MIDEMA";
    resultado.innerHTML = "<h1>Resultado</h1>";
    input.innerHTML = "<p>Ingrese el nombre de la ciudad: </p><input type='text' id='nombre'>";
    input.innerHTML += "<p>Ingrese la fecha de fundación de la ciudad: </p><input type='date' id='fechaFundacion'>";
    input.innerHTML += "<p>Ingrese la población de la ciudad: </p><input type='number' id='poblacion'>";
    input.innerHTML += "<p>Ingrese la extensión de la ciudad: </p><input type='number' id='extension'>";
    input.innerHTML += "<button onclick='ej4()'>Mostrar objeto ciudad</button>";
}

function ej5pc() {
    titulo.innerHTML = "Ejercicio 5 - MIDEMA";
    resultado.innerHTML = "<h1>Resultado</h1>";
    input.innerHTML = "<p>Ingrese una lista de números separados por coma: </p><input type='text' id='numeros'>";
    input.innerHTML += "<button onclick='ej5()'>Enviar y mostrar dobles</button>";
}

function ej6pc() {
    titulo.innerHTML = "Ejercicio 6 - MIDEMA";
    resultado.innerHTML = "<h1>Resultado</h1>";
    input.innerHTML = "<p>Ingrese la base de los triangulos a dibujar: </p><input type='number' id='baseTriangulos'>";
    input.innerHTML += "<button onclick='ej6()'>Dibujar triángulos</button>";
}

function ej7pc() {
    titulo.innerHTML = "Ejercicio 7 - MIDEMA";
    resultado.innerHTML = "<h1>Resultado</h1>";
    input.innerHTML = "<p>Ingrese una lista de nombres separados por coma: </p><input type='text' id='nombres'>";
    input.innerHTML += "<button onclick='ej7()'>Enviar y mostar nombres que empiezan por 'A'</button>";
}

function ej8pc() {
    titulo.innerHTML = "Ejercicio 8 - MIDEMA";
    resultado.innerHTML = "<h1>Resultado</h1>";
    input.innerHTML = "<p>Ingrese un texto: </p><input type='text' id='texto'><br>";
    input.innerHTML += "<p>Palabra a reemplazar: </p><input type='text' id='buscar'><br>";
    input.innerHTML += "<p>Palabra nueva: </p><input type='text' id='reemplazo'><br>";
    input.innerHTML += "<button onclick='ej8()'>Enviar y reemplazar</button>";
}

function ej9pc() {
    titulo.innerHTML = "Ejercicio 9 - MIDEMA";
    resultado.innerHTML = "<h1>Resultado</h1>";
    input.innerHTML = "<p>Ingrese un texto: </p><input type='text' id='texto'>";
    input.innerHTML += "<p>Ingrese un número: </p><input type='number' id='num'>";
    input.innerHTML += "<button onclick='ej9()'>Enviar</button>";
}

function ej10pc() {
    titulo.innerHTML = "Ejercicio 10 - MIDEMA";
    resultado.innerHTML = "<h1>Resultado</h1>";
    input.innerHTML = "<p>Ingrese una lista de elementos separados por coma: </p><input type='text' id='lista'>";
    input.innerHTML += "<button onclick='ej10()'>Enviar</button>";
}

function ej11pc() {
    titulo.innerHTML = "Ejercicio 11 - MIDEMA";
    resultado.innerHTML = "<h1>Resultado</h1>";
    input.innerHTML = "<p>Ingrese pedidos en formato 'nombre:total' separados por coma: </p><input type='text' id='pedidos'>";
    input.innerHTML += "<button onclick='ej11()'>Enviar y calcular total</button>";
}