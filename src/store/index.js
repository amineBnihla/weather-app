import { createStore } from 'vuex'
import api from "../api";

const state = ()=>{
return{
 weather__forecast:{},
 error:"",
 city:""
}
}
const getters = {
    current:state => state.weather__forecast.current,
    hourly:state => state.weather__forecast.hourly,
    daily:state => state.weather__forecast.daily,
    error:state => state.error,
    city:state=>state.city,
}
const mutations = {
SET_WEATHER_FORECAST(state,payload){
state.weather__forecast = payload
},
SET_ERROR_MSG(state,msg){
  state.error = msg;
},
REMOVE_ERROR_MSG(state){
  state.error = ""
},
SET_CITY_NAME(state,{city,country}){
  state.city = `${city}, ${country}`
}
}
const actions = {
  removeErrorMsg({commit}){
   commit('REMOVE_ERROR_MSG');
  },
 getForecast({commit,dispatch},city) {
  api.get(`geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_API_KEY}`).then(({ data }) => {
    
  if(data.length> 0){
    commit("SET_CITY_NAME",{city:data[0].name,country:data[0].country});
     api
      .get(
        `data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,alerts&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      )
      .then(({ data }) => {
     commit('SET_WEATHER_FORECAST',data);
     dispatch('removeErrorMsg'); 
      });
  }else{
    commit('SET_ERROR_MSG',"Please enter an existing city")
  }
   
  }).catch((errors)=>{
    console.log(errors);
  });
}
}

export default createStore({
    state,
    getters,
    mutations,
    actions
})