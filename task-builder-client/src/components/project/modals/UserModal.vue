<template>
    <div @click.self="$emit('closeWindow')" id="newWindow">
        <div class="modal">
            <h1>Добавление пользователя</h1>
            <input id="name" type="text" placeholder="Введите имя пользователя, которого необходимо добавить в группу"/>
            <div v-if="!results">Пользователя с таким именем не существует, либо он уже добавлен в данную группу</div>
            <div class="user-list-wrap">
                <div class="user-res" v-for="(user,key) in results" :key="key">
                    <div>{{user.name}}</div>
                    <button @click="add(user.id)">Добавить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
          return {
              results: [
                  {
                    id: 5,
                    name: 'Кто-то'
                  },
                  {
                    id: 5,
                    name: 'Кто-то'
                  },
                  {
                    id: 5,
                    name: 'Кто-то'
                  }
              ]
          }
      },
      methods: {
        add (num) {
          if (this.sprint) {
              console.log('Добавляю к таску')
          } else {
              console.log('Добавляю в группу')
          }
        }
      },
      props: ['sprint']
    }
</script>

<style scoped lang="scss">
@import "../../../assets/common/styles.scss";
#newWindow{
    height: 100%;
}
.user-list-wrap{
    height: 200px;
    width: 100%;
    overflow-y: scroll;
}
.user-res{
    display: flex;
    align-items: center;
    padding: 10px 0px;
    border-bottom: 1px solid rgb(241, 241, 241);
    button{
      margin-left: auto;
    }
}
</style>