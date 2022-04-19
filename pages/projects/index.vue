<template>
  <CthContainer>
    <CthTitle mainTitle="Mes projets" subTitle="Voici une petite liste des projets sur lesquelles j'ai travaillé" />

    <div class="w-full">
      <div class="grid gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="(project, idx) in projects"
          :key="idx"
          :project="project"
        />
      </div>
    </div>
  </CthContainer>
</template>

<script>
import projectsJson from '/data/projects.json'

export default {
  head: {
      title: 'Projets - Clément Thénard',
      meta: [
          {
              name: 'description',
              content: 'Projets Clément Thénard'
          }
      ]
  },
  data() {
      return {
          projects: projectsJson
      }
  }
}
</script>

<style>

</style>
