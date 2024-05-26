<script setup></script>

<template>
    <div class="search_status border rounded-2xl body-text-medium py-2 px-3">
        <slot />
    </div>
</template>

<style scoped>
.search_status {
    color: #1bd767;
    border-color: #1bd767;
    background-color: rgba(27, 215, 103, 0.1);
}
</style>
