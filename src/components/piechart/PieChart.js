import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieChartWithPaddingAngle({sessionData}) 
{
  const completed = sessionData.sessions.filter((session) => session.status === 'Completed').length;
  const pending = sessionData.sessions.length - completed;

  const data = 
  [
    { label: 'Completed', value: completed, color:'rgb(96, 175, 174)'},
    { label: 'Upcoming', value: pending, color:'#B55D42'},
  ];

  return (
    <Stack direction="row">
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 80,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={200}
        legend={{ hidden: true }}
      />
    </Stack>
  );
}