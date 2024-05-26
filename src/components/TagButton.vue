<script setup>
import { ref } from 'vue';

defineEmits(['deleteTagFromUser']);

const props = defineProps({
    id: { type: Number, default: null },
    name: { type: String, default: null },
    isAdded: { type: Boolean, default: false },
    canDelete: { type: Boolean, default: true },
});
</script>

<template>
    <div
        class="py-3 px-12 body-text-regular border rounded-pill transition duration-300 relative"
    >
        <svg
            v-if="isAdded"
            class="absolute -top-2.5 -right-2 m w-7 h-7 translate-y-0.5 hover:scale-110 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            @click="
                $emit('deleteTagFromUser', {
                    id: id,
                    name: name,
                    isAdded: isAdded,
                })
            "
        >
            <path
                d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
            ></path>
        </svg>

        <span class="text-nowrap text-center">{{ name }}</span>
    </div>
</template>

<style scoped></style>
