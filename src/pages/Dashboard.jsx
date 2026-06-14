import styles from "./Dashboard.module.css";
import NavBar from "../components/navbar/NavBar";
import SideBar from "../components/sidebar/SideBar";
import userService from "../services/userService";
import Indicator from "../components/indicator/Indicator";
import {
  CaloriesIcon,
  ProteinIcon,
  CarbsIcon,
  FatIcon,
} from "../assets/index.js";
import ActivityChart from "../components/charts/ActivityChart";
import { SessionChart } from "../components/charts/SessionChart";
import { PerformanceChart } from "../components/charts/PerformanceChart";
import { GoalChart } from "../components/charts/GoalChart";

export default function Dashboard() {
  const {
    getUserMainData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
  } = userService;
  const userId = 12;
  const userMainData = getUserMainData(userId);
  const userActivity = getUserActivity(userId);
  const userAverageSessions = getUserAverageSessions(userId);
  const userPerformance = getUserPerformance(userId);

  const userIndicators = [
    {
      icon: CaloriesIcon,
      value: userMainData.calorieCount,
      unit: "kCal",
      label: "Calories",
    },
    {
      icon: ProteinIcon,
      value: userMainData.proteinCount,
      unit: "g",
      label: "Protéines",
    },
    {
      icon: CarbsIcon,
      value: userMainData.carbohydrateCount,
      unit: "g",
      label: "Glucides",
    },
    {
      icon: FatIcon,
      value: userMainData.lipidCount,
      unit: "g",
      label: "Lipides",
    },
  ];

  return (
    <div className={styles.dashboard}>
      <NavBar />
      <SideBar />
      <div className={styles.dashboardContent}>
        <div className={styles.userInfo}>
          <h1 className={styles.title}>
            Bonjour <span>{userMainData.firstName}</span>
          </h1>
          <p className={styles.subtitle}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
        <div className={styles.dashboardData}>
          <div className={styles.charts}>
            <ActivityChart data={userActivity.sessions} />
            <div className={styles.smallCharts}>
              <SessionChart data={userAverageSessions.sessions} />
              <PerformanceChart data={userPerformance} />
              <GoalChart data={userMainData.score} />
            </div>
          </div>
          <div className={styles.keyData}>
            {userIndicators.map((indicator) => (
              <Indicator
                key={indicator.label}
                icon={indicator.icon}
                value={indicator.value}
                unit={indicator.unit}
                label={indicator.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
