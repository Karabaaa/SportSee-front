import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
} from "recharts";
import styles from "./ActivityChart.module.css";

const LegendItem = ({ color, label }) => {
  return (
    <div className={styles.legendItem}>
      <div className={styles.circle} style={{ backgroundColor: color }}></div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

const lineOffset = 0.1;

export default function ActivityChart({ data }) {
  const chartData = data.map((session, index) => ({
    ...session,
    day: index + 1,
  }));

  const kilograms = chartData.map((data) => data.kilogram);
  const minKilogram = Math.min(...kilograms);
  const maxKilogram = Math.max(...kilograms);
  const yAxisMin = minKilogram;
  const yAxisMax = maxKilogram + 1;
  const middleTick = Math.round((yAxisMin + yAxisMax) / 2);
  const firstDay = chartData[0]?.day ?? 1;
  const lastDay = chartData[chartData.length - 1]?.day ?? 1;
  const lineStart = firstDay - lineOffset;
  const lineEnd = lastDay + lineOffset;
  const dayTicks = chartData.map(({ day }) => day);

  const kgColor = "var(--secondary-color)";
  const kgLabel = "Poids (kg)";
  const caloriesColor = "var(--primary-color)";
  const caloriesLabel = "Calories brûlées (kCal)";
  const chartLinesColor = "#dedede";

  return (
    <div className={styles.activityChart}>
      <div className={styles.header}>
        <h2 className={styles.title}>Activité quotidienne</h2>
        <div className={styles.legend}>
          <LegendItem color={kgColor} label={kgLabel} />
          <LegendItem color={caloriesColor} label={caloriesLabel} />
        </div>
      </div>
      <ResponsiveContainer maxWidth="700px" width="100%" height={210}>
        <BarChart data={chartData} barGap={8} height={145}>
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            domain={[yAxisMin, yAxisMax]}
            ticks={[yAxisMin, middleTick, yAxisMax]}
            tickLine={false}
            axisLine={false}
            tickMargin={40}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
          />
          <YAxis yAxisId="calories" hide />
          <XAxis
            xAxisId="line"
            dataKey="day"
            type="number"
            domain={[lineStart, lineEnd]}
            ticks={dayTicks}
            tickLine={false}
            tickMargin={16}
            axisLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
            interval={0}
          />
          <ReferenceLine
            xAxisId="line"
            yAxisId="kilogram"
            segment={[
              { x: lineStart, y: yAxisMin },
              { x: lineEnd, y: yAxisMin },
            ]}
            stroke={chartLinesColor}
            zIndex={0}
          />
          <ReferenceLine
            xAxisId="line"
            yAxisId="kilogram"
            segment={[
              { x: lineStart, y: middleTick },
              { x: lineEnd, y: middleTick },
            ]}
            stroke={chartLinesColor}
            strokeDasharray="3 3"
            zIndex={0}
          />
          <ReferenceLine
            xAxisId="line"
            yAxisId="kilogram"
            segment={[
              { x: lineStart, y: yAxisMax },
              { x: lineEnd, y: yAxisMax },
            ]}
            stroke={chartLinesColor}
            strokeDasharray="3 3"
            zIndex={0}
          />
          <Tooltip
            shared={true}
            position={{ y: -30 }}
            allowEscapeViewBox={{ x: true, y: true }}
            cursor={{ fill: "#C4C4C480" }}
            contentStyle={{
              backgroundColor: "var(--primary-color)",
              border: "none",
              padding: "5px 10px",
            }}
            itemStyle={{
              color: "#ffffff",
              fontSize: 7,
            }}
            labelFormatter={() => ""}
            separator=""
            itemSorter={(item) => (item.dataKey === "kilogram" ? 0 : 1)}
            formatter={(value, name, item) => {
              if (item.dataKey === "kilogram") return [`${value}kg`, ""];
              if (item.dataKey === "calories") return [`${value}Kcal`, ""];
              return [value, ""];
            }}
          />
          <Bar
            xAxisId="line"
            yAxisId="kilogram"
            barSize={7}
            dataKey="kilogram"
            name={kgLabel}
            fill={kgColor}
            radius={[3, 3, 0, 0]}
            minPointSize={3}
          />
          <Bar
            xAxisId="line"
            yAxisId="calories"
            barSize={7}
            dataKey="calories"
            name={caloriesLabel}
            fill={caloriesColor}
            radius={[3, 3, 0, 0]}
            minPointSize={3}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
