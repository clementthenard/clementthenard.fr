<template>
	<footer id="Footer" class="w-full text-center p-4 text-xs text-gray-400">
			<div class="flex mx-auto items-center justify-between flex-wrap p-4 md:px-6 max-w-screen-lg xl:max-w-screen-xl">
                <p>
                    Dévelopé avec
                    <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="underline hover:text-main_color">Nuxt.js</a>
                    et
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="underline hover:text-main_color">TailwindCSS</a>
                </p>
                <span class="flex items-center flex-no-shrink">
                    <NuxtImg class="text-gray-400" src="/images/svgs/github.svg" />
                    <span class="mr-1">v{{ version }}</span>
                </span>
			</div>
            <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
	</footer>
</template>

<script>
import { version } from "~/package.json";

export default {
  name: "Footer",
  data() {
      return {
            version: version
      }
  }
};
</script>