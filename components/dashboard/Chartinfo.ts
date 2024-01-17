import { ApexOptions } from "apexcharts";

export const seriesPie: number[] = [44, 55, 41, 17, 15]; // Example data for the doughnut chart

export const optionsPie: ApexOptions = {
  chart: {
    type: 'donut',
  },
  labels: ['Sales', 'Complain', 'Security Issue', 'Emergency', 'Panic Button'], // Corresponding labels for the data
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
  legend: {
    position: 'right', // Position of the legend
    offsetY: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Total',

          },
        },
      },
    },
  },
};


export const createOptionsPie = (labelArr:string[]) =>{
  const optionsPie: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: labelArr, // Corresponding labels for the data
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    legend: {
      position: 'right', // Position of the legend
      offsetY: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
  
            },
          },
        },
      },
    },
  } 
  return optionsPie;
}
export const optionsBar: ApexOptions = {
  
  chart: {
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: true,
    distributed: true,
    barHeight: '30%',
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories: ['Positive', 'Neutral', 'Negative'],
  labels: {
    show: false, // This will hide the x-axis labels
  },
  axisBorder: {
    show: false, // This will hide the x-axis line
  },
  axisTicks: {
    show: false, // This will hide the x-axis ticks
  },

  },
  yaxis: {
    show: true, // This will hide the y-axis entirely
  },
  grid: {
    show: false, // This will hide the grid lines
  },
  legend: {
    show: false, // This will hide the legend if it's not needed
  },
  colors: ['#00E396','#008FFB', '#FF4560'],
};

export const seriesBar: ApexAxisChartSeries = [
  {
    data: [400, 430, 448]
  }
];


export const getOptionsBar = (labelsArr: string[]) =>{
  const optionsBar: ApexOptions = {
  
    chart: {
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
      distributed: true,
      barHeight: '30%',
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: labelsArr,
    labels: {
      show: false, // This will hide the x-axis labels
    },
    axisBorder: {
      show: false, // This will hide the x-axis line
    },
    axisTicks: {
      show: false, // This will hide the x-axis ticks
    },
  
    },
    yaxis: {
      show: true, // This will hide the y-axis entirely
    },
    grid: {
      show: false, // This will hide the grid lines
    },
    legend: {
      show: false, // This will hide the legend if it's not needed
    },
    colors: generateColorArray(labelsArr),
  };
  return optionsBar;
}

export const getSeriesBar = (numbers: number[]) =>{
  const seriesBarVertical: ApexAxisChartSeries = [
    {
      data: numbers
    }
  ];
  return seriesBarVertical;
}


export const optionsBarVertical: ApexOptions = {
  
  chart: {
  type: 'bar',
},
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: false,
    distributed: true,
    barHeight: '30%',
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories: ['Sales', 'Complain', 'Security Issue', 'Emergency', 'Panic Button'],
  labels: {
    show: true, // This will hide the x-axis labels
  },
  axisBorder: {
    show: false, // This will hide the x-axis line
  },
  axisTicks: {
    show: false, // This will hide the x-axis ticks
  },

  },
  yaxis: {
    show: true, // This will hide the y-axis entirely
  },
  grid: {
    show: false, // This will hide the grid lines
  },
  legend: {
    show: false, // This will hide the legend if it's not needed
  },
  colors: ['#00E396','#008FFB', '#FF4560', "#FEB019", "#6952B7"],
};

/*export const seriesBarVertical: ApexAxisChartSeries = [
  {
    data: [0.5, 0.7, 1.5, 2.5, 3]
  }
];*/

export const getVerticalBarSeries = (numbers: number[]) =>{
  const seriesBarVertical: ApexAxisChartSeries = [
    {
      data: numbers
    }
  ];

  return seriesBarVertical
}
export const getVerticalBarOptions = (labelArr: string[])=>{
  const optionsBarVertical: ApexOptions = {
  
    chart: {
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      distributed: true,
      barHeight: '30%',
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: labelArr,
    labels: {
      show: true, // This will hide the x-axis labels
    },
    axisBorder: {
      show: false, // This will hide the x-axis line
    },
    axisTicks: {
      show: false, // This will hide the x-axis ticks
    },
  
    },
    yaxis: {
      show: true, // This will hide the y-axis entirely
    },
    grid: {
      show: false, // This will hide the grid lines
    },
    legend: {
      show: false, // This will hide the legend if it's not needed
    },
    colors: generateColorArray(labelArr),
  };
  return optionsBarVertical;
}

function generateColorArray(arr:string[]) {
  // Function to generate a random color
  const randomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  };

  // Generate an array of colors with the same length as the input array
  return arr.map(() => randomColor());
}

function getLastSixMonths() {
  const months = [];
  let date = new Date();

  // Starting from the previous month and going back 6 months
  for (let i = 1; i <= 6; i++) {
      date.setMonth(date.getMonth() - 1);
      const monthName = date.toLocaleString('default', { month: 'short' });
      months.unshift(monthName);
  }

  return months;
}

export const areaBarOptions: ApexOptions = {
  chart: {
    height: 280,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  xaxis: {
    categories: getLastSixMonths()
  }
};

export const seriesAreaBar: ApexAxisChartSeries = [
  {
    data: [45, 52, 38, 45, 19, 23, 2]
  }
];