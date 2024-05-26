<script setup>
import { ref } from 'vue';
import UserProfileCard from '@/components/UserProfileCard.vue';
import { useTeamStore } from '@/stores/teamStore.js';

const teamStore = useTeamStore();
const activeTab = ref(1);

defineEmits(['showUserModal']);

teamStore.fetchTeam();
</script>

<template>
    <div class="team-panel">
        <ul class="tab-nav nav nav-pills body-text-medium">
            <li class="nav-item">
                <a
                    class="nav-link"
                    :class="{ active: activeTab === 1 }"
                    href="#"
                    data-toggle="tab"
                    @click="activeTab = 1"
                    >Участники</a
                >
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    :class="{ active: activeTab === 2 }"
                    href="#"
                    data-toggle="tab"
                    @click="activeTab = 2"
                    >Заявки
                </a>
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    :class="{ active: activeTab === 3 }"
                    href="#"
                    data-toggle="tab"
                    @click="activeTab = 3"
                    >Приглашения
                </a>
            </li>
        </ul>

        <div class="tab-content team-content">
            <div
                id="tab_1"
                class="tab-pane"
                :class="{ active: activeTab === 1 }"
            >
                <div class="team-content-header">
                    <h6>Участники</h6>
                    <a
                        class="add-user button button__block button__light button__medium"
                    >
                        <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 5.5V19.5"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M5 12.5H19"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path></svg
                        >Добавить участника</a
                    >
                </div>
                <div class="team-list">
                    <UserProfileCard
                        v-for="user in teamStore.team.participants"
                        v-bind="user"
                        @click="$emit('showUserModal', user)"
                    />
                </div>
            </div>
            <div
                id="tab_2"
                class="tab-pane"
                :class="{ active: activeTab === 2 }"
            >
                <div class="team-content-header">
                    <h6>Заявки</h6>
                </div>
                <div class="team-content-list">
                    <span class="body-text-medium">Нет активных заявок</span>
                </div>
            </div>
        </div>
    </div>
</template>
