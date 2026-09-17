import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const COLORS = ['#00C49F', '#FF8042', '#FFBB28']

const PieChart = props => {
  const {data} = props

  return (
    <div className="pie-chart-bg-container mt-2 d-flex justify-content-center">
      <ResponsiveContainer width="100%" height={300}>
        <PieChartComponent>
          <Pie
            cx="50%"
            cy="50%"
            data={data}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                name={entry.name}
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChartComponent>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChart
