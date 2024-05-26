<script setup>
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import TeamWidgetCard from '@/components/TeamWidgetCard.vue';
import { useTeamStore } from '@/stores/teamStore.js';

const teamStore = useTeamStore();
const { getTeamById } = storeToRefs(teamStore);
const { id } = useRoute().params;
teamStore.fetchTeam();
</script>

<template>
    <div class="content teams" style="padding-top: 64px">
        <div class="content-header">
            <h3>Команда {{ getTeamById(+id).name }}</h3>
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
                            {{ getTeamById(+id).name }}
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
                        :content="getTeamById(+id).task"
                        title="Задача"
                    />
                    <TeamWidgetCard
                        :content="getTeamById(+id).description"
                        title="Описание команды"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
