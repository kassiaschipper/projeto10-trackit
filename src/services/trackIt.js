import axios from "axios";

const BASE_URL =
  "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postRegistration(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
  return promise;
}

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
  }

function postCreatHabit(body){
    const promise = axios.post(`${BASE_URL}/habits`, body);
    return promise;
}


function getListHabits() {
  const promise = axios.get(`${BASE_URL}/habits`);
  return promise;
}

function getDeletHabit(habitId) {
  const promise = axios.get(`${BASE_URL}/habits/${habitId}`);
  return promise;
}
function getTodaytHabits() {
    const promise = axios.get(`${BASE_URL}/habits/today`); 
    return promise;
  }

  function postHabitDone(habitId, body){
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`, body);
    return promise;
}
function postHabitUndone(habitId, body){
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/uncheck`, body);
    return promise;
}

function getHabitHistoric() {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`);
    return promise;
  }



export { postRegistration, postLogin, postCreatHabit, getListHabits, getDeletHabit, getTodaytHabits, postHabitDone, postHabitUndone, getHabitHistoric};
