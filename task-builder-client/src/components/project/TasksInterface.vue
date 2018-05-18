<template>
    <div class="content-board" id="task-board">
        <new-sprint-window v-if="newSprintFlag" @closeWindow="newSprintFlag = false"></new-sprint-window>
        <new-task-window v-if="newTaskFlag" @closeWindow="newTaskFlag = false" :sprint="currentSprint"></new-task-window>
        <div v-if="menuSprint" id="newWindow">
            <div id="sprint-submenu" class="modal">
                <div @click="newTaskFlag = true">Добавить таск</div>
                <div>Изменить спринт</div>
                <div>Удалить спринт</div>
                <button @click="checking()">Закрыть</button>
            </div>
        </div>
        <div id="sprint-menu">
            <div @click="newSprintFlag = true">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve" width="512px" height="512px">
                    <g>
                        <path d="M341.333,0H42.667C19.093,0,0,19.093,0,42.667v298.667C0,364.907,19.093,384,42.667,384h298.667    C364.907,384,384,364.907,384,341.333V42.667C384,19.093,364.907,0,341.333,0z M298.667,213.333h-85.333v85.333h-42.667v-85.333    H85.333v-42.667h85.333V85.333h42.667v85.333h85.333V213.333z" />
                    </g>
                </svg>
            </div>
        </div>
        <div id="sprint-content">
            <div @click="checking($event, sprint.name)" v-for="(sprint, key) in sprints" :key="key" :class="'sprint sprint' + key"   @dragover.stop.prevent.self="addToSprint($event)" @drop.stop.prevent.self="putTask(key)">
                <div class="head">
                    <div class="status-bar">
                        <svg v-if="sprint.done" :class="['status-icon',{done: sprint.done}]" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" x="0px" y="0px"
                            viewBox="-1 -1 60 60" style="enable-background:new 0 0 55 55;" xml:space="preserve">
                            <circle fill="#23abeb" stroke="#23abeb" cx="25" cy="25" r="25"/>
                            <polyline stroke="white" style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="
                                38,15 22,33 12,25 "/>
                        </svg>
                        <span class="date">{{sprint.startDate}} - </span>
                        <span class="date">{{sprint.endDate}}</span>
                    </div>
                    <h1>{{sprint.name}}</h1>
                </div>
                <div :class="['task', {finished: task.finished}]" v-for="(task, key2) in sprint.tasks" :key="key2" @dragstart="setParent($event)" @drag="movetask(task.id)" @dragend="endDrag()" draggable="true">
                    <div>
                        <svg v-if="task.finished" class="label-task-finished" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" x="0px" y="0px"
                            viewBox="-1 -1 60 60" style="enable-background:new 0 0 55 55;" xml:space="preserve">
                            <circle fill="#d6f2ff" stroke="none" cx="25" cy="25" r="25"/>
                            <polyline stroke="#23abeb" style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="
                                38,15 22,33 12,25 "/>
                        </svg>
                        <h3>{{task.name}}</h3>
                        <p class="date">{{task.date}}</p>
                        <p class="info">
                            <img src="../../assets/common/profile.svg" width="12pt"/><span>{{task.users.length}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import NewSprintWindow from '@/components/project/modals/SprintModal'
import NewTaskWindow from '@/components/project/modals/TaskModal'

export default {
  data() {
    return {
      sprints: [
        {
          name: 'Название спринта 1',
          startDate: '12.08.2017',
          endDate: '18.09.2017',
          done: true,
          tasks: [
            {
                id: 10,
                name: 'Имя первого таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [1],
                comments: 12,
                finished: false
            },
            {
                id: 11,
                name: 'Имя второго таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [1,3],
                comments: 12,
                finished: true
            },
            {
                id: 12,
                name: 'Имя третьего таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [1],
                comments: 12,
                finished: false
            },
            {
                id: 13,
                name: 'Имя третьего таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [1],
                comments: 12,
                finished: false
            },
            {
                id: 14,
                name: 'Имя третьего таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [1],
                comments: 12,
                finished: false
            }
          ]
        },
        {
          name: 'Название спринта 1',
          startDate: '12.08.2017',
          endDate: '18.09.2017',
          done: false,
          tasks: [
            {
                id: 15,
                name: 'Имя первого таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [1],
                comments: 12,
                finished: false
            },
            {
                id: 16,
                name: 'Имя второго таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [1],
                comments: 12,
                finished: false
            },
            {
                id: 17,
                name: 'Имя третьего таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [1],
                comments: 12,
                finished: false
            }
          ]
        },
        {
          name: 'Название спринта 1',
          startDate: '12.08.2017',
          endDate: '18.09.2017',
          done: false,
          tasks: [
            {
                id: 1,
                name: 'Имя первого таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [1],
                comments: 12,
                finished: false
            },
            {
                id: 2,
                name: 'Имя второго таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [1,2],
                comments: 12,
                finished: false
            },
            {
                id: 3,
                name: 'Имя третьего таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [2],
                comments: 12,
                finished: false
            }
          ]
        },
        {
          name: 'Название спринта 1',
          startDate: '12.08.2017',
          endDate: '18.09.2017',
          done: false,
          tasks: [
            {
                id: 4,
                name: 'Имя первого таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [3],
                comments: 12,
                finished: false
            },
            {
                id: 5,
                name: 'Имя второго таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [3],
                comments: 12,
                finished: false
            },
            {
                id: 6,
                name: 'Имя третьего таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [],
                comments: 12,
                finished: false
            }
          ]
        },
        {
          name: 'Название спринта 1',
          startDate: '12.08.2017',
          endDate: '18.09.2017',
          done: false,
          tasks: [
            {
                id: 7,
                name: 'Имя первого таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [5],
                comments: 12,
                finished: false
            },
            {
                id: 8,
                name: 'Имя второго таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [3, 5],
                comments: 12,
                finished: false
            },
            {
                id: 9,
                name: 'Имя третьего таска',
                date: '15.08.2017',
                users: ['Пользователь', 'Другой пользователь'],
                label: [4, 5],
                comments: 12,
                finished: false
            }
          ]
        }
      ],
      draggableParent: '',
      draggableTask: null,
      newSprintFlag: false,
      menuSprint: false,
      newTaskFlag: false,
      currentSprint: ''
    }
  },
  methods: {
    checking(e,sprintName) {
        this.menuSprint = !this.menuSprint
        this.currentSprint = sprintName
    },
    setParent(e) {
      this.draggableParent = e.target.parentElement.classList[1]
      e.target.classList.add('moving')
    },
    putTask (num) {
      if (this.draggableTask !== null) {
        let from = parseInt(this.draggableParent.substr(6))
        let currentTask = this.sprints[from].tasks.findIndex(el => el.id === this.draggableTask)
        let task = {}
        for (let key in this.sprints[from].tasks[currentTask]) {
            task[key] = this.sprints[from].tasks[currentTask][key]
        }
        this.sprints[num].tasks.unshift(task)
        Vue.delete(this.sprints[from].tasks, currentTask)
        //ИЗМЕНЕНИЯ В БД
      }
    },
    movetask (taskNum) {
      this.draggableTask = taskNum
    },
    addToSprint (e) {
      if (e.target.classList[1] !== this.draggableParent) {
        this.removeFromSprint()
        e.target.classList.add('dragzone')
        let h3 = document.createElement('H3')
        let text = document.createTextNode('Отпустите таск, чтобы добавить его в данный спринт')
        h3.appendChild(text)
        h3.style = 'font-size: 11pt; margin: 5px;font-weight: 400;font-family:"Arimo", sans-serif; color:#23abeb; line-height: 21px;'
        
        let content = document.createElement('DIV')
        content.appendChild(h3)

        let task = document.createElement('DIV')
        task.appendChild(content)
        task.classList.add('task')
        task.setAttribute('id', 'moveItem')
        task.style = ' padding: 15px; border: 1px solid #23abeb; border-radius: 5px; margin-bottom: 10px; background: #e8f8ff'
        
        e.target.insertBefore(task, e.target.children[1])
      }
    },
    removeFromSprint () {
      let moving = document.getElementById('moveItem')
      if (moving) {
        moving.parentNode.classList.remove('dragzone')
        moving.parentNode.removeChild(moving)
      }
    },
    endDrag () {
      this.removeFromSprint()
      document.getElementsByClassName('moving')[0].classList.remove('moving')
    }
  },
  components: {
    NewSprintWindow,
    NewTaskWindow
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/common/styles.scss";
#newWindow{
    width: 100% !important;
    height: 100% !important;
}
#task-board::-webkit-scrollbar{
    height: 5px;
    width:3px;
}
#task-board::-webkit-scrollbar-thumb{
    background:#f0f4f5;
    transition: .3s;
}
#task-board:hover::-webkit-scrollbar-thumb{
    background:rgb(102, 102, 102);
}
#task-board:hover::-webkit-scrollbar-track-piece{
    background:#f0f4f5;
}
#task-board {
  display: flex;
  position: relative;
  overflow-x: scroll;
  #sprint-menu{
      position: fixed;
      margin-top: -3%;
      margin-left: -3%;
      >div{
        display: flex;
        align-items: center;
        color: #808080;
        font-size: 11pt;
        cursor: pointer;
      }
      >div:hover{
        svg{
          fill:$highlited-color;
          ~span{
              color: $highlited-color;
          }
        }
      }
      svg{
          width: 20px;
          height: 100%;
          fill:#c4ccce;
          transition: .2s;
          margin-right: 12px;
      }
  }
  #sprint-submenu{
      div{
          margin-bottom: 20px;
      }
  }
  #sprint-content{
      margin-left: 0;
      animation: fromRight 0.3s forwards;
      display: flex;
      align-items: flex-start;
      .no-draggable,
      .no-draggable *{
         pointer-events: none; 
      }
      .sprint{
          vertical-align: top;
          overflow-y: scroll;
          width: 250px;
          max-height: 60vh;
          background: white;
          padding: 0px 30px 25px 30px;
          border-radius: 5px;
          box-shadow: 0 0 10px 0px rgba(58, 82, 94, 0.151);
          margin-right: 20px;
          transition: 0.3s;
          .head{
              background: white;
              padding-top: 30px;
              width: 250px;
              pointer-events: none;
              img{
                  margin-left: auto;
                  opacity: .5;
              }
          }
          span,div,h3{
              font-family: $font;
              font-weight: 400;
          }
          h1{
            font-family: $hfont;
            font-weight: 400;
            font-size: 18pt;
            margin-top: 0;
            margin-bottom: 35px;
          }
          h3{
            font-size: 11pt;
          }
          .date, .info{
              font-size: 12px;
              color: #808080;
          }
          .info{
              display: flex;
              align-items: center;
              margin-top: 20px;
              margin-bottom: 0;
              img{
                  margin-right: 6px;
              }
              span{
                  margin-right: 12px;
              }
          }
      }
      .sprint:hover{
          .head img{
              opacity: 1;
          }
      }
      .status-bar{
          display: flex;
          align-items: center;
          position: relative;
          margin-bottom: 10px;
          svg{
              margin-right: 8px;
          }
          .done{
            animation: appear 0.3s forwards;
          }
          .done~span{
              color:$highlited-color
          }
      }
      .dragzone .task{
        pointer-events: none;
      }
      .task{
        position: relative;
        padding: 15px;
        border: 1px solid rgb(228, 228, 228);
        border-radius: 5px;
        margin-bottom: 10px;
        h3{
           margin: 0;
        }
        .task-label{
            display: flex;
            width: 100%;
            height: 5px;
            margin-bottom: 10px;
            .label{
                display: flex;
                width: 25px;
                border-radius: 20px;
                margin-right: 5px;
            }
            .label1{
                background: rgb(250, 91, 91);
            }
            .label2{
                background: rgb(85, 224, 57);
            }
            .label3{
                background: rgb(57, 224, 210);
            }
            .label4{
                background: rgb(112, 76, 241);
            }
            .label5{
                background: rgb(241, 76, 227);
            }
            .label6{
                background: rgb(224, 241, 76);
            }
        }
        svg{
            position: absolute;
            right: 12px;
        }
      }
      .task.finished{
        color:$highlited-color;
        border: 1px solid rgb(187, 222, 233);
        background: #f8fcff;
        .date{
            color:$highlited-color;
        }
      }
      .task.moving{
        background: rgb(248, 251, 252);
        border: 1px solid rgb(214, 230, 235);
        opacity: .5;
        z-index: 100;
        position: relative;
        color: rgb(114, 189, 212);
        .date, .info{
            color: rgb(138, 202, 221);
        }
      }
      .task:hover{
        border:1px solid rgb(214, 230, 235);
        background: #f8fcff;
      }
  }
}
@keyframes appear {
    0%{
        width: 0px;
        height: 0px;
    }
}
@keyframes fromRight  {
    0%{
        margin-left: 10%;
    }
}
</style>