<template>
    <div class="team-widget-card">
        <h6>{{ title }}</h6>
        <div class="body-text-medium">
            {{ content }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type: String, default: '' },
    content: { type: String, default: '' },
});
</script>
