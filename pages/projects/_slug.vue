<template>
  <section class="bg-gray-900 w-full text-gray-100">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg xl:max-w-screen-xl">
      <NuxtLink class="block mt-8" to="/projects"><font-awesome-icon :icon="['fas', 'fa-arrow-left']" /> Retour à la liste</NuxtLink>

      <p class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-white mt-7 sm:mt-13 md:mt-17 mb-7">
        {{ project.name }}
      </p>
      <div class="flex">
        <div class="flex items-center mr-10">
          <font-awesome-icon :icon="['fas', 'fa-clock']"/>
          <span class="font-general-medium ml-2 leading-none">
            {{ project.date }}
          </span>
        </div>
        <div class="flex items-center">
          <font-awesome-icon :icon="['fas', 'fa-tag']"/>
          <span class="font-general-medium ml-2 leading-none">
            {{ project.type }}
          </span>
        </div>
      </div>

      <div v-if="project.images.length > 0" class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          class="mb-10 sm:mb-0"
          v-for="projectImage in project.images"
        >
          <NuxtImg
            :src="projectImage"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
          />
        </div>
      </div>

      <div class="block sm:flex gap-0 sm:gap-10 mt-8">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left">

          <!-- Single project objectives -->
          <div class="mb-7">
            <p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {{ project.objectivesHeading }}
            </p>
            <p class="font-general-regular text-primary-dark dark:text-ternary-light">
              {{ project.objectivesDetails }}
            </p>
          </div>

          <!-- Single project technologies -->
          <div class="mb-7">
            <p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {{ project.technologiesHeading }}
            </p>
            <p class="font-general-regular text-primary-dark dark:text-ternary-light">
              {{ project.technologies.join(', ') }}
            </p>
          </div>
        </div>

        <!-- Single project right section details -->
        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {{ project.projectDetailsHeading }}
          </p>
          <p
            v-for="projectDetail in project.projectDetails"
            class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
          >
            {{ projectDetail }}
          </p>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
import projectsJson from '/data/projects.json'

export default {
  data() {
    return {
      project: [],
      projectImages: []
    }
  },
  asyncData({ params, error }) {
    const project = projectsJson.find(p => p.slug === params.slug && !p.hidden)

    if(!project){
      error({ statusCode: 404, message: 'Projet non trouvé' })
    }
    return { project }
  }
}
</script>
