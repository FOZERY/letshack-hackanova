<template>
    <a
        class="team-item user-profile-link"
        data-name="Дмитрий"
        data-surname="Тагиев"
        data-age="20"
        data-phone="+7 (904) 080-64-56"
        data-email="fozery@yandex.ru"
        data-school=""
        data-work=""
        data-info="Я студент 2 курса специальности CS. Знаю HTML, CSS, JavaScript, делал проект на Vue.js и PHP, немного изучал C/C++, знаком с Docker, Git"
        data-avatar="3980546947_1716481621.jpg"
    >
        <div class="team-item-icon">
            <img src="@/assets/user-default.png" alt="Дмитрий Тагиев" />
        </div>

        <div class="team-item-name body-text-large">
            {{ `${first_name} ${last_name}` }}
            <p class="body-text-small mt-2">
                {{ `В команде с  ${new Date().toLocaleDateString()}` }}
            </p>
        </div>
    </a>
</template>

<script setup>
const props = defineProps({
    id: { type: Number, default: null },
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
});
console.log(props);
</script>
