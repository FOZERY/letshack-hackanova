<script setup>
import AppButton from '@/components/AppButton.vue';
import TeamWidgetCard from '@/components/TeamWidgetCard.vue';
import TeamPanel from '@/components/TeamPanel.vue';
import { useTeamStore } from '@/stores/teamStore.js';

const teamStore = useTeamStore();

teamStore.fetchTeam();
</script>

<template>
    <div class="teams">
        <div class="content-header">
            <h3>Команда {{ teamStore.team.name }}</h3>
            <a
                href="https://xn--80ajqb5afw.xn--80aa3anexr8c.xn--p1acf/personal/teams"
                class="go-back-link button button__block button__light button__medium"
            >
                Список команд</a
            >
        </div>

        <div class="teams-layout">
            <div class="team-widget">
                <div class="column">
                    <div class="team-widget-card">
                        <div class="logo">
                            <img
                                src="https://xn--80ajqb5afw.xn--80aa3anexr8c.xn--p1acf/storage/images/logo/2088258667_1716476751.png"
                                alt="ХакаНова"
                            />
                        </div>
                        <div class="team-title title-text-small">
                            {{ teamStore.team.name }}
                        </div>
                        <div class="team-date body-text-medium">
                            Дата создания команды: 23.05.2024 18:05
                        </div>
                    </div>

                    <div class="team-widget-card">
                        <h6>Ссылка на чат команды</h6>
                        <div class="team-chat">
                            <button type="button" class="copy-button"></button>
                            <a
                                target="_blank"
                                href="https://t.me/+Y1VdzB0ZP5dmYmZi"
                                class="button button__link button__small"
                                >Ссылка</a
                            >
                        </div>
                    </div>
                </div>
                <div class="column">
                    <TeamWidgetCard
                        :content="teamStore.team.task"
                        title="Задача"
                    />
                    <TeamWidgetCard
                        :content="teamStore.team.commandDescription"
                        title="Описание команды"
                    />
                    <TeamWidgetCard
                        :content="teamStore.team.requestMessege"
                        title="В поиске"
                    />
                    <div class="team-widget-card">
                        <div class="actions">
                            <router-link
                                :to="{ name: 'teamedit' }"
                                class="edit-profile button button__block button__filled button__medium"
                            >
                                Настройки профиля</router-link
                            >
                            >
                            <AppButton
                                class="team-out button button__block button__outline__white button__medium"
                            >
                                Покинуть команду</AppButton
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TeamPanel />
    </div>
</template>

<style scoped>
.tab-pane {
    display: none;
}
.tab-pane.active {
    display: block;
}
</style>
