<template>
    <div id="newWindow">
        <div class="modal">
            <h1>Создание новой группы</h1>
            <input id="name" type="text" placeholder="Введите название группы"/>
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
@import "../../../assets/common/styles.scss";

</style>