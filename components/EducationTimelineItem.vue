<template>
  <li class="mb-10 ml-6">
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <font-awesome-icon :icon="['fa-solid', 'fa-graduation-cap']"/>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{education.name}}</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{education.years}}</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{education.description}}</p>
        <a v-if="education.external_url" :href="education.external_url" target="_blank" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">En savoir plus</a>
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