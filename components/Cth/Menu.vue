<template>
  <nav :class="{ 'hidden-navbar': !showNavbar }" class="top-0 z-50 w-full fixed bg-gray-900 transition-all">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg xl:max-w-screen-xl">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <NuxtLink to="/">
              <LogoPortfolio class="h-10 w-10" />
            </NuxtLink>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            @click="toggle"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
          >
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <div class="ml-10 flex items-baseline">
                <NuxtLink class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" to="/projects">
                  Projets
                </NuxtLink>
                <NuxtLink class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" to="/blog">
                  Blog
                </NuxtLink>
                <CthButton class="md:ml-4" type="button" @click="showModal = true">
                  Une question ?
                </CthButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3 bg-gray-900">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
          A propos
        </a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
          Mes projets
        </a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
          Blog
        </a>
        <CthButton type="button" @click="showModal = true">
          Une question ?
        </CthButton>
      </div>
    </div>

    <CthModal v-if="showModal" @close="showModal = false">
      <div slot="header">
        Vous avez une question à me poser ?
      </div>
      <div class="text-gray-100" slot="body">
        <p class="text-gray-300 italic text-xs text-center mb-2">Venez la poser içi</p>
        <div class="flex justify-center mb-4">
          <a href="https://twitter.com/ClementTd" target="_blank" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
            <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/cl%C3%A9ment-thenard/" target="_blank" class="text-white bg-[#0A66C4] hover:bg-[#0A66C4] focus:ring-4 focus:outline-none focus:ring-[#0c4b8a] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
            <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="email" role="img" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://github.com/clementthenard/" target="_blank" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
            <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          </a>
        </div>
        <p class="text-gray-300 italic text-xs text-center mb-2">Ou par là</p>
        <form name="contact" method="POST" data-netlify="true">
          <div class="flex mb-2">
            <div class="mr-1">
                <label for="nom" class="block mb-2 text-sm font-medium">Votre nom</label>
                <input type="text" name="nom" id="nom" class="bg-gray-50 border text-sm rounded-lg focus:ring-main_color focus:border-secondary_color block w-full p-2.5" placeholder="Clément" required>
            </div>
            <div class="ml-1">
                <label for="prenom" class="block mb-2 text-sm font-medium">Votre prénom</label>
                <input type="text" name="prenom" id="prenom" class="bg-gray-50 border text-sm rounded-lg focus:ring-main_color focus:border-secondary_color block w-full p-2.5" placeholder="Thénard" required>
            </div>
          </div>
          <div class="mb-2">
              <label for="email" class="block mb-2 text-sm font-medium">Votre email</label>
              <input type="text" name="email" id="email" class="bg-gray-50 border text-sm rounded-lg focus:ring-main_color focus:border-secondary_color block w-full p-2.5" placeholder="hello@clementthenard.fr" required>
          </div>
          <div>
            <label for="message" class="block mb-2 text-sm font-medium">Votre message</label>
            <textarea required id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-main_color focus:focus:border-secondary_color" placeholder="Ecrivez votre message..."></textarea>
          </div>
          <div class="flex justify-center mt-4">
            <button type="submit" class="shadow-md hover:shadow-lg hover:bg-secondary_color bg-main_color translate hover:-translate-y-1 text-md font-medium border outline-none transition-all duration-200 inline-flex items-center p-2 border-transparent focus:ring cursor-pointer rounded-lg text-white bg-logoMain hover:bg-marron">Envoyer un message</button>
          </div>
        </form>
      </div>
    </CthModal>
  </nav>
</template>

<script>
const OFFSET = 60

export default {
  data() {
    return {
      isOpen: false,
      showModal: false,

      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },

  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },

    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  },
}
</script>

<style>
  nav.hidden-navbar {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }

  .nuxt-link-exact-active.nuxt-link-active{
    background-color: rgb(55,65,81);
  }
</style>
