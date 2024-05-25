<template>
    <div class="form-group">
        <label v-if="title" :for="name" class="body-text-large">{{
            title
        }}</label>
        <input
            type="text"
            :name="name"
            class="form-control"
            :id="name"
            v-model="model"
        />
    </div>
</template>

<script setup>
const model = defineModel();
const props = defineProps({
    title: { type: String },
    name: { type: String, default: 'name' },
});
</script>
