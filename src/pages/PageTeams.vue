<template>
    <div class="teams">
        <div class="content-header">
            <h3>Команды</h3>
            <div class="button-group">
                <a
                    href=""
                    class="create-button button button__block button__filled button__medium disabled"
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
                        ></path>
                    </svg>
                    Создать команду</a
                >

                <router-link
                    :to="{ name: 'teamedit' }"
                    class="edit-profile button button__block button__filled button__medium"
                >
                    Настройки профиля</router-link
                >
            </div>
        </div>

        <div class="teams-layout">
            <div class="teams-block">
                <ul class="tab-nav nav nav-pills body-text-medium">
                    <li class="nav-item">
                        <a
                            class="nav-link active"
                            href="#tab_1"
                            data-toggle="tab"
                            >Все команды</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tab_2" data-toggle="tab"
                            >Приглашения
                        </a>
                    </li>
                </ul>

                <div class="tab-content">
                    <div id="tab_1" class="tab-pane active">
                        <h5>Все команды</h5>

                        <div class="filter">
                            <AppInput
                                title="Поиск команды"
                                name="search-team"
                            />
                            <div class="form-group">
                                <label
                                    for="tasks-filter-selectized"
                                    class="body-text-large"
                                    >Фильтр по задачам</label
                                >
                                <select
                                    id="tasks-filter"
                                    name="tasks-filter"
                                    class="form-control list-control selectized"
                                    placeholder="Задача"
                                    tabindex="-1"
                                    style="display: none"
                                >
                                    <option value="#">Все задачи</option>
                                </select>
                                <div
                                    class="selectize-control form-control list-control single"
                                >
                                    <div
                                        class="selectize-input items full has-options has-items"
                                    >
                                        <div class="item" data-value="#">
                                            Все задачи
                                        </div>
                                        <input
                                            id="tasks-filter-selectized"
                                            type="text"
                                            autocomplete="new-password"
                                            autofill="no"
                                            tabindex=""
                                            style="width: 4px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br />

                        <div class="teams-list">
                            <TeamsItem
                                v-for="team in teamStore.teams"
                                v-bind="team"
                            />
                        </div>
                    </div>
                    <div id="tab_2" class="tab-pane">
                        <h5>Приглашения</h5>
                        <div class="invitations-list">
                            <p class="body-text-large mt-5">
                                Нет новых приглашений
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TeamsItem from '@/components/TeamsItem.vue';
import AppInput from '@/components/AppInput.vue';
import { useTeamStore } from '@/stores/teamStore.js';

const teamStore = useTeamStore();

teamStore.fetchTeam();
</script>

<style scoped>
.button-group {
    display: flex;
}
.button-group a:not(:last-child) {
    margin-right: 10px;
}
</style>
