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
      const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=16");
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
