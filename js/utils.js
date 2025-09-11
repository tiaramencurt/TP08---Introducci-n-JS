function ej1() {
    let nombre = document.getElementById("nombre").value;
    const fechaString = document.getElementById("fecha").value;
    if(nombre == "")
        {
            nombre = "Nadie";
        }
    const fecha = new Date(fechaString);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) 
    {
        edad--;
    }
    if(edad < 0 || isNaN(edad))
        {
            console.log(`Nacimiento invalido`);
            resultado.innerHTML = `Nacimiento invalido`;
        }else
            {
                console.log(`Hola ${nombre}, tienes ${edad} años!`);
                resultado.innerHTML = `Hola ${nombre}, tienes ${edad} años!`;
            }
}

function ej2() {
    const frutas = ["manzana", "banana", "pera", "naranja", "durazno", "frutilla", "kiwi", "mango", "uva", "sandía"];
    console.log("Frutas disponibles:", frutas.join(", "));
    const fruta = document.getElementById("fruta").value;
    if (fruta === "") 
    {
        resultado.innerHTML = "No ingresaste ninguna fruta";
    }else if (frutas.includes(fruta.toLowerCase())) 
    {
        resultado.innerHTML = `Sí, tenemos ${fruta}!`;
    } else {
        resultado.innerHTML = `No, no tenemos ${fruta}!`;
    }
}

function ej3() {
    const A = 10 == "10";
    const B = 10 === "10";
    const C = typeof 10.6;
    const D = true == 1;
    resultado.innerHTML = `
        10 == "10": ${A}<br>
        10 === "10": ${B}<br>
        typeof 10.6: ${C}<br>
        true == 1: ${D}<br>
    `;
}

function ej4() {
    const ciudad = {
        nombre: document.getElementById("nombre").value,
        fechaFundacion: document.getElementById("fechaFundacion").value,
        poblacion: document.getElementById("poblacion").value,
        extension: document.getElementById("extension").value
    };
    let salida = "";
    for (let clave in ciudad) {
        salida += `${clave}: ${ciudad[clave]}<br>`;
    }
    resultado.innerHTML = salida;
}

function ej5() {
    const lista = document.getElementById("numeros").value.split(",").map(n => Number(n)).filter(n => !isNaN(n));
    const dobles = lista.map(n => n * 2);
    resultado.innerHTML = `Original: ${lista.join(", ")}<br>Dobles: ${dobles.join(", ")}`;
}

function ej6() {
    let base = parseInt(document.getElementById("baseTriangulos").value);
    if (isNaN(base) || base <= 0)
    {
        resultado.innerHTML = "Número inválido para la base del triángulo";
    } else
    {
        let salida = "<p>Triángulo 1:</p>";
        for (let i = 1; i <= base; i++) {
            salida += "*".repeat(i) + "<br>";
        }
        salida += "<p>Triángulo 2:</p>";
        if(base%2 == 0)
            {
                base = base + 1;
                salida += "<p>(Se suma 1 a la base porque no se puede con una base par)</p>";
            }
        for (let i = 1; i <= base; i = i + 2) {
            let guiones = "-".repeat((base - i)/2);
            let asteriscos = "*".repeat(i);
            salida += guiones + asteriscos + guiones + "<br>";
        }
        resultado.innerHTML = salida;
    }
}

function ej7() {
    const nombres = document.getElementById("nombres").value.split(",");
    const filtrados = nombres.filter(n => n.startsWith("A")).concat(nombres.filter(n => n.startsWith("a")));
    resultado.innerHTML = `Nombres con 'A': ${filtrados.join(", ")}`;
}

function ej8() {
    const texto = document.getElementById("texto").value;
    const buscar = document.getElementById("buscar").value;
    const reemplazo = document.getElementById("reemplazo").value;
    if (buscar == "") {
        resultado.innerHTML = "Ingresá una palabra a reemplazar";
    } else {
        let nuevoTexto = texto;
        while (nuevoTexto.includes(buscar)) {
            nuevoTexto = nuevoTexto.replace(buscar, reemplazo);
        }
        resultado.innerHTML = `Texto con reemplazos: ${nuevoTexto}`;
    }
}

function ej9() {
    const texto = document.getElementById("texto").value;
    const num = parseInt(document.getElementById("num").value);
    if (isNaN(num) || num < 0) {
        resultado.innerHTML = "Número invalido";
    }else
        {
            resultado.innerHTML = texto.slice(0, num);
        }
}

function ej10() {
    const lista = document.getElementById("lista").value.split(",").filter(i => i !== "");
    resultado.innerHTML = lista.join(" - ");
}

function ej11() {
    const pedidos = document.getElementById("pedidos").value.split(",").filter(pedido => pedido.includes(":"));
    let total = 0;
    for(let i = 0; i < pedidos.length; i++)     
    {
        let pedido = pedidos[i].split(":");
        let monto = parseFloat(pedido[1]);
        if (!isNaN(monto)) 
        {
            total += monto;
        }
    }
    resultado.innerHTML = `Recaudación total: $${total}`;
}
