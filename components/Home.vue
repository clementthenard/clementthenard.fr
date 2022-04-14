<template>
    <div>
      <CthContainer>
        <section class="flex flex-col items-center text-gray-100 max-w-7xl mx-auto mb-5">
          <div class="w-48 h-48 rounded-full mb-6 bg-logo_bg">
            <img src="../static/bitmoji.png" class="w-full p-2 h-full object-contain" alt="John Doe">
          </div>

          <h1 class="text-2xl font-bold text-center">
            Bonjour et bienvenue chez moi 👋
          </h1>
          <h3 class="mb-4"><span class="italic">Clément Thénard</span></h3>
          <div class="text-5xl md:text-6xl font-bold text-center max-w-3xl mb-4 relative">
            <div class="absolute top-10 opacity-20 transform left-1/2 -translate-x-1/2 text-logoMain z-0 w-full">
              <svg class="max-w-xs md:max-w-lg mx-auto w-full" viewBox="0 0 625 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 46c1.035 2.276 1.035 2.276 1.036 2.275h.002l.011-.006.048-.021.198-.089c.176-.08.443-.197.796-.353.707-.31 1.763-.767 3.145-1.35a406.34 406.34 0 0112.06-4.841c10.438-4.011 25.451-9.363 43.72-14.716C99.57 16.19 149.07 5.5 201 5.5v-5C148.43.5 98.43 11.312 61.61 22.1c-18.42 5.398-33.563 10.796-44.108 14.848a411.168 411.168 0 00-12.209 4.9 243.513 243.513 0 00-4.039 1.746 96.86 96.86 0 00-.268.121l-.015.007-.004.002c-.002 0-.002 0 1.033 2.276zM201 5.5c51.827 0 96.622 13.509 138.315 26.573 41.555 13.021 80.28 25.705 119.331 23.423l-.292-4.992c-37.949 2.218-75.724-10.098-117.544-23.202C299.128 14.24 253.673.5 201 .5v5zm257.646 49.996c38.873-2.272 80.4-14.874 112.112-26.845a615.88 615.88 0 0038.831-16.199 484.157 484.157 0 0011.08-5.243 292.1 292.1 0 003.713-1.852l.197-.1.05-.027.014-.006.004-.002c.001 0 .001-.001-1.147-2.222L622.351.78h-.002l-.011.006a611.127 611.127 0 01-53.346 23.187c-31.538 11.905-72.511 24.303-110.638 26.531l.292 4.992z" fill="currentColor"></path>
              </svg>
            </div>
            <div class="relative">Développeur full stack</div>
          </div>
          <p class="font-light text-center max-w-sm mb-2">
            Basé en Normandie, je développe des interfaces modernes et fonctionnelles afin de faciliter la vie des utilisateurs.
          </p>

          <div class="flex justify-center mt-2 space-x-6 sm:mt-6">
            <CthButton type="a" target="_blank" href="/cv-clement-thenard.pdf" class="text-lg font-medium sm:text-xl px-6 py-4" to="/projects/">
              Télécharger mon CV &nbsp; <font-awesome-icon :icon="['fas', 'download']"/>
            </CthButton>
          </div>
        </section>
      </CthContainer>
      <CthContainer background="bg-white">
        <CthTitle theme="dark" mainTitle="Petite présentation" subTitle="Qui suis-je ? Où vais-je ?"/>
        <div class="description w-full">
          <div class="flex flex-col md:flex-row">
            <div class="profile-avatar md:mr-10">
              <div class="border border-gray-300 rounded-md max-w-sm w-48 h-full mx-auto">
                <div class="flex h-full">
                  <div class="flex">
                    <nuxt-img class="rounded-md object-cover object-center w-full h-full" src="clement-thenard.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-10 md:mt-0">
              <p class="text-sm text-secondary leading-6 font-semibold">
                Bonjour, moi c'est Clément Thénard,
              </p>
              <p class="text-sm text-secondary leading-6 font-normal mt-5">
                Un développeur full stack (mais qui préfère le front) qui travaille actuellement chez <a target="_blank" class="underline hover:text-main_color" href="https://wixiweb.fr">Wixiweb <font-awesome-icon :icon="['fa-solid', 'fa-external-link']"/></a>. Durant mes années d'études
                et d'expériences j'ai pu travailler sur des projets divers et variés : logistique, applications pour des PME, de gestions d'associations etc. Ces projets
                m'ont permis de comprendre comment bien construire son application afin qu'elle soit la plus agréable à utiliser et la plus ergonomique. J'adore me mettre
                à la place des utilisateurs et ainsi comprendre comment ils réfléchissent quand ils utilisent une des applications que j'ai développé.
              <p class="text-sm text-secondary leading-6 mt-5">
                Après avoir appris les basiques du développement web (front et back) je me suis lancé le défi de développer une application de gestion de l'association
                dont je fais parti. C'est là que je suis tombé amoureux de <a href="https://vuejs.org/" class="underline hover:text-main_color">VueJs</a>, j'en ferais peut-être un
                article prochainement. Je continue donc d'apprendre chaque jour et je ne cesserai jamais.
              </p>
            </div>
          </div>
        </div>

        <div>
          <blockquote class="flex flex-wrap flex-col bg-white text-gray-700 border-l-8 italic border-gray-400 px-4 py-3 mt-6">
            Réfléchissez constamment à la manière dont vous pourriez améliorer les choses et vous remettre en question [...] Certaines personnes n’aiment pas le changement, mais il faut adopter le changement si la seule alternative est la catastrophe.
          </blockquote>
          <span class="flex justify-end text-sm text-gray-800 font-semibold pt-2">Elon Musk</span>
        </div>


      </CthContainer>

      <CthContainer>
        <CthTitle mainTitle="Mes expériences" subTitle="Tous les endroits et projets sur lesquelles j'ai travaillé" />

        <div class="grid gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="(experience, idx) in experiences"
            :key="idx"
            :education="experience"
            href="#" class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ experience.name }}</h5>

            <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2">Expérience</span>
            <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2">{{ experience.type }}</span>

              <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image">
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Bonnie Green
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image">
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Michael Gough
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image">
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Lana Byrd
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
          </a>
        </div>

      </CthContainer>

      <CthContainer background="bg-white">
        <CthTitle theme="dark" mainTitle="Mon parcours scolaire" subTitle="Études supérieures où j'ai étudié" />
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <EducationTimelineItem
            v-for="(education, idx) in educations"
            :key="idx"
            :education="education"
          />
        </ol>
      </CthContainer>

    </div>
</template>

<script>
import experiencesJson from '/data/experiences.json'
import educationsJson from '/data/educations.json'

export default {
    data() {
    return {
      experiences: experiencesJson,
      educations: educationsJson
    }
  },
  methods: {
  }
}
</script>
