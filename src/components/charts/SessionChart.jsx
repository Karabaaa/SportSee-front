import styles from "./SessionChart.module.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from "recharts";

const textColor = "rgba(255, 255, 255, 0.5)";
const sessionChartHeight = 260;
const sessionChartWidth = 260;
const sessionDays = ["L", "M", "M", "J", "V", "S", "D"];

const CustomCursor = (props) => {
  const { points } = props;
  const { x } = points[0];

  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.2)"
      stroke="none"
      x={x}
      y={0}
      width={sessionChartWidth - x}
      height={sessionChartHeight}
    />
  );
};

export const SessionChart = ({ data }) => {
  return (
    <div className={styles.sessionChart}>
      <h2 className={styles.title}>
        Durée moyenne des <br />
        sessions
      </h2>
      <LineChart
        style={{
          width: "100%",
          maxWidth: 260,
          height: 260,
        }}
        responsive
        data={data}
        margin={{ top: 80, right: 0, left: 0, bottom: 12 }}
      >
        <XAxis
          xAxisId="line"
          dataKey="day"
          hide
          padding={{ left: 0, right: 0 }}
        />
        <XAxis
          xAxisId="labels"
          dataKey="day"
          tickLine={false}
          tickMargin={16}
          axisLine={false}
          tick={{ fill: textColor, fontSize: 12 }}
          padding={{ left: 16, right: 16 }}
          interval={0}
          tickFormatter={(value) => {
            return sessionDays[value - 1];
          }}
        />
        <YAxis hide />
        <Tooltip
          axisId="line"
          cursor={<CustomCursor />}
          i
          contentStyle={{
            backgroundColor: "white",
            border: "none",
            padding: "0px 5px",
          }}
          itemStyle={{
            color: "black",
            fontSize: 8,
            padding: 0,
          }}
          labelFormatter={() => ""}
          separator=""
          formatter={(value) => {
            return [`${value} min`, ""];
          }}
        />
        <Line
          xAxisId="line"
          type="monotone"
          dataKey="sessionLength"
          strokeWidth={2}
          stroke={textColor}
          dot={false}
          activeDot={{
            r: 4,
            fill: "white",
            stroke: "rgba(255, 255, 255, 0.2)",
            strokeWidth: 8,
          }}
        />
      </LineChart>
    </div>
  );
};
