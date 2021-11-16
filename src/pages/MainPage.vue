<template lang="">
    <div class="main">
        
      
            <div class="content pure-g">
                <div v-for="photo in allPhotos" :key="photo.id" class="pure-u-1-4 showed-element">
                    <router-link :to="{ name: 'DeletePage', params:{photo: photo.url }}"><img :src="photo.url" alt=""></router-link>
                    
                </div>
                
            </div>

     
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "mainPage",
    computed: mapGetters(['allPhotos']),
    methods: {
        ...mapActions(['fetchPhotos']),

    
    },

    async mounted() {
        this.fetchPhotos()
    },
    
}
</script>
<style scoped>
    img{
        width: 300px;
        height: 300px;
    }
</style>