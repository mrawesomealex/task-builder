<template>
    <div id="profile-content">
        <header>
            <img src="../assets/common/logo.svg" width="100px"/>
            <div id="menu">
                <a href="#">Помощь</a>
                <a href="#">Условия Пользования</a>
                <a href="#">Контакты</a>
            </div>
        </header>
        <div id="sub-header">
           <span v-if="!project"><i>Выберите или создайте проект, чтобы приступить к работе</i></span>
           <div id="head-name" v-if="project">{{project.name}}</div>
           <div id="user-info" :class="{'right-align': !project}">
               <div><span>Здравствуйте, </span><span class="user-name">{{user}}</span></div>
               <div id="user-icon">{{user.substr(0,2)}}</div>
           </div>
        </div>
        <router-view @projectInit="initializeProject" ></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                project: null,
                user: ''
            }
        },
        created () {
          this.user = this.$router.history.current.query.username
        },
        methods: {
            initializeProject (name) {
                this.project = name
                this.$router.push({path: '/profile/project/tasks?projId=' + this.project.id + '&username=' + this.user})
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/common/styles.scss';
#profile-content{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
#head-name{
    color: $highlited-color;
}
</style>
