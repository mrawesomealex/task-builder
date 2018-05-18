<template>
    <div id="newWindow">
        <div class="modal">
            <h1>Создание нового проекта</h1>
            <input id="name" type="text" placeholder="Введите название проекта"/>
            <textarea id="desc" type="text" maxlength="500" placeholder="Введите описание проекта"></textarea>
            <button>Создать</button>
            <button @click="$emit('closeWindow')">Отмена</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
@import "../../assets/common/styles.scss";
</style>