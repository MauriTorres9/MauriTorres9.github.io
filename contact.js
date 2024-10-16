document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional
    
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name && email && message) {
        var whatsappMessage = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);
        var phoneNumber = '5493582430866'; // Reemplaza con tu número de teléfono de WhatsApp
        var url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

        window.location.href = url;
    } else {
        alert("Por favor, completa todos los campos.");
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    // Cierra el menú desplegable cuando se hace clic en un enlace
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click(); // Simula un clic en el botón para cerrar el menú
        }
      });
    });
  });