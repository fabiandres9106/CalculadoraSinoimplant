$(document).ready(function() {
    $('#municipioInput').on('input', function() {
      var query = $(this).val();
      if (query.length >= 3) {
        $.ajax({
          url: 'backend.php',
          method: 'POST',
          dataType: 'json',
          data: { query: query },
          success: function(response) {
            mostrarSugerencias(response);
          },
          error: function(xhr, status, error) {
            console.error('Error al obtener sugerencias:', error);
          }
        });
      } else {
        $('#sugerencias').empty(); // Limpiar sugerencias si la entrada es corta
      }
    });
  
    function mostrarSugerencias(sugerencias) {
      var sugerenciasHtml = '';
      sugerencias.forEach(function(sugerencia) {
        sugerenciasHtml += '<div>' + sugerencia.nombre + '</div>';
      });
      $('#sugerencias').html(sugerenciasHtml);
    }
  });
  