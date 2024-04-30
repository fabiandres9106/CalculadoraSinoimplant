const data = {
    labels: ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5'],
      datasets: [{
        label: 'Resumen General',
        data: [12, 19, 3, 5, 2],
        hoverOffset: 4
      }]
  };


// CHART PIE RESUMEN GENERAL
const chartPie = document.getElementById('chartResumenGeneral');

new Chart(chartPie, {
    type: 'pie',
    data: data
  });
 
// CHART COMPARATIVO PRODUCTOS
const chartComparativoProductos = document.getElementById('chartComparativoProductos');

new Chart(chartComparativoProductos, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });