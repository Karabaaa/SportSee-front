import USER from "../mockData/data";
import { formatUser } from "../mappers/userMapper";
/*
import { fetchUser, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from '../api/userApi'
*/

const {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} = USER;

export const getUserMainData = (userId) => {
  const userData = USER_MAIN_DATA.find((user) => user.id === userId);
  return userData ? formatUser(userData) : null;
  /*
  const userData = await fetchUser(userId)
  return userData ? formatUser(userData) : null
*/
};

export const getUserActivity = (userId) => {
  const activityData = USER_ACTIVITY.find(
    (activity) => activity.userId === userId,
  );
  return activityData || null;
  /*
  const userData = await fetchUserActivity(userId)
  return userData
*/
};

export const getUserAverageSessions = (userId) => {
  const averageSessionsData = USER_AVERAGE_SESSIONS.find(
    (sessions) => sessions.userId === userId,
  );
  return averageSessionsData || null;
  /*
  const userData = await fetchUserAverageSessions(userId)
  return userData
*/
};

export const getUserPerformance = (userId) => {
  const performanceData = USER_PERFORMANCE.find(
    (performance) => performance.userId === userId,
  );
  return performanceData || null;
  /*
  const userData = await fetchUserPerformance(userId)
  return userData
*/
};

const userService = {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};

export default userService;
