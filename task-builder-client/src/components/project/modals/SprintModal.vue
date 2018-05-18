<template>
    <div id="newWindow">
        <div class="modal">
            <h1>Создание нового спринта</h1>
            <input id="name" type="text" placeholder="Введите название спринта"/>
            <label for="beginDate">Дата начала</label><input id="beginDate" type="date"/>
            <label for="endDate">Дата окончания</label><input id="endDate" type="date"/>
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