<template>
    <div id="newWindow">
        <div class="modal">
            <h1>Создание нового проекта</h1>
            <input id="name" type="text" placeholder="Введите название проекта" v-model="name"/>
            <textarea id="desc" type="text" maxlength="500" placeholder="Введите описание проекта" v-model="desc"></textarea>
            <button @click="Create">Создать</button>
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
        methods: {
            Create () {
                Project.create({
                  email: localStorage.email,
                  name: this.name,
                  creationDate: new Date(),
                  desc: this.desc
                }).then((res) => {
                    if (!res.data.error){
                        
                        this.$emit('newAdded')
                    } else {
                        console.error(res.data.error)
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
@import "../../assets/common/styles.scss";
</style>