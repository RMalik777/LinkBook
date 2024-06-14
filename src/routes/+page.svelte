<script lang="ts">
  import { browser } from "$app/environment";

  import { LinkData } from "$lib/LinkData.js";

  import {
    Earth,
    FolderGit2,
    Mail,
    Linkedin,
    MessageSquare,
    Sun,
    Moon
  } from "lucide-svelte";

  import portrait from "$lib/assets/photosquarezoom.webp";
  import githubBlack from "$lib/assets/githubmarkblack.png";
  import githubWhite from "$lib/assets/githubmarkwhite.png";

  let themeMode: string | null;

  // Detect if in browser and not in server
  if (browser) {
    themeMode = window.localStorage.getItem("theme");
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
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

    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", (e) => {
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
  class="pt-4 min-w-dvw w-full max-w-full min-h-dvh h-fit flex flex-col gap-8 md:gap-12 items-center justify-between bg-main-light dark:bg-main-dark bg-center bg-cover duration-200 ease-out">
  <button
    type="button"
    class="group self-end h-fit flex items-center gap-0 md:gap-1 mr-4 px-2 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-lg bg-orange-200 dark:bg-orange-800 text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-50 hover:bg-orange-300 dark:hover:bg-orange-700 duration-200 ease-out"
    on:click={() => {
      if (browser) {
        // if the theme is dark, change to light
        if (
          document.documentElement.classList.contains("dark") &&
          window.localStorage.getItem("theme") === "Dark"
        ) {
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
    {#if themeMode === "Dark"}
      <Moon class={"h-4 sm:h-5 md:h-6"} />
    {:else}
      <Sun class={"h-4 sm:h-5 md:h-6"} />
    {/if}
    {themeMode ? themeMode : "System"}</button>
  <header class="flex flex-col items-center justify-center gap-1">
    <img
      src={portrait}
      alt="Portrait of Rafli Malik"
      class="rounded-full size-1/5 sm:size-1/6" />
    <h1
      translate="no"
      class="text-4xl sm:text-5xl font-medium text-theme-purple duration-200 ease-out tracking-tighter">
      Rafli Malik
    </h1>
  </header>
  <main
    class="px-4 sm:px-0 min-w-fit w-dvw max-w-full flex flex-col items-center gap-4 rounded-xl">
    {#each LinkData as link}
      <a
        class="group w-full sm:w-1/2 lg:w-1/3 px-4 py-2 flex flex-col rounded-lg text-sm sm:text-md bg-purple-100 shadow-md hover:shadow-lg duration-200 ease-out hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 dark:text-gray-200"
        href={link.url}
        target="_blank">
        <div class="flex flex-row items-start justify-start gap-2">
          <div class="mt-1">
            {#if link.icon == "web"}
              <Earth />
            {:else if link.icon == "git"}
              <FolderGit2 />
            {:else if link.icon == "mail"}
              <Mail />
            {:else if link.icon == "linkedin"}
              <Linkedin />
            {:else if link.icon == "chat"}
              <MessageSquare />
            {/if}
          </div>
          <div>
            <h2
              class="text-xl font-medium sm:text-2xl duration-200 ease-out tracking-tight">
              {link.title}
            </h2>
            <p class="text-base duration-200 ease-out tracking-tight">
              {link.desc}
            </p>
          </div>
        </div>
      </a>
    {/each}
  </main>
  <footer class="mt-10 sm:mt-16 pb-5 flex flex-col items-center gap-1">
    <p class="text-neutral-900 dark:text-white duration-200 ease-out">
      Free SVG Background by <a
        translate="no"
        target="_blank"
        rel="noopener noreferrer"
        href="https://bgjar.com"
        class="text-blue-500 dark:text-blue-300 hover:underline after:content-['_↗'] duration-200 ease-out"
        >BGJar</a>
    </p>
    <p class="flex flex-row gap-2 items-center">
      Source available in <a
        translate="no"
        href="https://github.com/RMalik777/LinkBook"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1 text-blue-500 dark:text-blue-300 hover:underline after:content-['_↗'] duration-200 ease-out"
        ><img
          src={themeMode == "Dark" ? githubWhite : githubBlack}
          alt=""
          class="h-5" />GitHub</a>
    </p>
    <a
      translate="no"
      href="https://www.raflimalik.com/"
      target="_blank"
      class="text-theme-green hover:underline">&copy; 2024 Rafli Malik</a>
  </footer>
</div>
