<script lang="ts">
  import { browser } from "$app/environment";

  import { LinkData } from "$lib/LinkData";

  import portrait from "$lib/assets/photosquarezoom.webp";

  let themeMode: string | null = $state(null);

  // Detect if in browser and not in server
  if (browser) {
    themeMode = window.localStorage.getItem("theme");
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (e.matches && !localStorage.theme) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.className = "dark";
          document.documentElement.style.colorScheme = "dark";
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.style.colorScheme = "light";
        }
      }
    });

    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
      if (e.matches && !localStorage.theme) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.className = "dark";
          document.documentElement.style.colorScheme = "dark";
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.style.colorScheme = "light";
        }
      }
    });
  }
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
    class="text-4xl font-medium tracking-tighter text-purple-600 duration-200 ease-out dark:text-purple-500 sm:text-5xl"
  >
    Rafli Malik
  </h1>
</header>
<main class="flex w-dvw min-w-fit max-w-full flex-col items-center gap-4 rounded-xl px-4 sm:px-0">
  {#each LinkData as link}
    <a
      class="sm:text-md group relative flex w-full flex-col rounded-lg bg-purple-100 px-4 py-2 text-sm shadow-sm duration-300 ease-out hover:shadow-md focus-visible:shadow-md dark:bg-purple-900 dark:text-neutral-200 sm:w-1/2 lg:w-2/5"
      href={link.url}
      target="_blank"
    >
      <div class="z-10 flex flex-row items-start justify-start gap-2">
        <div class="mt-1">
          <link.icon />
        </div>
        <div>
          <h2 class="text-xl font-medium tracking-tight duration-200 ease-out sm:text-2xl">
            {link.title}
          </h2>
          <p class="text-base tracking-tight duration-200 ease-out">
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
    class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-lg font-medium text-transparent duration-200 ease-out visited:text-purple-500 hover:font-semibold hover:underline focus-visible:font-semibold focus-visible:underline dark:from-purple-400 dark:to-pink-400"
    >&copy; 2024 Rafli Malik</a
  >
</footer>
