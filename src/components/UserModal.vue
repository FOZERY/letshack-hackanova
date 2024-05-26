<script setup>
import SearchStatus from '@/components/SearchStatus.vue';
import TagButton from '@/components/TagButton.vue';

defineProps({
    id: { type: Number, default: null },
    first_name: { type: String, default: '' },
    last_name: { type: String, default: '' },
    status_team: { type: String, default: '' },
    tags: { type: Array, default: [] },
    telegram: { type: String, default: '' },
    vk: { type: String, default: '' },
    github: { type: String, default: '' },
    about_me: { type: String, default: '' },
    experience: { type: String, default: '' },
    hackathon_search: { type: Boolean, default: false },
});
</script>

<template>
    <div class="user-profile-block">
        <div id="card-user-avatar" class="user-icon">
            <img src="@/assets/user-default.png" />
        </div>
        <div class="user-info w-full">
            <div
                id="card-user-name"
                class="user-name body-text-large flex justify-content-between gap-5 items-center"
            >
                {{ `${first_name} ${last_name}` }}
                <SearchStatus v-if="hackathon_search"
                    >Ищет команду</SearchStatus
                >
            </div>
            <div id="card-user-about" class="user-name">
                <div class="mb-3 body-text-medium font-weight-bolder">
                    Обо мне
                </div>
                <div class="body-text-regular">{{ about_me }}</div>
            </div>
            <div id="card-user-about" class="user-name">
                <div class="mb-3 body-text-medium font-weight-bolder">
                    Специализации
                </div>
                <div class="flex gap-5 flex-wrap">
                    <TagButton
                        v-for="tag in tags"
                        :key="tag.id"
                        class="py-2 px-6"
                        v-bind="tag"
                    />
                </div>
            </div>
            <div id="card-user-about " class="user-name">
                <div class="mb-3 body-text-medium font-weight-bolder">
                    Контакты
                </div>
                <div class="body-text-regular mb-2">
                    <span>Telegram: </span>
                    <a class="" href="#">{{ telegram }}</a>
                </div>
                <div class="body-text-regular mb-2">
                    <span>VK: </span>
                    <a class="" href="#">{{ vk }}</a>
                </div>
                <div class="body-text-regular mb-2">
                    <span>GitHub: </span>
                    <a class="" href="#">{{ github }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
