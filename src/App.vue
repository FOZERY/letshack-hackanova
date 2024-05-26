<script setup>
import TheAside from '@/components/TheAside.vue';
</script>

<template>
    <div class="profile">
        <TheAside />
        <div class="content">
            <Suspense>
                <router-view />
            </Suspense>
        </div>
    </div>
</template>

<style scoped></style>
