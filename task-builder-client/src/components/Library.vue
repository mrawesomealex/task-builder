<template>
    <div id="library-wrap">
        <new-project-window v-if="newFlag" @closeWindow="newFlag = false" @newAdded="UpdateLibrary"></new-project-window>
        <edit-project-window v-if="edited"  @closeWindow="edited = ''" @editComplete="UpdateLibrary" :project="edited"></edit-project-window>
        <div @click.self="loadProject(project)" class="project" v-for="(project, key) in projects" :key="key">
            <span>{{dataParse(project.creationDate)}}</span>
            <h1>{{project.name}}</h1>
            <p>{{project.desc}}</p>
            <div class="controls">
                <button @click="openEditWindow(project)">Изменить</button>
                <button @click="removeProj(project.id)">Удалить</button>
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
import EditProjectWindow from '@/components/modals/EditProject'
import Project from '@/services/ProjectService'

export default {
  data () {
    return {
      projects: '',
      newFlag: false,
      edited: ''
    }
  },
  created: function () {
    if (this.$router.history.current.query.email === localStorage.email) {
        this.load()
    } else {
        this.$router.replace('/enter')
    }
  },
  methods: {
    load () {
       Project.load(localStorage.email).then(
          res => {
            if (res.data.error) {
              this.$router.replace('/enter')
            } else {
              if (!res.data.message) {
                  this.projects = res.data
              }
            }
          },
          err => {
            console.log('Произошла ошибка: ' + err)
          }
        )
    },
    openNewWindow () {
      this.newFlag = true
    },
    openEditWindow (project) {
      this.edited = project
    },
    UpdateLibrary () {
      this.newFlag = false
      this.edited = ''
      this.projects = ''
      this.load()
    },
    dataParse (date) {
       let datObj = new Date(date)
       return 'Cоздан ' + datObj.getDate() + '.' + (datObj.getMonth() + 1) + '.' + datObj.getFullYear()
    },
    loadProject (data) {
        this.$emit('projectInit', data)
    },
    removeProj (id) {
      Project.remove({
          email: localStorage.email,
          id: id
      }).then((res) => {
          this.projects = ''
          this.load()
      })
    }
  },
  components: {
    NewProjectWindow,
    EditProjectWindow
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
      .controls{
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 20px;
          button{
              padding: 10px;
              margin-right: 10px;
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