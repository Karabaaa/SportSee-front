import styles from "./PerformanceChart.module.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const tradMapper = {
  cardio: "Cardio",
  energy: "Energie",
  endurance: "Endurance",
  strength: "Force",
  speed: "Vitesse",
  intensity: "Intensité",
};

export const PerformanceChart = ({ data }) => {
  const { kind, data: performanceData } = data;
  const formattedData = performanceData
    .map((item) => {
      const kindKey = kind[item.kind];
      return {
        value: item.value,
        kind: tradMapper[kindKey],
      };
    })
    .reverse();

  return (
    <div className={styles.performanceChart}>
      <RadarChart
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "240px",
          maxHeight: "260px",
          aspectRatio: 1,
        }}
        responsive
        outerRadius="80%"
        data={formattedData}
        margin={{
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
        }}
      >
        <PolarGrid stroke="#FFFFFF" radialLines={false} strokeWidth={2} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: "#FFFFFF", fontSize: 12 }}
        />
        <PolarRadiusAxis axisLine={false} tickLine={false} tick={false} />
        <Radar
          dataKey="value"
          stroke="none"
          fill="#FF0101B2"
          fillOpacity={0.9}
          name="Performance"
        />
      </RadarChart>
    </div>
  );
};
