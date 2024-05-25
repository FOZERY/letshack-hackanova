<script setup></script>

<template>
    <div class="account__user">
        <div class="content-header">
            <h3>Мой профиль</h3>
            <a
                href="https://xn--80ajqb5afw.xn--80aa3anexr8c.xn--p1acf/personal/profile"
                class="button button__block button__filled button__medium"
                >Просмотр профиля</a
            >
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
                            <div class="form-group">
                                <label for="surname" class="body-text-large"
                                    >Фамилия*</label
                                >
                                <input
                                    id="surname"
                                    type="text"
                                    name="surname"
                                    class="form-control"
                                    placeholder="Фамилия"
                                    value="Тагиев"
                                    data-required="1"
                                    maxlength="32"
                                />
                            </div>
                            <div class="form-group">
                                <label for="name" class="body-text-large"
                                    >Имя*</label
                                >
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    placeholder="Имя"
                                    value="Дмитрий"
                                    data-required="1"
                                    maxlength="32"
                                />
                            </div>

                            <div class="form-group">
                                <label for="phone" class="body-text-large"
                                    >Телефон*</label
                                >
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    class="form-control"
                                    placeholder="+7 (___) ___-__-__"
                                    value="+7 (904) 080-64-56"
                                    data-required="1"
                                    maxlength="18"
                                />
                            </div>

                            <div class="form-group">
                                <label for="birthdate" class="body-text-large"
                                    >Дата рождения*</label
                                >
                                <input
                                    id="birthdate"
                                    type="text"
                                    name="birthdate"
                                    class="form-control"
                                    data-value="09.02.2004 00:00"
                                    data-required="1"
                                    placeholder="00.00.0000"
                                    maxlength="10"
                                />
                            </div>

                            <div class="form-group">
                                <label for="city" class="body-text-large"
                                    >Город*</label
                                >
                                <input
                                    id="city"
                                    type="text"
                                    name="city"
                                    class="form-control"
                                    placeholder="Город"
                                    value="Белгород"
                                    data-required="1"
                                    maxlength="32"
                                />
                            </div>

                            <div class="form-group">
                                <label for="level" class="body-text-large"
                                    >Ваш уровень</label
                                >
                                <select
                                    id="level"
                                    name="level"
                                    class="form-control"
                                >
                                    <option value="">Выберите уровень</option>
                                    <option value="Студент" selected="">
                                        Студент
                                    </option>

                                    <option value="Junior">Junior</option>

                                    <option value="Middle">Middle</option>

                                    <option value="Senior">Senior</option>

                                    <option value="Lead">Lead</option>

                                    <option value="Trainee">Trainee</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="job-search" class="body-text-large"
                                    >Вы находитесь в поиске работы?</label
                                >
                                <select
                                    id="job-search"
                                    name="job-search"
                                    class="form-control"
                                >
                                    <option value="Нет" selected="">Нет</option>
                                    <option value="Да">Да</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label
                                    for="experience-hack"
                                    class="body-text-large"
                                    >Опыт участия<br />в хакатонах<br />&nbsp;<br
                                /></label>
                                <div class="input-group">
                                    <textarea
                                        id="experience-hack"
                                        type="text"
                                        name="experience-hack"
                                        class="form-control"
                                        placeholder="Расскажите о Вашем опыте участия в других хакатонах"
                                        maxlength="256"
                                    >
Нет опыта участия в хакатонах</textarea
                                    >
                                    <div
                                        class="textarea-counter body-text-small"
                                    >
                                        <span>0</span>/256
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div class="body-text-large">
                                Публичная информация:
                            </div>
                            <div class="body-text-small mt-2 mb-5">
                                Другие участники будут видеть эту информацию о
                                вас и это поможет найти команду. Вы в любой
                                момент можете изменить то, что тут написано.
                            </div>

                            <div class="form-group">
                                <label for="education" class="body-text-large"
                                    >Образование<br />&nbsp;<br
                                /></label>
                                <div class="input-group">
                                    <textarea
                                        id="education"
                                        type="text"
                                        name="education"
                                        class="form-control"
                                        placeholder="Образование"
                                        maxlength="256"
                                    >
Студент 2 курса IT-специальности</textarea
                                    >
                                    <div
                                        class="textarea-counter body-text-small"
                                    >
                                        <span>0</span>/256
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="experience" class="body-text-large"
                                    >Опыт работы<br />&nbsp;<br
                                /></label>
                                <div class="input-group">
                                    <textarea
                                        id="experience"
                                        type="text"
                                        name="experience"
                                        class="form-control"
                                        placeholder="Опыт работы"
                                        maxlength="256"
                                    ></textarea>
                                    <div
                                        class="textarea-counter body-text-small"
                                    >
                                        <span>0</span>/256
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="about-me" class="body-text-large"
                                    >О себе*<br />&nbsp;<br
                                /></label>
                                <div class="input-group">
                                    <textarea
                                        id="about-me"
                                        type="text"
                                        name="about-me"
                                        class="form-control"
                                        placeholder="Расскажите о себе"
                                        data-required="1"
                                        maxlength="256"
                                    >
Я студент 2 курса специальности CS. Знаю HTML, CSS, JavaScript, делал проект на Vue.js и PHP, немного изучал C/C++, знаком с Docker, Git</textarea
                                    >
                                    <div
                                        class="textarea-counter body-text-small"
                                    >
                                        <span>0</span>/256
                                    </div>
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

<style scoped></style>
