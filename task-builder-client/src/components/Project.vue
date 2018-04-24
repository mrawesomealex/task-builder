<template>
    <div id="project-content">
        <div id="groups">
            <ul class="group" v-for="(group, key) in groups" :key="key">
                <li class="group-name">
                    <div>{{group.group}}</div>
                    <img src="../assets/common/more.svg" width="20px" height="100%"/>
                </li>
                <li class="user" v-for="(user, key) in group.users" :key="key">
                   <button>-</button>
                   <span>{{user}}</span>
                </li>
            </ul>
            <button>Добавить Группу</button>
        </div>
        <div id="content">
            <div id="menu">
                <router-link tag="button" to="tasks" :class="{current: this.$router.history.current.path.search('tasks') > -1}">Менеджер тасков</router-link>
                <router-link tag="button" to="diagrams" :class="{current: this.$router.history.current.path.search('diagrams') > -1}">Диаграммы</router-link>
                <router-link tag="button" to="users" :class="{current: this.$router.history.current.path.search('users') > -1}">Пользователи</router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          name: 'Тестовый проект',
          groups: [
            {
              group: 'Менеджмент',
              users: [
                'Имя Пользователя',
                'Екатерина Станиславова',
                'Paling220997'
              ]
            },
            {
              group: 'Дизайн',
              users: [
                'Имя Пользователя',
                'Екатерина Станисловаова',
                'Paling220997'
              ]
            },
            {
              group: 'Разработка',
              users: [
                'Имя Пользователя',
                'Екатерина Станисловаова',
                'Paling220997'
              ]
            },
          ],
          current: 'tasks'
        }
      },
      created: function () {
        this.$emit('projectInit', this.name)
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