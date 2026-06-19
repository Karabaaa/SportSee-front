import styles from "./SessionChart.module.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from "recharts";
import PropTypes from "prop-types";

const textColor = "rgba(255, 255, 255, 0.5)";
const sessionDays = ["L", "M", "M", "J", "V", "S", "D"];
const chartMargin = { top: 80, right: 0, left: 0, bottom: 10 };
const xAxisLabelsHeight = 38;

const CustomCursor = ({ points, width, height }) => {
  if (!points || points.length === 0) {
    return null;
  }
  const { x } = points[0];
  const cursorWidth = width - x;

  const cursorHeight =
    height + chartMargin.top + chartMargin.bottom + xAxisLabelsHeight;

  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.2)"
      stroke="none"
      x={x}
      y={0}
      width={cursorWidth}
      height={cursorHeight}
    />
  );
};

export const SessionChart = ({ data }) => {
  const sessionLengths = data.map((session) => session.sessionLength);
  const dataMin = Math.min(...sessionLengths);
  const dataMax = Math.max(...sessionLengths);
  return (
    <div className={styles.sessionChart}>
      <h2 className={styles.title}>
        Durée moyenne des <br />
        sessions
      </h2>
      <LineChart
        style={{
          width: "100%",
          height: "100%",
        }}
        responsive
        data={data}
        margin={chartMargin}
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
          tickMargin={0}
          axisLine={false}
          tick={{ fill: textColor, fontSize: 12 }}
          padding={{ left: 16, right: 16 }}
          interval={0}
          tickFormatter={(value) => {
            return sessionDays[value - 1];
          }}
        />
        <YAxis hide domain={[dataMin - 10, dataMax + 10]} />
        <Tooltip
          axisId="line"
          cursor={<CustomCursor />}
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

SessionChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
