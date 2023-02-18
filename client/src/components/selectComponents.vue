<template>
        <select>
            <option selected="selected">Выберите пункт</option>
            <option value="wve" v-for="value in deals" key="{{value.id}}">{{ value.name }}</option>
        </select>
</template>

<script>
export default {
    props: {
        deals: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
