import { PieChart, Pie, Cell } from "recharts";

const data = [{ name: "Group A", value: 300 }];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function LineChart() {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
