import { createStore } from 'vuex'

export default createStore({
  state: {
    photos: []
  },
  mutations: {
    updatePhotos(state, photos){
      state.photos = photos

    }
  },
  actions: {
    async fetchPhotos(ctx){
      const res = await fetch("http://127.0.0.1:7777/api/api/?format=json");
      const photos = await res.json();
      ctx.commit('updatePhotos', photos);
    }
  },
  getters: {
    allPhotos(state){
      return state.photos;
    }

  },
  modules: {
    
  }
})
