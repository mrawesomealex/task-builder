<template>
    <div id="project-content">
        <new-group-window v-if="newGroupFlag" @closeWindow="newGroupFlag = false"></new-group-window>
        <new-user-window v-if="newUserFlag"  @closeWindow="newUserFlag = false"></new-user-window>
        <div id="groups">
            <ul class="group" v-for="(group, key) in groups" :key="key">
                <li class="group-name">
                    <div>{{group.name}}</div>
                    <label :for="'menuGroupOpen' + key"><img src="../assets/common/more.svg" width="20px" height="100%"/></label>
                    <input class="checkbox" :id="'menuGroupOpen' + key" type="checkbox"/>
                    <div>
                        <div @click="newUserFlag = true">Добавить пользователя</div>
                        <div v-if="!group.name === 'Администраторы'">Удалить группу</div>
                    </div>
                </li>
                <li class="user" v-for="(user, key) in group.users" :key="key">
                   <button v-if="user !== $router.history.current.query.username && group.name === 'Администраторы'">-</button>
                   <span>{{user}}</span>
                </li>
            </ul>
            <button @click="newGroupFlag = true">Добавить Группу</button>
        </div>
        <div id="content">
            <div id="menu">
                <router-link tag="button" to="tasks" :class="{current: this.$router.history.current.path.search('tasks') > -1}">Менеджер тасков</router-link>
                <router-link tag="button" to="diagrams" :class="{current: this.$router.history.current.path.search('diagrams') > -1}">Диаграммы</router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import NewGroupWindow from '@/components/project/modals/GroupModal'
    import NewUserWindow from '@/components/project/modals/UserModal'
    import Group from '@/services/GroupsService'

    export default {
      data() {
        return {
          name: 'Тестовый проект',
          groups: [],
          current: 'tasks',
          newGroupFlag: false,
          newUserFlag: false
        }
      },
      created () {
        Group.load(this.$router.history.current.query.projId).then(result => {
            let jsonObj
            for(let i = 0; i < result.data.length; i++) {
                this.groups[i] = {}
                this.groups[i].id = result.data[i].id
                this.groups[i].name = i === 0 ? 'Администраторы' : result.data[i].name
                jsonObj = JSON.parse(result.data[i].users)
                this.groups[i].users = jsonObj
            }
        })
      },
      components: {
        NewGroupWindow,
        NewUserWindow
      }
    }
</script>
<style lang="scss" scoped>
@import '../assets/common/styles.scss';

/*----------------------------------------------------------------------
    Sidebar
----------------------------------------------------------------------*/
    #project-content{
      display: flex;
      height: 100vh;
    }
    #groups{
      display: flex;
      width: 300px;
      flex-direction: column;
      position: relative;
      padding: 35px 20px;
      border-right: $border;
      overflow-y: scroll;
      .group-name{
        font-family: $font;
        font-size: 13pt;
        margin-bottom: 15px;
        color: rgb(48, 48, 48);
        display: flex;
        img{
          opacity: 0;
          margin-left: auto;
          transition: .2s;
        }
        div>div{
            margin-bottom: 10px;
        }
      }
      .group{
        list-style: none;
        padding: 0;
        .user{
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 10px 0;
            color: rgb(124, 124, 124);
            font-size: 14px;
            font-family: $font;
            button{
                background: none;
                color:$highlited-color;
                padding: 0 10px 0 0;
                font-size: 21px;
            }
        }
        .user:hover span{
            opacity: .7;
        }
      }
      .group:not(:nth-child(3)){
        padding-bottom: 30px;
        border-bottom: 1px solid rgb(245, 245, 245);
      }
      .group:hover{
         img{
             opacity: 1;
         } 
      }
      >button{
        justify-content: center;
        margin-top: 25px;
        padding: 15px 0px;
      }
      .group:first-child{
        margin-top: 0;
      }
    }
/*----------------------------------------------------------------------
   Main
----------------------------------------------------------------------*/
    #content{
        display: flex;
        flex-direction: column;
        width: 86.5%;
        #menu{
            border-bottom: $border;
            display: flex;
            width: 86.5vw;
            justify-content: center;
            align-items: center;
            button{
                position: relative;
                font-size: 14px;
                font-family: $font;
                padding: 15px 20px;
                background: none;
                color: grey;
                transition: .1s;
            }
            button:after{
                content: '';
                position: absolute;
                width: 0%;
                left: 50%;
                transition: 0.3s;
            }
            .current{
                color: $highlited-color;
            }
            .current:after{
                left: 0; bottom: 0;
                height: 2px;
                width: 100%;
                background: $highlited-color;
            }
        }
    }
</style>