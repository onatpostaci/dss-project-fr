import React from 'react';
import { useTheme } from '@mui/material';
import { ChoroplethBoundFeature, ResponsiveChoropleth } from '@nivo/geo';
import { geoFeatures } from './geoFeatures';

type GeoData = {
  id: string;
  value: number;
};

interface IProps {
  isDashboard: boolean;
  data: GeoData[];
}

type FeatureData = {
    id: string;       // Country code (e.g., 'CAN')
    value: number;    // Count value (e.g., 54)
  };
  
  type FeatureGeometry = {
    type: string;     // Geometry type (e.g., 'MultiPolygon')
    coordinates: Array<any>; // Array of coordinates (specific type may vary)
  };
  
  type Feature = {
    feature:{
        color: string;    // Color information
        data: FeatureData;
        formattedValue: string; // Formatted value (e.g., "54")
        geometry: FeatureGeometry;
        id: string;        // Country code (e.g., 'CAN')
        label: string;     // Country label (e.g., 'Canada')
        properties: {
          name: string;    // Country name (e.g., 'Canada')
        };
        type: string;      // Type of feature (e.g., 'Feature')
        value: number;     // Count value (e.g., 54)
    }
   
  };
  
  type CustomTooltipProps = {
    feature: Feature;
  };


// Custom Tooltip Component
const CustomTooltip = ({ feature }: { feature: ChoroplethBoundFeature }) => {
    //console.log('FEATURE: ', feature)
    return (
      <div
        style={{
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        {feature ? (
          <>
            <strong>Country: {feature.label}</strong>
            <br />
            Count: {feature.value}
          </>
        ) : (
          'No data'
        )}
      </div>
    );
  };
  

const GeographyChart: React.FC<IProps> = ({ isDashboard, data }: IProps) => {
  const theme = useTheme();


  return (
    <ResponsiveChoropleth
      data={data}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 60 : 200} // Adjust the projectionScale for better visibility
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      colors="nivo"
      // Define the tooltip as a function
      tooltip={({ feature }: { feature: ChoroplethBoundFeature }) => <CustomTooltip feature={feature} />}
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 200,
                itemHeight: 25,
                itemDirection: 'left-to-right',
                itemTextColor: '#e0e0e0',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#ffffff',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;
