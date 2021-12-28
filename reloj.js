const time = document.getElementById("time");
const date = document.getElementById("date");

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes" ,"Sábado"];

const interval = setInterval(() => {
    const local = new Date();

    let day = local.getDate(),
        dayN = local.getDay(),
        month = local.getMonth(),
        year = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = dayNames[dayN] + ", " + day + " de " + monthNames[month] + " de " + year;

}, 1000);