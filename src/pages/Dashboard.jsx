import "../styles/Dashboard.css";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import userService from "../services/userService";

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

  return (
    <div className="dashboard">
      <NavBar />
      <SideBar />
      <div className="dashboard-content">
        <h1>
          Bonjour <span>{userMainData.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <p>Activité session 1 : {userActivity.sessions[0].day}</p>
        <p>
          Durée moyenne session 1 :{" "}
          {userAverageSessions.sessions[0].sessionLength} minutes
        </p>
        <p>Performance session 1 : {userPerformance.data[0].value}</p>
      </div>
    </div>
  );
}
