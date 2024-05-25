<template>
    <div class="teams-item" data-name="{SVET}" data-id="">
        <router-link
            :to="{ name: 'teamprofile' }"
            class="team-link team-wrapper"
        >
            <div class="team-title">
                <div class="name title-text-light">{{ teamName }}</div>
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
                <div class="title body-text-small">{{ task }}</div>
            </div>
        </router-link>
    </div>
</template>
<script setup>
const props = defineProps({
    teamName: { type: String },
    task: { type: String },
    requestMessege: { type: String },
    commandDescription: { type: String },
    status: { type: String },
});
</script>
