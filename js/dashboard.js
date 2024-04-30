/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart');

  const dataCharIndex = {
    labels: [
      'Usuario 1',
      'Usuario 2',
      'Usuario 3',
      'Usuario 4',
      'Usuario 5',
    ],
    datasets: [{
      barPercentage: 1,
      borderRadius: 5,
      clip: {
        left: false,
        top: 0,
        right: false,
        bottom: 0
      },
      data: [
        150,
        200,
        103,
        125,
        112,
      ],
      backgroundColor: [
        '#31356E',
        '#2F5F98',
        '#2D8BBA',
        '#41B8D5',
        '#57D3FF'
      ],
    }]
  }

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: dataCharIndex,
    options: {
      scales: {

      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      },
      aspectRatio: 1, 
      
    }
  })
})()
