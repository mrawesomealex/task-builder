<template>
    <div id="library-wrap">
        <new-project-window v-if="newFlag" @closeWindow="newFlag = false"></new-project-window>
        <div class="project" v-for="(project, key) in projects" :key="key">
            <span>{{project.date}}</span>
            <h1>{{project.name}}</h1>
            <p>{{project.desc}}</p>
            <div class="users">
                <div class="user" v-for="(user, key2) in project.users" :key="key2">
                    {{user.substr(0,2)}}
                </div>
            </div>  
        </div>
        <div class="new" @click="openNewWindow">
            <img src="../assets/common/add.svg" width="25px"/>
            <span>Создать Новый</span>
        </div>
    </div>
</template>

<script>
import NewProjectWindow from '@/components/modals/NewProject'

export default {
  data () {
    return {
      projects: [
        {
          date: '12.10.2018',
          name: 'Пример название проекта',
          desc: 'Проект тявялется тестовым и никакой важной ифнормации в себе не несёт',
          users: [
            'Александр', 'Евгений', 'Lavina325', 'Матенишков'
          ]
        },
        {
          date: '12.10.2018',
          name: 'Пример название проекта',
          desc: 'Проект тявялется тестовым и никакой важной ифнормации в себе не несёт',
          users: [
            'Александр', 'Евгений', 'Lavina325', 'Матенишков'
          ]
        },
        {
          date: '12.10.2018',
          name: 'Пример название проекта',
          desc: 'Проект тявялется тестовым и никакой важной ифнормации в себе не несёт',
          users: [
            'Александр', 'Евгений', 'Lavina325', 'Матенишков'
          ]
        }
      ],
      newFlag: false
    }
  },
  methods: {
    openNewWindow () {
      this.newFlag = true
    }
  },
  components: {
    NewProjectWindow
  }
}
</script>

<style scoped lang="scss">
@import "../assets/common/styles.scss";
#library-wrap {
  display: flex;
  background: rgb(240, 240, 240);
  flex: 1;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 50px;
  .project, .new{
      width: 300px;
      height: 50vh;
      margin-right: 20px;
      margin-bottom: 20px;
      padding: 20px;
      transition: .3s;
      border-radius: 5px;
  }
  .project{
      cursor: pointer;
      position: relative;
      font-family: $font;
      background: white;
      box-shadow: 0px 0px 7px rgb(207, 207, 207);
      transform: translateY(0);
      span,p{
          font-family: $font;
      }
      span{
          font-size: 14px;
      }
      h1{
          font-family: $hfont;
          font-weight: 400;
          margin-bottom: 30px;
          font-size: 21pt;
      }
      p{
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          color: rgb(26, 26, 26);
      }
      .users{
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 20px;
          .user{
              display: flex;
              align-items: center;
              justify-content: center;
              text-transform: uppercase;
              margin-right: 20px;
              width: 40px;
              height: 40px;
              background: #23abeb;
              border-radius: 100%;
              color: white;
          }
      }
  }
  .project:hover{
      transform: translateY(-10px);
      box-shadow: 0px 0px 9px rgb(160, 160, 160);
  }
  .new{
      cursor: pointer;
      border: 1px dashed rgb(165, 165, 165);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: 0.2s;
      span{
          margin-top: 20px;
          color:rgb(165, 165, 165);
      }
  }
  .new:hover{
      border: 1px solid rgb(216, 216, 216);
      background: rgb(245, 245, 245);
      span{
          color:#23abeb;
      }
  }
}
</style>