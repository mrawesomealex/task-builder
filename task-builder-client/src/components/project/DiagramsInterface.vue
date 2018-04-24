<template>
    <div class="content-board">
        <div id="diagramm-menu">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve" width="20px" height="20px">
                    <g>
                        <path d="M341.333,0H42.667C19.093,0,0,19.093,0,42.667v298.667C0,364.907,19.093,384,42.667,384h298.667    C364.907,384,384,364.907,384,341.333V42.667C384,19.093,364.907,0,341.333,0z M298.667,213.333h-85.333v85.333h-42.667v-85.333    H85.333v-42.667h85.333V85.333h42.667v85.333h85.333V213.333z" />
                    </g>
                </svg>
            </div>
        </div>
        <div id="diagramm"></div>
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
                       startDate: '8.10.2017',
                       endDate: '8.12.2017',
                       realEnd: '8.17.2017',
                     },
                     {
                       startDate: '8.12.2017',
                       endDate: '8.15.2017',
                       realEnd: '8.17.2017'
                     },
                     {
                       startDate: '8.7.2017',
                       endDate: '8.13.2017',
                       realEnd: '8.8.2017'
                     },
                     {
                       startDate: '8.13.2017',
                       endDate: '8.17.2017',
                       realEnd: '8.14.2017'
                     },
                     {
                       startDate: '8.17.2017',
                       endDate: '8.21.2017',
                       realEnd: '8.26.2017'
                     },
                     {
                       startDate: '8.21.2017',
                       endDate: '8.28.2017',
                       realEnd: '8.28.2017'
                     },
                     {
                       startDate: '8.28.2017',
                       endDate: '9.25.2017',
                       realEnd: '9.26.2017'
                     },
                     {
                       startDate: '8.31.2017',
                       endDate: '9.10.2017',
                       realEnd: '9.11.2017'
                     },
                     {
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
                       startDate: '10.08.2017',
                       endDate: '12.08.2017'
                     },
                     {
                       startDate: '12.08.2017',
                       endDate: '15.08.2017'
                     },
                     {
                       startDate: '11.08.2017',
                       endDate: '21.09.2017'
                     },
                     {
                       startDate: '13.08.2017',
                       endDate: '17.08.2017'
                     },
                     {
                       startDate: '17.08.2017',
                       endDate: '21.08.2017'
                     },
                     {
                       startDate: '21.08.2017',
                       endDate: '28.08.2017'
                     },
                     {
                       startDate: '28.08.2017',
                       endDate: '31.08.2017'
                     },
                     {
                       startDate: '31.08.2017',
                       endDate: '10.09.2017'
                     },
                     {
                       startDate: '10.09.2017',
                       endDate: '15.09.2017'
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
               hours: 0
            }
        },
        mounted: function () {
           this.drawContent = SVG('diagramm').size('100%', '100%')
           //vertical
           this.axisV = this.drawContent.group('axis-v')
           this.axisV.line('2%', 0, '2%', '95%').stroke({width: 0.5, color: '#d0d0d0'})
           //horizontal
           this.axisH = this.drawContent.group('axis-h')
           this.axisH.line('2%', '95%', '100%', '95%' ).stroke({width: 0.5, color: '#d0d0d0'})
           
           this.initDiagram(0)
        },
        methods: {
            initDiagram (num) {
              let taskArray = []
              for(let i = 0; i < this.sprints[num].tasks.length; i++) {
                taskArray[i] = {}
                for (const key in this.sprints[num].tasks[i]) {
                  taskArray[i][key] = this.sprints[num].tasks[i][key]
                }
              }
              let stop
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
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../assets/common/styles.scss";

.content-board{
    background: white;
}
  #diagramm-menu{
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
  #diagramm{
      display: flex;
      height: 100%;
  }
</style>