<script setup>
import AppAside from '@/components/AppAside.vue';
import Header from '@/components/Header.vue';
</script>

<template>
    <div class="profile">
        <div class="wrapper">
            <Header />
            <AppAside />
            <!-- component -->
            <RouterView />
        </div>
    </div>
</template>

<style scoped></style>
