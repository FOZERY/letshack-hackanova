<script setup>
import SearchStatus from '@/components/SearchStatus.vue';
import TagButton from '@/components/TagButton.vue';

const props = defineProps({
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
    <div class="teams-item" data-name="{SVET}" data-id="">
        <div class="team-link team-wrapper">
            <div class="team-title flex gap-5 items-center">
                <div class="user w-16 h-16">
                    <img src="@/assets/user-default.png" />
                </div>
                <div class="title-text-light">
                    {{ `${last_name} ${first_name}` }}
                </div>
            </div>
            <div class="team-task w-75">
                <div class="title body-text-small">Специализация</div>
                <div class="flex gap-5 flex-wrap">
                    <TagButton
                        v-for="tag in tags"
                        :key="tag.id"
                        class="py-2 px-6"
                        v-bind="tag"
                    />
                </div>
            </div>
            <div class="title body-text-small">
                <SearchStatus v-if="hackathon_search"
                    >Ищет команду</SearchStatus
                >
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile .content .teams-item .team-wrapper {
    grid-template-columns: 30% 40% 30%;
}
</style>
