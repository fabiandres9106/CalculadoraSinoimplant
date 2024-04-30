
// SLIDE 1

$(document).ready(function(){

  $('#btnIngresar').click(function(){
      //cambiar de tab
      $('.tab-pane').removeClass('show active');
      $('#pills-Paso2').addClass('show active');
      //cambiar de botón
      $('.nav-link').removeClass('active');
      $('#pills-Paso2-tab').addClass('active');
      $('#calculadora-navegacion').removeClass('visually-hidden');
  })
})


// Selector input entidad o municipio
const selectEntidad = document.getElementById('selectTipoEntidad');
const inputEmpresaCalculadora = document.getElementById('empresaCalculadora');

selectEntidad.addEventListener('change', function(){
  const entidadSeleccionada = selectEntidad.value;
  actInputEntidadPlaceHolder(entidadSeleccionada);
});

function actInputEntidadPlaceHolder(opcionSeleccionada){
  switch (opcionSeleccionada) {
    case 'ONG':
      inputEmpresaCalculadora.placeholder = "Ingrese ONG";
      break;
    case 'Fundación':
      inputEmpresaCalculadora.placeholder = "Ingrese Fundación";
      break;
    case 'EPS':
      inputEmpresaCalculadora.placeholder = "Ingrese EPS";
      break;
    case 'IPS':
      inputEmpresaCalculadora.placeholder = 'Ingrese IPS';
      break;
    case 'Secretaría de Salud':
      inputEmpresaCalculadora.placeholder = "Ingrese Secretaría de Salud";
      break;
    case 'Municipio':
      inputEmpresaCalculadora.placeholder = "Ingrese Municipio"
      break
    default:
      inputEmpresaCalculadora.placeholder = "Ingrese entidad";
  }
}

// Añadir entidad junto a nombre de doctor
inputEmpresaCalculadora.addEventListener('keyup', function(){
  const shEmpresa = document.getElementById('shEmpresa');
  shEmpresa.innerHTML= inputEmpresaCalculadora.value;
})


// CHARTS

// Chart Paso 2
/*
const chartPaso2 = document.getElementById('chartPaso2');
const dataPaso2 = {
  labels: ['Sinoimplant', 'Jadell', 'Implanon'],
  datasets: [{
    label: 'Costo Unitario',
    data: [0, 0, 0],
    backgroundColor:[
      'rgba(170, 0, 97, 1)',
      'rgba(179, 179, 179, .5)',
      'rgba(179, 179, 179, .5)'
    ],
    borderWidth: 1
  }] 
}

var chartPaso2Act = new Chart(chartPaso2, {
    type: 'bar',
    data: dataPaso2,
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        legend: {
          labels:{
            boxWidth: 10,
          }
        }
      },
    },
    
  });

  */

// Chart Paso 3

const chartPaso3 = document.getElementById('chartPaso3');
const dataPaso3 = {
  labels: [
    'Embarazos no intencionales',
    'Mortalidad Materna',
    'Mortalidad Materna no deseados'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(45, 139, 186)',
      'rgb(65, 184, 213)',
      'rgb(87, 211, 255)'
    ],
    hoverOffset: 4
  }]
}

new Chart(chartPaso3, {
    type: 'pie',
    data: dataPaso3,
    options:{
      plugins: {
        legend: {
          labels:{
            boxWidth: 10,
          }
        }
      },
    }
  });

// Chart Paso 5

const chartPaso5_1 = document.getElementById('chartPaso5_1');
const dataPaso5_1 = {
  labels: ['Ahorro'],
  datasets: [
    {
      label: 'Sinoimplant',
      data: [30],
      backgroundColor: 'rgb(45, 139, 186)',
    },
    {
      label: 'Jadell',
      data: [50],
      backgroundColor: 'rgb(65, 184, 213)',
    },
  ]
}

new Chart(chartPaso5_1, {
  type: 'bar',
  data: dataPaso5_1,
  options: {
    indexAxis: 'y',
    scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      stacked: true,
      display: false
    },
    y: {
      stacked: true,
      display: false
    },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels:{
          boxWidth: 10
        }
        
      }
    },
  },
});

const chartPaso5_2 = document.getElementById('chartPaso5_2');
const dataPaso5_2 = {
  labels: ['Ahorro'],
  datasets: [
    {
      label: 'Sinoimplant',
      data: [50],
      backgroundColor: 'rgb(45, 139, 186)',
    },
    {
      label: 'Implanon',
      data: [10],
      backgroundColor: 'rgb(65, 184, 213)',
    },
  ]
}

new Chart(chartPaso5_2, {
  type: 'bar',
  data: dataPaso5_2,
  options: {
    indexAxis: 'y',
    scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      stacked: true,
      display: false
    },
    y: {
      stacked: true,
      display: false
    },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels:{
          boxWidth: 10,
          
        }
        
      }
    },
  },
});

$(document).ready(function(){
  $('#incostUniSI, #incostUniJad, #incostUniImp').on('input', function() {
    var val1 = parseFloat($('#incostUniSI').val()) || 0;
    var val2 = parseFloat($('#incostUniJad').val()) || 0;
    var val3 = parseFloat($('#incostUniImp').val()) || 0;
    
    chartPaso2Act.data.datasets[0].data = [val1, val2, val3];
    chartPaso2Act.update();
  });
})