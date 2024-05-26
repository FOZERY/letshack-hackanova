<template>
    <div class="form-group">
        <label for="description" class="body-text-large">{{ title }}</label>
        <div class="input-group">
            <textarea
                type="text"
                :name="name"
                class="form-control"
                :id="name"
                :placeholder="placeholder"
                maxlength="256"
                data-required="1"
                v-model="model"
            ></textarea>
            <div class="textarea-counter body-text-small">
                <span>0</span>/256
            </div>
        </div>
    </div>
</template>

<script setup>
const model = defineModel();
const props = defineProps({
    title: { type: String },
    name: { type: String, default: 'name' },
    placeholder: { type: String },
});
</script>
