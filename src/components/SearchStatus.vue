<script setup></script>

<template>
    <div
        class="search_status flex justify-center items-center text-nowrap text-center max-w-56 border rounded-2xl body-text-medium py-2 px-3 select-none"
    >
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
