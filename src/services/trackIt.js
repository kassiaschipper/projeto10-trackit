import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postRegistration(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}

function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);
  return promise;
}

function postCreatHabit(body) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/habits`, body, config);
  return promise;
}

function getListHabits() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

function getDeletHabit(habitId) {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits/${habitId}`, config);
  return promise;
}
function getTodaytHabits() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits/today`, config);
  return promise;
}

function postHabitDone(habitId) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`, config);
  return promise;
}
function postHabitUndone(habitId) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/habits/${habitId}/uncheck`, config);
  return promise;
}

function getHabitHistoric() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits/history/daily`, config);
  return promise;
}

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("trackit"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

export {
  postRegistration,
  postLogin,
  postCreatHabit,
  getListHabits,
  getDeletHabit,
  getTodaytHabits,
  postHabitDone,
  postHabitUndone,
  getHabitHistoric,
  createHeader,
};
