import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

export default function Barra() {
  const [barra] = useState({
    data: {
      labels: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
      ],
      datasets: [
        {
          label: 'Matriculas 2019',
          data: [22, 19, 9, 5, 2, 3, 10, 14],
          backgroundColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(155, 100, 64, 1)',
            'rgba(255, 130, 87, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
  });

  return (
    <div className="chart">
      <Bar
        data={barra.data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
