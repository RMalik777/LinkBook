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

<div
  class="min-w-dvw flex h-fit min-h-dvh w-full max-w-full flex-col items-center justify-between gap-8 scroll-smooth bg-main-light bg-cover bg-center pt-4 antialiased duration-200 ease-out dark:bg-main-dark md:gap-12">
  <button
    type="button"
    class="group mr-4 flex h-fit items-center gap-0 self-end rounded-lg bg-orange-200 px-2 py-1.5 text-sm font-medium text-neutral-900 duration-200 ease-out hover:bg-orange-300 hover:shadow-md focus:bg-orange-300 focus:shadow-md dark:bg-orange-800 dark:text-neutral-50 dark:hover:bg-orange-700 sm:px-4 sm:py-2 md:gap-1 md:px-5 md:py-3 md:text-base"
    on:click={() => {
      if (browser) {
        // if the theme is dark, change to light
        if (document.documentElement.classList.contains("dark") && window.localStorage.getItem("theme") === "Dark") {
          document.documentElement.classList.remove("dark");
          document.documentElement.style.colorScheme = "light";
          window.localStorage.setItem("theme", "Light");
          themeMode = "Light";
        }
        // if the theme is light, change to follow system
        else if (
          !document.documentElement.classList.contains("dark") &&
          window.localStorage.getItem("theme") === "Light"
        ) {
          document.documentElement.classList.remove("dark");
          document.documentElement.style.removeProperty("color-scheme");
          window.localStorage.removeItem("theme");
          themeMode = null;
        }
        // if the theme is following system, change to dark
        else {
          document.documentElement.classList.add("dark");
          document.documentElement.style.colorScheme = "dark";
          window.localStorage.setItem("theme", "Dark");
          themeMode = "Dark";
        }
      }
    }}>
    <Moon
      class={(themeMode === "Dark" ? "rotate-0 scale-100" : "rotate-90 scale-0") +
        " relative h-4 duration-300 ease-out sm:h-5 md:h-6"} />
    <Sun
      class={(themeMode === "Light" ? "rotate-0 scale-100" : "rotate-90 scale-0") +
        " absolute h-4 duration-300 ease-out sm:h-5 md:h-6"} />
    <SunMoon
      class={(themeMode !== "Light" && themeMode !== "Dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0") +
        " absolute h-4 duration-300 ease-out sm:h-5 md:h-6"} />
    <span class="duration-200 ease-out">{themeMode ? themeMode : "System"}</span></button>
  <header class="flex flex-col items-center justify-center gap-1">
    <img src={portrait} alt="Portrait of Rafli Malik" class="size-1/5 rounded-full sm:size-1/6" />
    <h1
      translate="no"
      class="text-4xl font-medium tracking-tighter text-theme-purple duration-200 ease-out sm:text-5xl">
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
</div>
