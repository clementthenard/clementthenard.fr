<template>
  <li class="mb-10 ml-11" v-if="!education.hidden">
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 text-lg text-gray-900 bg-white rounded-full ring-8 ring-white">
            <font-awesome-icon :icon="['fa-solid', 'fa-graduation-cap']"/>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{education.name}} <CthButton class="text-sm px-2 py-1 ml-4" type="a" v-if="education.external_url" :href="education.external_url" target="_blank"><font-awesome-icon :icon="['fa-solid', 'fa-external-link']"/></CthButton></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{education.years}}</time>
        <p class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{{education.description}}</p>

    </li>
</template>

<script>
export default {
    props: {
        education: {}
    }
}
</script>

<style>

</style>
