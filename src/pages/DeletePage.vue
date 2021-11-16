<template >

    <div class="">
        <div pure-g>
            <div class="pure-u-1-5">
                <ul>
                    <li>
                        <router-link :to="{name:'MainPage'}" class="button-error">Удалить</router-link>
                    </li>
                    <li>
                       <router-link :to="{name:'MainPage'}" class="button-success">Отмена</router-link>
                    </li>
                </ul>
            </div>
            <div class="pure-u-3-5 pic">
                <img :src="photo" alt="">
            </div>
            <div class="pure-u-1-5">

            </div>

        </div>
      

     
    </div>   
</template>
<script>


export default {
    
    name:"deletePage",
    props: ['photo'],
    mounted() {
      console.log(this.photo)
    },
    
        
    

}
</script>
<style scoped>
    li{
        display: block;

    }
    li a{
        display: block;
        width: 100%;
        height: 40px;
        margin-top: 5px;
        margin-left: auto;
        margin-right: auto;
        padding: 3px;
        border-radius: 25px;
        text-align: center;
    
    }
    .pic{
   
        margin-left: 25px;
        margin-top: 10px;

    }
</style>