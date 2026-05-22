export function formatUser(user) {
  return {
    id: user.id,
    firstName: user.userInfos.firstName,
    lastName: user.userInfos.lastName,
    age: user.userInfos.age,
    score: user.todayScore ?? user.score,
    calorieCount: user.keyData.calorieCount,
    proteinCount: user.keyData.proteinCount,
    carbohydrateCount: user.keyData.carbohydrateCount,
    lipidCount: user.keyData.lipidCount,
  };
}
