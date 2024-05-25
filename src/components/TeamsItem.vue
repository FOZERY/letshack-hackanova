<template>
    <div class="teams-item" data-name="{SVET}" data-id="">
        <a
            href="https://xn--80ajqb5afw.xn--80aa3anexr8c.xn--p1acf/personal/team/profile/2125506581"
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
                            <img
                                src="https://xn--80ajqb5afw.xn--80aa3anexr8c.xn--p1acf/storage/images/avatars/2517912543_1715331765.jpg"
                            />
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
        </a>
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
