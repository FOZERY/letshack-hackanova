<script setup>
import Textarea from '@/components/Textarea.vue';
import AppInput from '@/components/AppInput.vue';
import TagButton from '@/components/TagButton.vue';

import { useTagStore } from '@/stores/tagStore.js';
import { useUserStore } from '@/stores/userStore.js';

import { onMounted, reactive } from 'vue';
import deepClone from 'lodash.clonedeep';

const userStore = useUserStore();
const tagStore = useTagStore();

const addTagToUser = (tag) => {
    tag.isAdded = true;
};

const deleteTagFromUser = (tag) => {
    tag.isAdded = false;
};

userStore.fetchUser();
tagStore.fetchTags();

const userFormData = reactive(deepClone(userStore.user));

onMounted(() => {
    tagStore.tags = tagStore.tags.map((tag) => ({
        ...tag,
        isAdded: userStore.user.tags.some((userTag) => tag.id === userTag.id),
    }));
});
</script>

<template>
    <div class="account__user">
        <div class="content-header">
            <h3>Мой профиль</h3>
            <router-link
                :to="{ name: 'profile' }"
                class="button button__block button__filled button__medium"
                >Просмотр профиля
            </router-link>
        </div>
        <div class="account-layout">
            <form
                id="profile-form"
                name="profile-form"
                class="account-form settings-form"
                action="https://xn--80ajqb5afw.xn--80aa3anexr8c.xn--p1acf/personal/profile/update"
                method="POST"
                autocomplete="off"
                enctype="multipart/form-data"
            >
                <input
                    type="hidden"
                    name="_token"
                    value="wI2kDo2vHdOSKFI2S15hvMHFCNCynAzkDWGy1ZzY"
                />
                <div class="form-row">
                    <div class="column col">
                        <h5>Контактные данные</h5>
                        <div class="form-block">
                            <AppInput
                                v-model="userFormData.surname"
                                :title="'Фамилия*'"
                            />
                            <AppInput
                                v-model="userFormData.name"
                                :title="'Имя*'"
                            />
                            <AppInput
                                v-model="userFormData.phone"
                                :type="'tel'"
                                :title="'Телефон*'"
                                :maxlength="18"
                            />
                            <AppInput
                                v-model="userFormData.birthday"
                                :title="'Дата рождения*'"
                                :maxlength="10"
                            />
                            <AppInput
                                v-model="userFormData.city"
                                :title="'Город*'"
                                :placeholder="'Город'"
                            />
                            <AppInput
                                v-model="userFormData.education"
                                :title="'Ваш уровень'"
                            />
                            <AppInput
                                v-model="userFormData.phone"
                                :title="'Вы находитесь в поиске работы?'"
                            />
                            <Textarea
                                v-model="userFormData.hackExperience"
                                :title="`Опыт участия в хакатонах`"
                            />

                            <hr />
                            <div class="body-text-large">
                                Публичная информация:
                            </div>
                            <div class="body-text-small mt-2 mb-5">
                                Другие участники будут видеть эту информацию о
                                вас и это поможет найти команду. Вы в любой
                                момент можете изменить то, что тут написано.
                            </div>

                            <Textarea
                                v-model="userFormData.education"
                                :title="'Образование'"
                            />
                            <Textarea
                                v-model="userFormData.jobExperience"
                                :title="'Опыт работы'"
                            />
                            <Textarea
                                v-model="userFormData.about"
                                :title="'О себе*'"
                            />
                            <AppInput
                                v-model="userFormData.telegramUrl"
                                v-mask="`t.me/${'X'.repeat(30)}`"
                                :title="'Telegram'"
                                :placeholder="'t.me/'"
                            />
                            <AppInput
                                v-model="userFormData.vkUrl"
                                v-mask="`vk.com/${'X'.repeat(30)}`"
                                :title="'VK'"
                                :placeholder="'vk.com/'"
                            />
                            <AppInput
                                v-model="userFormData.githubUrl"
                                v-mask="`github.com/${'X'.repeat(30)}`"
                                :placeholder="'github.com/'"
                                :title="'GitHub'"
                            />

                            <div class="form-group">
                                <p class="body-text-large">Специализация</p>
                                <div>
                                    <div
                                        v-if="tagStore.getAddedTags.length > 0"
                                    >
                                        <div class="body-text-medium mb-4">
                                            Мои специализации
                                        </div>
                                        <div class="flex flex-wrap gap-5">
                                            <TagButton
                                                v-for="tag in tagStore.getAddedTags"
                                                :key="tag.id"
                                                class="bg-slate-200 select-none"
                                                v-bind="tag"
                                                @delete-tag-from-user="
                                                    deleteTagFromUser(tag)
                                                "
                                            />
                                        </div>
                                    </div>

                                    <div
                                        v-if="
                                            tagStore.getNotAddedTags.length > 0
                                        "
                                        class="mt-8"
                                    >
                                        <div class="body-text-medium mb-4">
                                            Выбрать
                                        </div>
                                        <div class="flex flex-wrap gap-5">
                                            <TagButton
                                                v-for="tag in tagStore.getNotAddedTags"
                                                :key="tag.id"
                                                class="cursor-pointer"
                                                v-bind="tag"
                                                @click="addTagToUser(tag)"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <p class="body-text-large">Ищу команду</p>
                                <div class="flex h-full">
                                    <input
                                        id="radio-two"
                                        v-model="userFormData.requestCommand"
                                        type="checkbox"
                                        class="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-700 checked:bg-rose-500 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column col">
                        <h5>Фотография профиля</h5>
                        <div class="form-block">
                            <div class="account-photo">
                                <div class="preview">
                                    <img
                                        src="https://xn--80ajqb5afw.xn--80aa3anexr8c.xn--p1acf/storage/images/avatars/3980546947_1716481621.jpg"
                                        alt="Дмитрий Тагиев"
                                    />
                                </div>

                                <div class="action">
                                    <div
                                        class="custom-upload custom-upload-simple"
                                    >
                                        <input
                                            type="hidden"
                                            name="required"
                                            value="1"
                                        />

                                        <label>
                                            <input
                                                id="avatar"
                                                type="file"
                                                class="custom-file-input"
                                                name="avatar"
                                                accept=".jpg, .jpeg, .png"
                                            />
                                            <div
                                                class="custom-upload-button body-text-regular"
                                            >
                                                Обновить фотографию
                                            </div>
                                        </label>
                                        <div
                                            class="required-message body-text-small"
                                        >
                                            Загрузка фото обязательна
                                        </div>
                                        <div
                                            class="error-message body-text-small"
                                        ></div>
                                    </div>
                                    <div class="note body-text-small">
                                        Не больше 5 Мб
                                    </div>
                                    <div class="note body-text-small">
                                        Допустимые форматы файлов - .jpg, .png
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="column col">
                        <div class="form-actions">
                            <button
                                type="submit"
                                class="submit-button button button__block button__filled button__large"
                            >
                                <span class="loader"></span>
                                <span>Сохранить изменения</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.search_team {
    padding: 12px 11px;
    font-size: 18px;
}
</style>
