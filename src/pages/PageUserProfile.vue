<script setup>
import TagButton from '@/components/TagButton.vue';

import { useUserStore } from '@/stores/userStore.js';
import SearchStatus from '@/components/SearchStatus.vue';

const userStore = useUserStore();
const userIdTest = 1;
await userStore.fetchUser(userIdTest);
</script>

<template>
    <div class="account__user">
        <div class="content-header">
            <h3>Мой профиль</h3>
            <router-link
                :to="{ name: 'profileEdit' }"
                class="button button__block button__filled button__medium"
                >Редактировать профиль
            </router-link>
        </div>
        <div class="account-layout">
            <div class="account-wrapper">
                <div>
                    <div class="account-icon">
                        <img class="bg-gray-200" src="" alt="" />
                    </div>
                </div>
                <div class="account-content">
                    <div class="flex items-center gap-10">
                        <h5>
                            {{
                                `${userStore.user.first_name} ${userStore.user.last_name} `
                            }}
                        </h5>
                        <SearchStatus v-if="userStore.user.hackathon_search"
                            >Ищу команду</SearchStatus
                        >
                    </div>
                    <div class="account-about body-text-medium mb-4">
                        Город!
                    </div>

                    <hr />

                    <div class="info-list body-text-medium">
                        <div class="info-item mt-4">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                                    stroke="#111827"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M22 6L12 13L2 6"
                                    stroke="#111827"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                            {{ userStore.user.email }}
                        </div>
                        <div class="info-item">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.0001 16.92V19.92C22.0012 20.1985 21.9441 20.4742 21.8326 20.7293C21.721 20.9845 21.5574 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.377 21.9119 20.0974 21.9451 19.8201 21.92C16.7429 21.5856 13.7871 20.5341 11.1901 18.85C8.77388 17.3147 6.72539 15.2662 5.19006 12.85C3.50003 10.2412 2.4483 7.271 2.12006 4.18C2.09507 3.90347 2.12793 3.62476 2.21656 3.36163C2.30518 3.09849 2.44763 2.85669 2.63482 2.65162C2.82202 2.44655 3.04986 2.28271 3.30385 2.17052C3.55783 2.05834 3.8324 2.00026 4.11006 2H7.11006C7.59536 1.99523 8.06585 2.16708 8.43382 2.48353C8.80179 2.79999 9.04213 3.23945 9.11005 3.72C9.23668 4.68007 9.47151 5.62273 9.81006 6.53C9.9446 6.88793 9.97372 7.27692 9.89396 7.65088C9.81421 8.02485 9.62892 8.36811 9.36005 8.64L8.09006 9.91C9.51361 12.4135 11.5865 14.4864 14.0901 15.91L15.3601 14.64C15.6319 14.3711 15.9752 14.1859 16.3492 14.1061C16.7231 14.0263 17.1121 14.0555 17.4701 14.19C18.3773 14.5286 19.32 14.7634 20.2801 14.89C20.7658 14.9585 21.2095 15.2032 21.5266 15.5775C21.8437 15.9518 22.0122 16.4296 22.0001 16.92Z"
                                    stroke="#25282B"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                            {{ userStore.user.phone }}
                        </div>
                        <div class="info-item">
                            <span>Telegram:</span>
                            <a class="" href="#">{{
                                userStore.user.telegram
                            }}</a>
                        </div>
                        <div class="info-item">
                            <span>VK:</span>
                            <a class="" href="#">{{ userStore.user.vk }}</a>
                        </div>
                        <div class="info-item">
                            <span>GitHub:</span>
                            <a class="" href="#">{{ userStore.user.github }}</a>
                        </div>
                    </div>

                    <hr />
                    <p class="body-text-medium">Специализация</p>
                    <div class="flex gap-5">
                        <TagButton
                            v-for="tag in userStore.user.tags"
                            :key="tag.id"
                            class="select-none"
                            v-bind="tag"
                        />
                    </div>

                    <hr />
                    <p class="body-text-medium mt-4">
                        Опыт участия в хакатонах
                    </p>
                    <div class="account-about body-text-medium mb-4">
                        {{ userStore.user.experience }}
                    </div>

                    <hr />
                    <p class="body-text-medium mt-4">Образование</p>
                    <div class="account-about body-text-medium mb-4">
                        {{ userStore.user.education }}
                    </div>

                    <hr />
                    <p class="body-text-medium mt-4">О себе</p>
                    <div class="account-about body-text-medium mb-4">
                        {{ userStore.user.about_me }}
                    </div>

                    <!--         Наш код           -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.search_team {
    padding: 12px 11px;
    font-size: 18px;
}
</style>
