<script setup>
import TheAside from '@/components/TheAside.vue';
import { useUserStore } from '@/stores/userStore.js';

const userStore = useUserStore();

const userIdTest = 6;
</script>

<template>
    <div class="profile">
        <TheAside />
        <div class="content">
            <Suspense>
                <template #default>
                    <router-view />
                </template>
                <template #fallback> Загрузка... </template>
            </Suspense>
        </div>
    </div>
</template>

<style scoped></style>
