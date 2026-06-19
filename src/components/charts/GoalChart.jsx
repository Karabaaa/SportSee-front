import styles from "./GoalChart.module.css";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

export const GoalChart = ({ data }) => {
  const score = data * 100;
  const chartData = [{ score }];

  return (
    <div className={styles.goalChart}>
      <h2 className={styles.title}>Score</h2>
      <div className={styles.scoreContent}>
        <p className={styles.score}>{score}%</p>
        <p className={styles.scoreLabel}>
          de votre <br />
          objectif
        </p>
      </div>
      <ResponsiveContainer width="100%" aspect={1}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="58%"
          outerRadius="80%"
          barSize={10}
          data={chartData}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
            tickLine={false}
            axisLine={false}
          />
          <RadialBar
            dataKey="score"
            fill="var(--primary-color)"
            cornerRadius={50}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

GoalChart.propTypes = {
  data: PropTypes.number.isRequired,
};
