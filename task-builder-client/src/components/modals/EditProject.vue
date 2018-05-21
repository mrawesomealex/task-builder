<template>
    <div id="newWindow">
        <div class="modal">
            <h1>{{'Изменить данные проекта ' + project.name}}</h1>
            <input id="name" type="text" placeholder="Введите название проекта" v-model="name"/>
            <textarea id="desc" type="text" maxlength="500" placeholder="Введите описание проекта" v-model="desc"></textarea>
            <button @click="Edit">Сохранить изменения</button>
            <button @click="$emit('closeWindow')">Отмена</button>
        </div>
    </div>
</template>

<script>
import Project from '@/services/ProjectService'
    export default {
        data() {
            return {
                name: '',
                desc: ''
            }
        },
        props: ['project'],
        created () {
            this.name = this.project.name
            this.desc = this.project.desc
        },
        methods: {
            Edit () {
                Project.edit({
                    id: this.project.id,
                    name: this.name,
                    desc: this.desc
                }).then((res) => {
                    if (res.data.error) {
                      console.error(res.data.error)
                    } else {
                      console.log(res.data)
                      this.$emit('editComplete')
                    }
                  }
                )
            }
        }
    }
</script>

<style scoped lang="scss">
@import "../../assets/common/styles.scss";
</style>