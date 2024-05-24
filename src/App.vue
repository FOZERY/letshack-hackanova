<script setup>
import TheAside from '@/components/TheAside.vue';
</script>

<template>
    <div class="profile">
        <TheAside />
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<style scoped></style>
