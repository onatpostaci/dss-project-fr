"use client";
import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import DownloadOutlined from '@mui/icons-material/DownloadOutlined';
import { seriesPie, optionsPie, optionsBar, seriesBar, getOptionsBar, getSeriesBar, optionsBarVertical, getVerticalBarOptions, getVerticalBarSeries, areaBarOptions, seriesAreaBar, createOptionsPie } from './Chartinfo';
import Image from 'next/image';
import Header from '../Header';
import StatBox from '../StatBox';
import PeopleIcon from '@mui/icons-material/People';
import { ApexOptions } from 'apexcharts';
import ChartComponent from '../ChartComponent';
import CSVUpload from '../CSVUpload';
import SubmitButton from '../SubmitButton';
import axios from 'axios';
import GeographyChart from '../geography-chart/GeographyChart';
import GPTAnswer from '../GPTAnswer';
import Progress from '../Progress';
import { isDataView } from 'util/types';

const chartOptions: ApexOptions = {
  chart: {
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
  },
  fill: {
    opacity: 0.3,
  },
  xaxis: {
    type: 'category',
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
    show: false, // This will hide the y-axis entirely
  },
  grid: {
    show: false, // This will hide the grid lines
  },
  colors: ['#34eb89'], // Use green color for positive trend
  legend: {
    show: false, // This will hide the legend if it's not needed
  },
};

const series = [
  {
    name: 'Active Users',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  },
];

type GeoData = {
  id: string;
  value: number;
}

type PieData = {
  pieSeries: number[]
  pieOptions: ApexOptions
}

type VerticalBarData = {
  verticalBarSeries: ApexAxisChartSeries;
  verticalBarOptions: ApexOptions;
}

type HorizontalBarData = {
  horizontalBarSeries: ApexAxisChartSeries;
  horizontalBarOptions: ApexOptions;
}

