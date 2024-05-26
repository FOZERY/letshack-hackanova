<script setup>
import { storeToRefs } from 'pinia';
import AppInput from '@/components/AppInput.vue';
import Textarea from '@/components/Textarea.vue';
import { useTeamStore } from '@/stores/teamStore.js';

const teamStore = useTeamStore();

teamStore.fetchTeam();
const { getTeamById } = storeToRefs(teamStore);
const team = teamStore.fetchTeamById(2);
</script>

<template>
    <div class="teams">
        <div class="content-header">
            <h3>Настройки команды</h3>
            <a
                href="https://xn--80ajqb5afw.xn--80aa3anexr8c.xn--p1acf/personal/team/profile"
                class="go-back-link button button__block button__light button__medium"
            >
                <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9 14.5L4 9.5L9 4.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M20 20.5V13.5C20 12.4391 19.5786 11.4217 18.8284 10.6716C18.0783 9.92143 17.0609 9.5 16 9.5H4"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
                Вернуться к команде</a
            >
        </div>
        <div class="teams-layout">
            <form
                id="team-form"
                name="team-form"
                class="create-team-form novalidate"
                action="https://xn--80ajqb5afw.xn--80aa3anexr8c.xn--p1acf/personal/team/update"
                method="POST"
                autocomplete="off"
                enctype="multipart/form-data"
            >
                <AppInput
                    type="hidden"
                    name="_token"
                    value="ZeELS8WvfzpQZOPQXDbesYokCDvHgpRJ0VIxWEk1"
                />
                <div class="form-inner">
                    <div class="column">
                        <h5>Основная информация</h5>
                        <div class="form-block">
                            <AppInput
                                v-model="getTeamById(2).name"
                                title="Название команды"
                                name="teamName"
                            />
                            <AppInput
                                v-model="getTeamById(2).link"
                                title="Ссылка на чат команды"
                                name="link"
                            />
                            <Textarea
                                v-model="getTeamById(2).description"
                                title="Описание команды*"
                                name="commandDescription"
                                placeholder="Описание команды"
                            />
                            <Textarea
                                v-model="getTeamById(2).requestMessege"
                                title="В поиске"
                                name="requestMessege"
                                placeholder="Поиск команды"
                            />
                        </div>
                    </div>
                    <div class="column">
                        <h5>Логотип команды</h5>
                        <div class="form-block">
                            <div class="account-photo">
                                <div class="preview">
                                    <img
                                        src="https://xn--80ajqb5afw.xn--80aa3anexr8c.xn--p1acf/storage/images/logo/2088258667_1716476751.png"
                                        alt="ХакаНова"
                                    />
                                </div>
                                <input
                                    id="logo-uploaded"
                                    type="hidden"
                                    name="logo-uploaded"
                                    value="1"
                                />

                                <div class="action">
                                    <div
                                        class="custom-upload custom-upload-simple"
                                    >
                                        <label>
                                            <input
                                                id="logo"
                                                type="file"
                                                class="custom-file-input"
                                                name="logo"
                                                accept="image/jpeg"
                                            />
                                            <div
                                                class="custom-upload-button body-text-medium"
                                            >
                                                Загрузить логотип
                                            </div>
                                        </label>
                                        <div
                                            class="error-message body-text-small"
                                        ></div>
                                    </div>
                                    <div class="note body-text-small">
                                        Не больше 5 Мб
                                    </div>
                                    <div class="note body-text-small">
                                        Допустимые форматы файлов - .png, .jpg
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-footer">
                    <router-link
                        :to="{ name: 'teamprofile' }"
                        class="submit-button save-team button button__block button__filled button__large"
                    >
                        Сохранить изменения</router-link
                    >
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped></style>
