<template>
    <Layout>
        <SelectComponents
            class="select-component"
            :deals="deals"
        ></SelectComponents>
        <button class="btn" @click="handleChange">Создать</button>
    </Layout>
</template>

<script lang="ts">
import SelectComponents from "./components/selectComponents.vue";
import Layout from "./layouts/default.vue";

export default {
    methods: {
        handleChange() {
            console.log("create");
        },
    },
    components: { SelectComponents, Layout },
    data() {
        return {
            deals: [
                { id: 1, name: "Сделка" },
                { id: 2, name: "Контакт" },
                { id: 3, name: "Компания" },
            ],
        };
    },
};
</script>

<style scoped></style>
