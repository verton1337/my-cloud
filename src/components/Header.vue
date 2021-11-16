<template lang="">
    <div class="header">
        <div class="nav-menu">
            <ul class="pure-g">
                <li class="pure-u-1-5"><router-link to="/"><img src="https://picsum.photos/64/64" alt="logo" class="logo"></router-link></li>
                <li class="pure-u-3-5"><p></p></li>
                <li class="pure-u-1-5"><a @click="showAddFileForm" href="#" class="pure-button button-success" id="add-file-btn">Добавить файл</a>
                
                    <div class="addfile-form hidden" id="addfile-form">
                        <form class="pure-form">
                            <fieldset>
                                <label class="custom-file-upload">
                                    
                                <input type="file" />
                                Выберите файл...
                                </label>
                                <button type="submit" class="pure-button pure-button-primary button-success">Добавить</button>
                            </fieldset>
                        </form> 
                    </div>
                
                </li>
                
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    name: "header-nav",
    methods: {
        showAddFileForm(){
            document.querySelector(".addfile-form").classList.toggle("hidden");
            }
  }
    
}
</script>
<style lang="">
    
</style>