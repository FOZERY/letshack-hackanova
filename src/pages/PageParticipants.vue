<script setup>
import AppInput from '@/components/AppInput.vue';
import { useParticipantsStore } from '@/stores/participantsStore.js';
import ParticipantsItem from '@/components/ParticipantsItem.vue';
import { useTagStore } from '@/stores/tagStore.js';
import { reactive, ref, watch } from 'vue';
import AppModal from '@/components/AppModal.vue';
import UserModal from '@/components/UserModal.vue';

const participantsStore = useParticipantsStore();
const tagStore = useTagStore();

const tagsFilter = ref('');
const userSearch = ref('');

const modalIsOpen = ref(false);

let userData = reactive({});

const closeModal = () => {
    modalIsOpen.value = false;
};

const setUserData = (user) => {
    userData = { ...user };
};

const showModal = (user) => {
    setUserData(user);
    console.log(userData);
    modalIsOpen.value = true;
};

await participantsStore.getAllParticipants();
await tagStore.fetchTags();

watch(tagsFilter, async () => {
    await (tagsFilter.value === ''
        ? participantsStore.getAllParticipants()
        : participantsStore.getParticipantsByTag(tagsFilter.value));
});
</script>

<template>
    <AppModal v-if="modalIsOpen" @close-modal="closeModal">
        <template #modal-header>Профиль участника</template>
        <template #modal-body>
            <UserModal v-bind="userData" />
        </template>
    </AppModal>
    <div class="teams">
        <div class="content-header">
            <h3>Участники</h3>
            <div class="button-group">
                <router-link
                    :to="{ name: 'teamprofile' }"
                    class="edit-profile button button__block button__filled button__medium"
                >
                    Настройки профиля
                </router-link>
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
                            >Все участники</a
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
                        <h5>Все участники</h5>

                        <div class="filter">
                            <AppInput
                                v-model="userSearch"
                                title="Поиск участников"
                                name="search-team"
                            />
                            <div class="form-group">
                                <label
                                    for="tasks-filter-selectized"
                                    class="body-text-large"
                                    >Фильтр по специализации</label
                                >
                                <select
                                    id="tasks-filter"
                                    name="tasks-filter"
                                    class="form-control list-control selectized"
                                    placeholder="Задача"
                                    tabindex="-1"
                                    style="display: none"
                                ></select>
                                <div
                                    class="selectize-control form-control list-control single"
                                >
                                    <select
                                        v-model="tagsFilter"
                                        class="selectize-input items full has-options has-items"
                                    >
                                        <option value=""></option>
                                        <option
                                            v-for="tag in tagStore.tags"
                                            :key="tag"
                                            :value="tag.name"
                                        >
                                            {{ tag.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <br />

                        <div class="teams-list">
                            <ParticipantsItem
                                v-for="participant in participantsStore.participants"
                                :key="participant.id"
                                v-bind="participant"
                                @click="showModal(participant)"
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

<style scoped>
.button-group {
    display: flex;
}

.button-group a:not(:last-child) {
    margin-right: 10px;
}
</style>
