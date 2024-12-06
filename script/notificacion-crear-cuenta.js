// Función para cerrar la notificación
document.addEventListener('DOMContentLoaded', function () { //Solo se ejecuta despues de que el contenido html se haya cargado 
    var notification = document.getElementById('notification'); //permite manipular este elemento posteriormente en el codigo
    var close = document.getElementById('close'); //selecciona el elemento HTML con el id "close" y lo asigna a la variable close

    close.addEventListener('click', function () { //Es un método que se utiliza para asignar una función que se ejecutará cuando ocurra el evento (en este caso, un clic)
        notification.style.display = 'none'; //al establecer display a none, el elemento desaparece visualmente
    });
});
