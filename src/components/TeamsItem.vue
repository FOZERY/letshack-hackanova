<template>
    <div class="teams-item" data-name="{SVET}" data-id="">
        <router-link
            :to="`/personal/teams/profile/${id}`"
            class="team-link team-wrapper"
        >
            <div class="team-title">
                <div class="name title-text-light">{{ name }}</div>
                <div class="users">
                    <div class="users-list">
                        <div class="user">
                            <img src="@/assets/user-default.png" />
                        </div>
                        <div class="user">
                            <img src="@/assets/user-default.png" />
                        </div>
                        <div class="user">
                            <img src="@/assets/user-default.png" />
                        </div>
                        <div class="user">
                            <img src="@/assets/user-default.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="team-task">
                <div class="title body-text-small">Задача</div>
                <div class="text body-text-medium">{{ task }}</div>
            </div>
            <div class="title body-text-small">
                {{ status === 'search' ? 'В поиске' : 'полная' }}
            </div>
        </router-link>
    </div>
</template>
<script setup>
const props = defineProps({
    name: { type: String },
    task: { type: String },
    requestMessage: { type: String },
    commandDescription: { type: String },
    status: { type: String },
    id: { type: Number },
});
</script>

<style scoped>
.profile .content .teams-item .team-wrapper {
    grid-template-columns: 30% 40% 30%;
}
</style>