const Dashboard = () => {

  const [locationInfo, setLocationInfo] = useState<GeoData[]>([]);
  const [dataReceived, setDataReceived] = useState<boolean>(false);
  const [pieDataState, setPieDataState] = useState<PieData>({pieSeries:[], pieOptions:{}});
  const [verticalBarDataState, setVerticalBarDataState] = useState<VerticalBarData>({verticalBarSeries:[], verticalBarOptions:{}});
  const [horizontalBarState, setHorizontalBarState] = useState<HorizontalBarData>({horizontalBarSeries:[], horizontalBarOptions:{}});
  const [gptPrompt, setGPTPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const onFileUpload = async (file: File) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
  
      // Replace 'your-endpoint-url' with the URL of your file upload endpoint
      const response = await axios.post('https://z8tkllkjq3.execute-api.eu-north-1.amazonaws.com/prod/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      // Handle the response here. For example, console.log or set state
      console.log(response.data);
      let pieDataSeries = []
      //console.log('----', response.data.purchase_frequency_by_age)
      for(let i = 0; i < response.data.purchase_frequency_by_age.length; i++){    
        pieDataSeries.push(response.data.purchase_frequency_by_age[i].count);
      }
      let pieDataLabels = []
      for(let i = 0; i < response.data.purchase_frequency_by_age.length; i++){
        pieDataLabels.push(response.data.purchase_frequency_by_age[i].ageGroup);
      }

      let categories = []
      let frequencySeries = []
      let avgAmountSeries = []
      let str = 'The Categories, their avearage purchase amount, and preference counts are as follows: '
      for(let i = 0; i < response.data.purchase_frequency_avg_amount_by_category.length; i++){    
        categories.push(response.data.purchase_frequency_avg_amount_by_category[i].category);
        frequencySeries.push(response.data.purchase_frequency_avg_amount_by_category[i].purchaseFrequency)
        avgAmountSeries.push(response.data.purchase_frequency_avg_amount_by_category[i].averagePurchaseAmount)
        str = str + 'The category is: ' + response.data.purchase_frequency_avg_amount_by_category[i].category + ' : ' + response.data.purchase_frequency_avg_amount_by_category[i].purchaseFrequency+ ' is preference count' + ' and '+ response.data.purchase_frequency_avg_amount_by_category[i].averagePurchaseAmount + 'is the average price\n';
      }
      //console.log('GPT PROMPT: ', str)
      setGPTPrompt(str);
      const verticalBarDataOptions = getVerticalBarOptions(categories)
      const verticalBarDataSeries = getVerticalBarSeries(frequencySeries)
      const pieDataOptions = createOptionsPie(pieDataLabels);
      const horiztontalBarDataOptions = getOptionsBar(categories);
      const horizontalBarDataSeries = getSeriesBar(avgAmountSeries);


      setPieDataState({
        pieSeries: pieDataSeries,
        pieOptions: pieDataOptions,
      });
      setHorizontalBarState({
        horizontalBarOptions:horiztontalBarDataOptions,
        horizontalBarSeries: horizontalBarDataSeries,
      })
      setVerticalBarDataState({
        verticalBarOptions: verticalBarDataOptions,
        verticalBarSeries: verticalBarDataSeries,
      })
      setLocationInfo(response.data.count_by_country);
      setDataReceived(true);
    } catch (error) {
      // Handle the error here. For example, error notification
      console.error('Error uploading file:', error);
    }
    setIsLoading(false);
  } 


  return (
    <Box  m='20px' height="auto" width={'90%'}>
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center" >
            <Header
            title="Dashboard"
            subtitle={`Welcome to the Data Analysis Dashboard`}
            />
            <Box display={'flex'} alignItems={'center'} gap={'15px'}>
              <Typography fontWeight={'bold'}>Download Template CSV</Typography>
              <IconButton onClick={() => window.location.href = '/example.csv'}>
                  <DownloadOutlined />
              </IconButton>
            </Box>
            
        </Box>
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="auto"
            gap="20px"  
        >
       
            <Box gridColumn="span 12"  borderRadius={'10px'}>
              <CSVUpload onFileUpload={onFileUpload} />
            </Box>
            {isLoading 
            ?
            <Box width={'100%'} height={'100%'}>
              <Progress />
            </Box>
            : 
            <>
              <Box
                gridColumn="span 6" // Now it takes the full width of the grid
                display="flex"
                flexDirection="column"
                bgcolor="white"
                boxShadow="0px 4px 10px rgba(0,0,0,0.05)"
                borderRadius={2}  
                overflow="hidden"
                height="400px"
              >
                <Box
                  py="20px" 
                  px="30px" 
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                      variant="subtitle2"
                      color="gray"
                      fontWeight="bold"
                    >
                      Customer Age Segmentation
                    </Typography>
                    <IconButton>
                      <DownloadOutlined
                        sx={{ fontSize: "26px", color: "green" }}
                      />
                    </IconButton>
                </Box>
                  {dataReceived 
                    ? 
                    ( 
                      <Box
                        flexGrow={1} // Make sure it's allowed to grow
                      >
                        <ChartComponent series={pieDataState.pieSeries} chartOptions={pieDataState.pieOptions} height={90} type='donut' />
                      </Box>
                    )
                    :
                    (
                      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%',height:'100%'}}>
                          <Typography
                            variant="h5"
                            color="black"
                            fontWeight="bold">
                              Please provide CSV file.
                          </Typography>
                      </Box>
                      
                    )  
                  }
                  
            </Box>
            <Box
              gridColumn="span 6" // Now it takes the full width of the grid
              display="flex"
              flexDirection="column"
              bgcolor="white"
              boxShadow="0px 4px 10px rgba(0,0,0,0.05)"
              borderRadius={2}  
              overflow="hidden"
              height="400px"
            >
              <Box
                py="20px" 
                px="30px" 
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                 <Typography
                    variant="subtitle2"
                    color="gray"
                    fontWeight="bold"
                  >
                    Descriptive Analysis
                  </Typography>
                  <IconButton>
                    <DownloadOutlined
                      sx={{ fontSize: "26px", color: "green" }}
                    />
                  </IconButton>
              </Box>
              {dataReceived 
                ? 
                (
                  <Box
                    flexGrow={1} // Make sure it's allowed to grow
                  >
                    <ChartComponent series={horizontalBarState.horizontalBarSeries} chartOptions={horizontalBarState.horizontalBarOptions} height={90} type='bar' />
                  </Box>
                )
                :
                (
                  <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%',height:'100%'}}>
                      <Typography
                        variant="h5"
                        color="black"
                        fontWeight="bold">
                          Please provide CSV file.
                      </Typography>
                  </Box>
                )  
              }
            </Box>
            {/* ROW 3 */}
            <Box
              gridColumn="span 6" // Now it takes the full width of the grid
              display="flex"
              flexDirection="column"
              bgcolor="white"
              boxShadow="0px 4px 10px rgba(0,0,0,0.05)"
              borderRadius={2}  
              overflow="hidden"
              height="400px"
            >
                <Box
                  py="20px" 
                  px="30px" 
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                      variant="subtitle2"
                      color="gray"
                      fontWeight="bold"
                    >
                     Purchase Frequency - Category
                    </Typography>
                    <IconButton>
                      <DownloadOutlined
                        sx={{ fontSize: "26px", color: "green" }}
                      />
                    </IconButton>
                </Box>
                {dataReceived 
                ? 
                (
                  <Box
                    flexGrow={1} // Make sure it's allowed to grow
                  >
                    <ChartComponent series={verticalBarDataState.verticalBarSeries} chartOptions={verticalBarDataState.verticalBarOptions} height={90} type='bar' />
                  </Box>
                )
                :
                (
                  <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%',height:'100%'}}>
                      <Typography
                        variant="h5"
                        color="black"
                        fontWeight="bold">
                          Please provide CSV file.
                      </Typography>
                  </Box>
                )  
              }
            </Box>
            <Box
              gridColumn="span 6" // Now it takes the full width of the grid
              display="flex"
              flexDirection="column"
              bgcolor="white"
              boxShadow="0px 4px 10px rgba(0,0,0,0.05)"
              borderRadius={2}  
              overflow="hidden"
              height="400px"
            >
              <Box
                  py="20px" 
                  px="30px" 
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                      variant="subtitle2"
                      color="gray"
                      fontWeight="bold"
                    >
                      Location Based Analysis
                    </Typography>
                    <IconButton>
                      <DownloadOutlined
                        sx={{ fontSize: "26px", color: "green" }}
                      />
                    </IconButton>
                </Box>
                    {dataReceived 
                    ? 
                    (
                      <GeographyChart isDashboard={true} data={locationInfo} />
                    )
                    :
                    (
                      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%',height:'100%'}}>
                        <Typography
                          variant="h5"
                          color="black"
                          fontWeight="bold">
                            Please provide CSV file.
                        </Typography>
                      </Box>
                    )  
                  }
                  
            </Box>
            </>
            }
            
            <Box gridColumn="span 12"  borderRadius={'10px'}>
              <GPTAnswer promptText={gptPrompt} isDataReceived={dataReceived}/>
            </Box>
        </Box>
    </Box>
  )
}

export default Dashboard;