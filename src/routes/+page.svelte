<script lang="ts">
  import { LinkData } from "$lib/LinkData";
  import portrait from "$lib/assets/photosquarezoom.webp";
</script>

<header class="flex flex-col items-center justify-center gap-1 pt-24">
  <img
    src={portrait}
    alt="Portrait of Rafli Malik"
    class="size-1/5 rounded-full sm:size-1/6"
    loading="eager"
    decoding="sync"
  />
  <h1
    translate="no"
    class="text-4xl font-medium tracking-tighter text-purple-600 duration-200 ease-out sm:text-5xl dark:text-purple-500"
  >
    Rafli Malik
  </h1>
</header>
<main class="flex w-dvw max-w-full min-w-fit flex-col items-center gap-4 rounded-xl px-4 sm:px-0">
  {#each LinkData as link, index (link.url)}
    <a
      class="group relative flex w-full flex-col rounded-lg bg-purple-100 px-4 py-2 text-sm shadow-xs duration-300 ease-out hover:shadow-md focus-visible:shadow-md sm:w-1/2 sm:text-base lg:w-2/5 dark:bg-purple-900 dark:text-neutral-200 starting:translate-y-40"
      style="transition-delay: {index * 50}ms;"
      href={link.url}
      target="_blank"
    >
      <div class="z-10 flex flex-row items-start justify-start gap-2">
        <div class="mt-1">
          <link.icon />
        </div>
        <div class="leading-none">
          <h2 class="text-xl font-medium tracking-tighter duration-200 ease-out sm:text-2xl">
            {link.title}
          </h2>
          <p class="text-sm tracking-tight duration-200 ease-out sm:text-base">
            {link.desc}
          </p>
        </div>
      </div>
      <div
        class="absolute inset-[50%] z-0 h-full w-full -translate-x-[50%] -translate-y-[50%] scale-x-0 opacity-0 duration-200 ease-in-out group-hover:scale-x-100 group-hover:rounded-lg group-hover:bg-purple-200 group-hover:opacity-100 group-focus-visible:w-full group-focus-visible:scale-x-100 group-focus-visible:rounded-lg group-focus-visible:bg-purple-200 group-focus-visible:opacity-100 dark:bg-purple-900 dark:group-hover:bg-purple-800 dark:group-focus-visible:bg-purple-800"
      ></div>
    </a>
  {/each}
</main>
<footer class="mt-10 flex flex-col items-center gap-1 pb-5 tracking-tight sm:mt-16">
  <p class="text-neutral-900 duration-200 ease-out dark:text-white">
    Free SVG Background by <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://bgjar.com"
      class="text-purple-500 duration-200 ease-out after:content-['_↗'] hover:underline focus-visible:underline dark:text-purple-400"
      >BGJar</a
    >
  </p>
  <p>
    Source available in <a
      href="https://github.com/RMalik777/LinkBook"
      target="_blank"
      rel="noopener noreferrer"
      class=" text-purple-500 duration-200 ease-out after:content-['_↗'] hover:underline focus-visible:underline dark:text-purple-400"
    >
      GitHub</a
    >
  </p>
  <a
    translate="no"
    href="https://www.raflimalik.com/"
    target="_blank"
    class="bg-linear-to-r/oklch from-purple-500 to-pink-500 bg-clip-text text-lg font-medium text-transparent duration-200 ease-out visited:text-purple-500 hover:font-semibold hover:underline focus-visible:font-semibold focus-visible:underline dark:from-purple-400 dark:to-pink-400"
    >&copy; 2024 Rafli Malik</a
  >
</footer>
