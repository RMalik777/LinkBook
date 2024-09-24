<script lang="ts">
  import { browser } from "$app/environment";

  import { LinkData } from "$lib/LinkData";

  import { Sun, Moon, SunMoon } from "lucide-svelte";

  import portrait from "$lib/assets/photosquarezoom.webp";
  import githubBlack from "$lib/assets/githubmarkblack.png";
  import githubWhite from "$lib/assets/githubmarkwhite.png";

  let themeMode: string | null;

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
  <img src={portrait} alt="Portrait of Rafli Malik" class="size-1/5 rounded-full sm:size-1/6" />
  <h1 translate="no" class="text-4xl font-medium tracking-tighter text-theme-purple duration-200 ease-out sm:text-5xl">
    Rafli Malik
  </h1>
</header>
<main class="flex w-dvw min-w-fit max-w-full flex-col items-center gap-4 rounded-xl px-4 sm:px-0">
  {#each LinkData as link}
    <a
      class="sm:text-md group flex w-full flex-col rounded-lg bg-purple-100 px-4 py-2 text-sm shadow-md duration-200 ease-out hover:bg-purple-200 hover:shadow-lg focus:bg-purple-200 focus:shadow-lg dark:bg-purple-900 dark:text-gray-200 dark:hover:bg-purple-800 dark:focus:bg-purple-800 sm:w-1/2 lg:w-2/5"
      href={link.url}
      target="_blank">
      <div class="flex flex-row items-start justify-start gap-2">
        <div class="mt-1">
          <svelte:component this={link.icon} />
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
    </a>
  {/each}
</main>
<footer class="mt-10 flex flex-col items-center gap-1 pb-5 sm:mt-16">
  <p class="text-neutral-900 duration-200 ease-out dark:text-white">
    Free SVG Background by <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://bgjar.com"
      class="text-blue-500 duration-200 ease-out after:content-['_↗'] hover:underline focus:underline dark:text-blue-300"
      >BGJar</a>
  </p>
  <p class="flex flex-row items-center gap-2">
    Source available in <a
      href="https://github.com/RMalik777/LinkBook"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-1 text-blue-500 duration-200 ease-out after:content-['_↗'] hover:underline focus:underline dark:text-blue-300"
      ><img
        loading="lazy"
        decoding="async"
        src={themeMode == "Dark" ? githubWhite : githubBlack}
        alt=""
        class="h-5" />GitHub</a>
  </p>
  <a
    translate="no"
    href="https://www.raflimalik.com/"
    target="_blank"
    class="text-theme-green hover:underline focus:underline">&copy; 2024 Rafli Malik</a>
</footer>
