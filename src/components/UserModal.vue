<script setup>
import SearchStatus from '@/components/SearchStatus.vue';

defineProps({
    id: { type: Number, default: null },
    inviteTime: { type: Number, default: null },
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    modalTitle: { type: String, default: '' },
    inSearch: { type: Boolean, default: true },
});
</script>

<template>
    <div class="user-profile-block">
        <div id="card-user-avatar" class="user-icon">
            <img src="@/assets/user-default.png" />
        </div>
        <div class="user-info">
            <div
                id="card-user-name"
                class="user-name body-text-large flex gap-5 items-center"
            >
                {{ `${first_name} ${last_name}` }}
                <SearchStatus
                    v-if="inSearch"
                    class="flex justify-center items-center text-nowrap text-center"
                    >Ищет команду</SearchStatus
                >
            </div>
            <div id="card-user-about" class="user-name body-text-regular">
                Information Security specialist (4/5.5)
            </div>
            <div id="card-user-about" class="user-name body-text-regular">
                Information Security specialist (4/5.5)
            </div>
        </div>
    </div>
</template>

<style scoped></style>
