<template>
    <div id="newWindow">
        <new-user-window v-if="newUserFlag"  @closeWindow="newUserFlag = false" :sprint="sprint"></new-user-window>
        <div class="modal">
            <h1>{{'Создание нового таска в ' + sprint}}</h1>
            <input id="name" type="text" placeholder="Введите название Таска"/>
            <label for="beginDate">Дата начала</label><input id="beginDate" type="date"/>
            <label for="endDate">Дата окончания</label><input id="endDate" type="date"/>
            <textarea id="desc" type="text" maxlength="500" placeholder="Введите описание таска"></textarea>
            <div class="users-wrap">
                <div v-for="(user,key) in taskUsers" :key="key">
                    <div>{{user.name}}</div>
                    <button>Открепить от таска</button>
                </div>
            </div>
            <button @click="newUserFlag = true">Добавить пользователя</button>
            <button>Создать Таск</button>
            <button @click="$emit('closeWindow')">Отмена</button>
        </div>
    </div>
</template>

<script>
import NewUserWindow from '@/components/project/modals/UserModal'
    export default {
      data() {
          return {
              taskUsers: [
                  {
                      id:1,
                      name: 'Пользователь'
                  }
              ],
              newUserFlag: false
          }
      },
      props: ['sprint'],
      components: {
        NewUserWindow
      }
    }
</script>

<style scoped lang="scss">
@import "../../../assets/common/styles.scss";

#newWindow{
    z-index: 30;
}
.users-wrap{
    margin-bottom: 25px;
    div{
        display: flex;
        button{
            margin-left: auto;
            background: none;
            color: $highlited-color;
            border: 1px solid $highlited-color;
        }
        button:hover{
            background: rgb(231, 244, 255);
        }
    }
}
</style>