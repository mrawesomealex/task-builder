<template>
    <div class="content-board">
        <div id="diagramm-menu">
            <div :class="{active: drawContent}" @click="initDiagram(chosenSprint)">
                <svg version="1.1" id="BurndownDiagram" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  width="32.001px" height="32.002px" viewBox="0 0 32.001 32.002" style="enable-background:new 0 0 32.001 32.002;"
                  xml:space="preserve">
                  <g>
                    <g id="Statics">
                      <g>
                        <path d="M31.834,1.553c0.306-0.461,0.179-1.08-0.282-1.386c-0.462-0.305-1.08-0.179-1.386,0.283l-3.699,5.599
                          C26.313,6.024,26.16,6.001,26,6.001c-1.652,0-3,1.347-3,3c0,0.318,0.063,0.619,0.155,0.907l-3.572,4.555
                          c-0.461-0.288-1-0.462-1.582-0.462c-1.613,0-2.924,1.283-2.988,2.88l-5.651,3.291C8.812,19.466,7.963,19.001,7,19.001
                          c-1.654,0-3,1.347-3,3c0,0.65,0.214,1.25,0.566,1.742l-4.402,6.709c-0.303,0.463-0.175,1.082,0.287,1.385
                          c0.169,0.111,0.36,0.164,0.548,0.164c0.326,0,0.646-0.158,0.837-0.451l4.375-6.666C6.464,24.952,6.727,25.001,7,25.001
                          c1.613,0,2.924-1.281,2.988-2.881l5.651-3.289c0.549,0.707,1.398,1.17,2.361,1.17c1.654,0,3-1.346,3-3
                          c0-0.317-0.062-0.619-0.153-0.906l3.57-4.554c0.461,0.287,1,0.461,1.582,0.461c1.653,0,3-1.346,3-3
                          c0-0.767-0.298-1.459-0.771-1.99L31.834,1.553z M7,23.001c-0.552,0-1-0.447-1-1c0-0.551,0.448-1,1-1s1,0.449,1,1
                          C8,22.554,7.552,23.001,7,23.001z M18,18.001c-0.552,0-1-0.447-1-1c0-0.551,0.448-1,1-1s1,0.449,1,1
                          C19,17.554,18.552,18.001,18,18.001z M26,10.001c-0.552,0-1-0.448-1-1c0-0.551,0.448-1,1-1s1,0.449,1,1
                          C27,9.553,26.551,10.001,26,10.001z M6,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1s1-0.447,1-1
                          C7,30.45,6.554,30.001,6,30.001z M11,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1s1-0.447,1-1
                          C12,30.45,11.554,30.001,11,30.001z M16,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1s1-0.447,1-1
                          C17,30.45,16.554,30.001,16,30.001z M21,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1c0.554,0,1-0.447,1-1
                          C22,30.45,21.554,30.001,21,30.001z M26,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1c0.554,0,1-0.447,1-1
                          C27,30.45,26.554,30.001,26,30.001z M31,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1c0.554,0,1-0.447,1-1
                          C32,30.45,31.554,30.001,31,30.001z M1,27.001c0.553,0,1-0.447,1-1c0-0.551-0.447-1-1-1s-1,0.449-1,1
                          C0,26.554,0.447,27.001,1,27.001z M1,22.001c0.553,0,1-0.447,1-1c0-0.551-0.447-1-1-1s-1,0.449-1,1
                          C0,21.554,0.447,22.001,1,22.001z M1,17.001c0.553,0,1-0.447,1-1c0-0.551-0.447-1-1-1s-1,0.448-1,1
                          C0,16.554,0.447,17.001,1,17.001z M1,12.001c0.553,0,1-0.446,1-1c0-0.552-0.447-1-1-1s-1,0.448-1,1
                          C0,11.556,0.447,12.001,1,12.001z M1,7.001c0.553,0,1-0.446,1-1c0-0.552-0.447-1-1-1s-1,0.448-1,1C0,6.556,0.447,7.001,1,7.001z
                          M1,2.001c0.553,0,1-0.446,1-1c0-0.552-0.447-1-1-1s-1,0.448-1,1C0,1.556,0.447,2.001,1,2.001z"/>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>Диаграмма Сгорания</span>
            </div>
            <div :class="{active: !drawContent}" @click="lounchGant()">
                <svg version="1.1" id="Gantiagram" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                  <path d="M119.467,93.867H8.533v-51.2h110.933l25.6,25.6L119.467,93.867z"/>
                  <path d="M392.533,187.733h-384v-51.2h384l25.6,25.6L392.533,187.733z"/>
                  <path d="M162.133,375.467H8.533v-51.2h153.6l25.6,25.6L162.133,375.467z"/>
                  <path d="M290.133,281.6H8.533v-51.2h281.6l25.6,25.6L290.133,281.6z"/>
                  <path d="M315.733,469.333H8.533v-51.2h307.2l25.6,25.6L315.733,469.333z"/>
                </svg>
                <span>Диаграмма Ганта</span>
            </div>
            <div v-if="drawContent">
              <select @change="changeSprint($event)" >
                <option v-for="(sprint, key) in sprints" :key="key" :value="key" :selected="key === chosenSprint">{{sprint.name}}</option>
              </select>
            </div>
        </div>
        <div id="diagramm">
          <div v-if="!this.drawContent && sprints.length">
           <div class="row">
             <span class="task"></span>
             <span class="month" v-for="(month, key) in dayInfo.months" :key="key" 
                   :style="'width: ' + 34.75 * Object.keys(dayInfo.days[month.substr(0, month.length - 5)]).length + 'px'">{{month}}</span>
           </div>
            <div class="row">
                <span class="task"></span>
                <span class="row" v-for="(month, key) in dayInfo.days" :key="key">
                  <span  class="day dayNum"  v-for="(day, key) in month" :key="key">{{day}}</span>
                </span>
            </div>
            <div v-for="(sprint, key) in sprints" :key="key">
              <div>
                <div class="row">
                  <span class="task sprintname">{{sprint.name}}</span>
                  <span class="day" v-for="(day, key) in dayInfo.daysNums" :key="key"></span>
                </div>
                <div class="row" v-for="(task, key) in sprint.tasks" :key="key">
                  <span  class="task taskname">{{task.name}}</span>
                  <span class="row" v-for="(month, key) in dayInfo.days" :key="key">
                    <span  :class="['day', {filled: day - new Date(task.startDate).getDate() >= 0 && new Date(task.endDate).getDate() - day >=0  && monthNames[new Date(task.startDate).getMonth()] === key}]" v-for="(day, key2) in month" :key="key2"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               sprints: [
                 {
                   name: 'Sprint 1',
                   tasks: [
                     {
                       name: 'Таск1jfdfhksdkfhjsfjkshdfkskjdfhsjkdfhjkshfjksdhf',
                       startDate: '8.10.2017',
                       endDate: '8.12.2017',
                       realEnd: '8.17.2017',
                     },
                     {
                       name: 'Таск2',
                       startDate: '8.12.2017',
                       endDate: '8.15.2017',
                       realEnd: '8.17.2017'
                     },
                     {
                       name: 'Таск3',
                       startDate: '8.7.2017',
                       endDate: '8.13.2017',
                       realEnd: '8.8.2017'
                     },
                     {
                       name: 'Таск3',
                       startDate: '8.13.2017',
                       endDate: '8.17.2017',
                       realEnd: '8.14.2017'
                     },
                     {
                       name: 'Таск4',
                       startDate: '8.17.2017',
                       endDate: '8.21.2017',
                       realEnd: '8.26.2017'
                     },
                     {
                       name: 'Таск5',
                       startDate: '8.21.2017',
                       endDate: '8.28.2017',
                       realEnd: '8.28.2017'
                     },
                     {
                       name: 'Таск6',
                       startDate: '8.28.2017',
                       endDate: '9.25.2017',
                       realEnd: '9.26.2017'
                     },
                     {
                       name: 'Таск7',
                       startDate: '8.31.2017',
                       endDate: '9.10.2017',
                       realEnd: '9.11.2017'
                     },
                     {
                       name: 'Таск8',
                       startDate: '9.10.2017',
                       endDate: '9.15.2017',
                       realEnd: '9.8.2017'
                     }
                   ]
                 },
                 {
                   name: 'Sprint 2',
                   tasks: [
                     {
                       name: 'Таск11',
                       startDate: '8.10.2017',
                       endDate: '8.12.2017'
                     },
                     {
                       name: 'Таск12',
                       startDate: '8.12.2017',
                       endDate: '8.15.2017'
                     },
                     {
                       name: 'Таск13',
                       startDate: '8.11.2017',
                       endDate: '8.13.2017'
                     },
                     {
                       name: 'Таск14',
                       startDate: '8.13.2017',
                       endDate: '8.17.2017'
                     },
                     {
                       name: 'Таск15',
                       startDate: '8.17.2017',
                       endDate: '8.21.2017'
                     },
                     {
                       name: 'Таск16',
                       startDate: '8.21.2017',
                       endDate: '8.28.2017'
                     },
                     {
                       name: 'Таск17',
                       startDate: '8.28.2017',
                       endDate: '8.31.2017'
                     },
                     {
                       name: 'Таск18',
                       startDate: '8.31.2017',
                       endDate: '9.10.2017'
                     },
                     {
                       name: 'Таск19',
                       startDate: '9.10.2017',
                       endDate: '9.14.2017'
                     }
                   ]
                 }
               ],
               drawContent: '',
               axisV: '',
               axisH: '',
               min: '',
               max: '',
               wholeWidth: '',
               wholeHeight: '',
               totalDays: '',
               widthDay: '',
               hours: 0,
               chosenSprint: 1,
               dayInfo: {},
               monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
               menuList_status: false
            }
        },
        mounted: function () {
           this.initDiagram(this.chosenSprint)
           this.initGant()
        },
        methods: {
            initDiagram (num) {
              if (this.drawContent) {
                return
              }
              this.drawContent = SVG('diagramm').size('100%', '100%')
              //vertical
              this.axisV = this.drawContent.group('axis-v')
              this.axisV.line('2%', 0, '2%', '95%').stroke({width: 0.5, color: '#d0d0d0'})
              //horizontal
              this.axisH = this.drawContent.group('axis-h')
              this.axisH.line('2%', '95%', '100%', '95%' ).stroke({width: 0.5, color: '#d0d0d0'})

              let taskArray = []
              for(let i = 0; i < this.sprints[num].tasks.length; i++) {
                taskArray[i] = {}
                for (const key in this.sprints[num].tasks[i]) {
                  taskArray[i][key] = this.sprints[num].tasks[i][key]
                }
              }
              let stop
              this.min = 0
              for(let i = 0; i < taskArray.length; i++) {
                for(let j = i; j < taskArray.length; j++) {
                  if (Date.parse(taskArray[i].startDate) - Date.parse(taskArray[j].startDate) > 0) {
                      i = j-1
                      this.min = j
                      stop = 0
                      break
                  } else {
                      stop = 1
                  }
                }
                if (stop) { break }
              }
              let biggestEnd
              this.max = 0
              for(let i = 0; i < taskArray.length; i++) {
                for(let j = i; j < taskArray.length; j++) {
                  if (taskArray[i].realEnd) {
                    if (Date.parse(taskArray[i].realEnd) - Date.parse(taskArray[i].endDate) > 0) {
                      biggestEnd = Date.parse(taskArray[i].realEnd)
                    } else {
                      biggestEnd = Date.parse(taskArray[i].endDate)
                    }
                  } else {
                    biggestEnd = Date.parse(taskArray[i].endDate)
                  }
                  if (biggestEnd - Date.parse(taskArray[j].endDate) < 0) {
                      this.max = j
                      i = j-1
                      stop = 0
                      break
                  } else {
                      stop = 1
                  }
                }
                if (stop) { break }
              }

              // days-line
              if (taskArray[this.max].realEnd) {
                if (Date.parse(taskArray[this.max].realEnd) - Date.parse(taskArray[this.max].endDate) > 0) {
                  biggestEnd = Date.parse(taskArray[this.max].realEnd)
                } else {
                  biggestEnd = Date.parse(taskArray[this.max].endDate)
                }
              } else {
                biggestEnd = Date.parse(taskArray[this.max].endDate)
              }
              
              this.totalDays = (biggestEnd - Date.parse(taskArray[this.min].startDate))/864e5
              this.widthDay = 98/this.totalDays - 0.0001
              let label
              for (let i = 1; i <= this.totalDays; i++) {
                label = this.axisH.text(i + '')
                label.move((this.widthDay*i+1.5 - (i < 10 ? 0.3 : 0.6)) + '%', '95%').font({ fill: 'grey', family: 'Source Sans Pro', size: '9pt'})
                this.axisH.line( this.widthDay*i+1.5 + '%', '94%', this.widthDay*i+1.5 + '%', '95%' ).stroke({width: 0.5, color: '#d0d0d0'})
              }

              // hours-line

              let hours = 0
              for (let i = 0; i < taskArray.length; i++) {
                hours += (Date.parse(taskArray[i].endDate) - Date.parse(taskArray[i].startDate))/36e5
                this.hours = hours
              }
              let step = Math.floor(hours / 5)
              let axisName1 = this.axisV.text('Количество оставшихся часов').font({ fill: 'grey',weight: 600, family: 'Source Sans Pro', size: '12pt'}).rotate(-90)
              axisName1.move('-20%', -105)
              for(let i = 0; i < 5; i++){
                label = this.axisV.text(step*(5 - i) + '').font({ fill: 'grey', family: 'Source Sans Pro', size: '9pt'})
                label.move('2.1%', 22.5*i-0.5 + '%')
                this.axisV.line( '1.5%', 22.5*i + '%', '2%' , 22.5*i + '%').stroke({width: 1, color: '#d0d0d0'})
              }

              let circles = []
              this.wholeWidth = document.getElementById('diagramm').offsetWidth
              this.wholeHeight = document.getElementById('diagramm').offsetHeight
              let beginDate = new Date(taskArray[this.min].startDate)
              
              let expectLine = this.drawContent.group('expected')
              let buf = 0
              let prevx, prevy, x, y
              let line
              for (let i = 0; i <= this.totalDays; i++) {
                if (hours !== buf) {
                  x = this.wholeWidth*((this.widthDay*i)/100) + this.wholeWidth*0.02 - 3 - this.wholeWidth*i*0.0001
                  y = this.wholeHeight * ((95 - hours*(0.0604229607 - 0.0033))/100) + this.wholeHeight *0.0015 - 3
                  circles[i] = expectLine.circle(6).stroke({ color: '#23abeb', width: 2}).fill('white')
                  circles[i].move(x,y+25)
                  circles[i].animate(150+ i*8).move(x,y)
                  if (buf) {
                    expectLine.line(prevx, prevy, x, y).animate(800 + i*8).stroke({width: 0.5, color: '#23abeb'})
                  }
                  prevx = x
                  prevy = y
                }
                beginDate.setDate(beginDate.getDate() + 1)
                buf = hours
                for(let j = 0; j < taskArray.length; j++) {
                  if ((Date.parse(beginDate) - Date.parse(taskArray[j].endDate)) >= 0) {
                    hours -= ((Date.parse(taskArray[j].endDate) - Date.parse(taskArray[j].startDate))/36.e5)
                    taskArray.splice(j, 1)
                  }
                }
              }
              this.updateProgress(0)
            },
            changeSprint (e) {
              this.drawContent = ''
              document.getElementById('diagramm').removeChild(document.getElementById('diagramm').childNodes[1])
              this.chosenSprint = parseInt(e.target.value)
              this.initDiagram(this.chosenSprint)
            },
            updateProgress (num) {
              let taskArray = []
              let stop
              for(let i = 0; i < this.sprints[num].tasks.length; i++) {
                taskArray[i] = {}
                for (const key in this.sprints[num].tasks[i]) {
                  taskArray[i][key] = this.sprints[num].tasks[i][key]
                }
              }

              let circles = []
              let beginDate
              if (!taskArray[this.min].realEnd) {
                return
              } else {
                beginDate = new Date(taskArray[this.min].startDate)
              }
              let color
              if (taskArray[this.max].realEnd) {
                if (Date.parse(taskArray[this.max].realEnd) - Date.parse(taskArray[this.max].endDate) > 0) {
                  color = 'red'
                } else {
                  color = '#3ED66C'
                }
              } else {
                biggestEnd = Date.parse(taskArray[this.max].endDate)
              }

              let realLine = this.drawContent.group('real')
              let buf = 0
              let prevx, prevy, x, y
              for (let i = 0; i <= this.totalDays; i++) {
                if (this.hours !== buf) {
                  x = this.wholeWidth*((this.widthDay*i)/100) + this.wholeWidth*0.02 - 3 - this.wholeWidth*i*0.0001
                  y = this.wholeHeight * ((95 - this.hours*(0.0604229607 - 0.0033))/100) + this.wholeHeight *0.0015 - 3
                  circles[i] = realLine.circle(6).stroke({ color: color, width: 2}).fill('white').opacity(0)
                  circles[i].move(x,y+25)
                  circles[i].animate(150+ i*8, '<' ,400 + 8*this.totalDays).move(x,y).opacity(1)
                  if (buf) {
                    realLine.line(prevx, prevy, x, y).stroke({width: 0.5, color: color, opacity: 0}).animate(500 + i*8, '<' ,500 + 8*this.totalDays).stroke({opacity: 1})
                  }
                  prevx = x
                  prevy = y
                }
                beginDate.setDate(beginDate.getDate() + 1)
                buf = this.hours
                for(let j = 0; j < taskArray.length; j++) {
                  if (taskArray[j].realEnd) {
                    if ((Date.parse(beginDate) - Date.parse(taskArray[j].realEnd)) >= 0) {
                      this.hours -= ((Date.parse(taskArray[j].endDate) - Date.parse(taskArray[j].startDate))/36e5)
                      taskArray.splice(j, 1)
                    }
                  }
                }
              }
            },
            initGant() {
              let globalMin = [-1, -1]
              let substruct
              for(let sprint = 0; sprint < this.sprints.length; sprint++){
                for(let i = 0; i < this.sprints[sprint].tasks.length; i++) {
                  for(let j = i; j < this.sprints[sprint].tasks.length; j++) {
                    if (globalMin[0] > 0) {
                      substruct =  Date.parse(this.sprints[globalMin[0]].tasks[globalMin[1]].startDate) - Date.parse(this.sprints[sprint].tasks[j].startDate) 
                    } else {
                      substruct =   Date.parse(this.sprints[sprint].tasks[i].startDate) - Date.parse(this.sprints[sprint].tasks[j].startDate) 
                    }
                    if (substruct > 0) {
                        i = j-1
                        globalMin[0] = sprint
                        globalMin[1] = j
                      break
                    } else {
                        stop = 1
                    }
                  }
                  if (stop) { break }
                }
              }

              this.dayInfo['min'] =  new Date(this.sprints[globalMin[0]].tasks[globalMin[1]].startDate)

              let globalMax = [-1, -1, 0]
              let biggestEnd, realEndFlag
              substruct = ''
              for(let sprint = 0; sprint < this.sprints.length; sprint++){
                realEndFlag = 0
                for(let i = 0; i < this.sprints[sprint].tasks.length; i++) {
                  for(let j = i; j < this.sprints[sprint].tasks.length; j++) {
                    if (this.sprints[sprint].tasks[i].realEnd) {
                      if (Date.parse(this.sprints[sprint].tasks[i].realEnd) - Date.parse(this.sprints[sprint].tasks[i].endDate) > 0) {
                        biggestEnd = Date.parse(this.sprints[sprint].tasks[i].realEnd)
                        realEndFlag = 1
                      } else {
                        biggestEnd = Date.parse(this.sprints[sprint].tasks[i].endDate)
                        realEndFlag = 0
                      }
                    } else {
                      biggestEnd = Date.parse(this.sprints[sprint].tasks[i].endDate)
                    }
                    if (globalMax[0] >= 0) {
                      if (globalMax[2]) {
                        substruct =  biggestEnd - Date.parse(this.sprints[globalMax[0]].tasks[globalMax[1]].realEnd)
                      } else {
                        substruct =  biggestEnd - Date.parse(this.sprints[globalMax[0]].tasks[globalMax[1]].endDate)
                      }
                    } else {
                      substruct = biggestEnd - Date.parse(this.sprints[sprint].tasks[j].endDate) 
                    }
                    if ( substruct > 0) {
                        globalMax[0] = sprint
                        globalMax[1] = j
                        globalMax[2] = realEndFlag
                        i = j-1
                        break
                    }
                  }
                }
              }
              if (globalMax[2]) {
                this.dayInfo['max'] =  new Date(this.sprints[globalMax[0]].tasks[globalMax[1]].realEnd)
              } else {
                this.dayInfo['max'] =  new Date(this.sprints[globalMax[0]].tasks[globalMax[1]].endDate)
              }

              this.dayInfo['months'] = []
              this.dayInfo["days"] = {}
              let buff = this.dayInfo.min
              let subbuf = buff.getMonth()
              let monthCount = 0
              let daysCount = 0
              this.dayInfo.days[this.monthNames[buff.getMonth()]] = []
              this.dayInfo.days[this.monthNames[buff.getMonth()]][daysCount] = buff.getDate()
              this.dayInfo.months[0] = this.monthNames[buff.getMonth()] + ' ' + buff.getFullYear()
        
              while (this.dayInfo.max - buff > 0) {
                subbuf = buff.getMonth()                
                buff.setDate(buff.getDate() + 1)
                daysCount++
                if (buff.getMonth() !== subbuf) {
                  daysCount= 0
                  monthCount++
                  this.dayInfo.days[this.monthNames[buff.getMonth()]] = []
                  this.dayInfo.months[monthCount] = this.monthNames[buff.getMonth()] + ' ' + buff.getFullYear()
                }
                this.dayInfo.days[this.monthNames[buff.getMonth()]][daysCount] = buff.getDate()
              }
            },
            lounchGant() {
              if (this.drawContent) {
                this.drawContent = ''
                document.getElementById('diagramm').removeChild(document.getElementById('diagramm').childNodes[1])
              }
            },
            convert(date){
              let p = new Date(date)
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../assets/common/styles.scss";

.content-board{
    background: white;
    overflow: scroll;
}
  #diagramm-menu{
      position: fixed;
      margin-top: -3%;
      margin-left: -3%;
      display: flex;
      >div{
        display: flex;
        align-items: center;
        color: #808080;
        font-size: 11pt;
        cursor: pointer;
        span{
          margin-right: 25px;
          font-family: $font;
          color: #c4ccce;
          transition: .2s;
        }
      }
      div.active svg,
      >div:hover svg{
          fill:$highlited-color;
          +span{
              color: $highlited-color;
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
  #diagramm{
      display: flex;
      height: 100%;
      margin-top: 40px;

      .day{
        display: inline-block;
        padding: 5px;
        width: 25px;
        text-align: center;
        margin-left: -1px;
        border: 1px solid rgb(243, 243, 243);
        margin-bottom: -1px;
      }
      .dayNum{
        font-weight: 500;
        font-size: 10pt;
        border: 1px solid rgb(231, 231, 231);
        margin-bottom: 0px;
      }
      .task{
        display: inline-block;
        width: 300px;
        text-align: right;
        padding-right: 10px;
      }
      .row{
        display: flex;
      }
      .sprintname{
        font-family: $hfont;
        font-weight: 600;
        padding-top: 15px;
      }
      .taskname{
        font-family: $font;
        font-size: 10pt;
        color: rgb(99, 99, 99);
        padding-top:10px;
      }
      .month{
        padding: 15px;
        border: 1px solid rgb(231, 231, 231);
        margin-left: -1px;
        margin-bottom: -1px;
      }
      .filled{
        background: rgb(209, 246, 255);
        border: 1px solid #abe4ff;
        margin-bottom: 1px;
      }
      .filled+.filled{
        border-top: 1px solid #abe4ff;
        border-bottom: 1px solid #abe4ff;
        border-left: 1px solid rgb(209, 246, 255);
        border-right: 1px solid rgb(209, 246, 255);
      }
  }
</style>