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
           <div id="head-name" v-if="project">{{project}}</div>
           <div id="user-info" :class="{'right-align': !project}">
               <div><span>Здравствуйте, </span><span class="user-name">{{user}}</span></div>
               <div id="user-icon">{{user.substr(0,2)}}</div>
           </div>
        </div>
        <router-view @projectInit="initializeProject"></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projects: 22,
                project: null,
                user: 'Александр',
                lastActions: [
                    {
                        name: 'Юлия выполнила таск "Фикс шапки сайта на мобильных экранах"',
                        date: '12.09.2018',
                        seen: true
                    },
                    {
                        name: 'Юлия выполнила таск "Фикс шапки сайта на мобильных экранах"',
                        date: '12.09.2018',
                        seen: false
                    }
                ]
            }
        },
        methods: {
            initializeProject (name) {
                this.project = name
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
