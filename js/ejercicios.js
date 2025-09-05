function ejercicio1() {
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    if (nombre === '' || fecha === '') {
        document.getElementById('resultado').innerHTML = 'Datos incompletos';
    }else{
        const edad = calcularEdad(fecha);
        const mensaje = 'Hola ' + nombre + ', tienes ' + edad.toString() + ' años!';
        console.log(mensaje);
        document.getElementById('resultado').innerHTML = mensaje;
    }
}

