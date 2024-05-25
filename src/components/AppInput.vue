<script setup>
const model = defineModel();
const props = defineProps({
    title: { type: String, default: '' },
    type: { type: String, default: 'text' },
    name: { type: String, default: 'name' },
    placeholder: { type: String, default: '' },
    maxlength: { type: Number, default: 32 },
});
</script>

<template>
    <div class="form-group">
        <label v-if="title" :for="name" class="body-text-large">{{
            title
        }}</label>
        <input
            :id="name"
            v-model="model"
            :type="type"
            :placeholder="placeholder"
            :name="name"
            class="form-control"
            :maxlength="maxlength"
        />
    </div>
</template>
