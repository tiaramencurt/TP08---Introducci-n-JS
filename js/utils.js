function calcularEdad(fechaNacimientoString) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimientoString);
    const n = new Date('hola');
    console.log('n: ' + n.toString());
    let edad = 'Fecha invalida';
    if(nacimiento.toString() === 'Invalid Date')
    {
        console.log('entró al if');
        edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
    }
    return edad;
}
