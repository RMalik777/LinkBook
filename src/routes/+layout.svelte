<script lang="ts">
  import { browser, dev } from "$app/environment";
  import type { Snippet } from "svelte";
  import "@fontsource-variable/inter";
  import "../app.css";

  import { Moon, Sun, SunMoon } from "lucide-svelte";

  import { inject } from "@vercel/analytics";
  inject({ mode: dev ? "development" : "production" });

  let themeMode: string | null = $state(null);

  // run after the component is mounted
  $effect(() => {
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
  });

  let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <title>Link Book | Rafli Malik</title>

  <meta property="og:title" content="Link Book" />
  <meta
    property="og:description"
    content="Link Book is a list of Rafli Malik's social, portfolio and contact. Find out more inside."
  />
  <meta property="og:url" content="https://www.raflimalik.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Rafli Malik" />
  <meta name="description" content="Rafli Malik link dictionary for his social media, website and portofolio." />
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#6E3FBD" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#222222" />
</svelte:head>

<div
  class="flex h-fit min-h-dvh w-full max-w-full flex-col items-center justify-between gap-8 scroll-smooth bg-main-light bg-cover bg-center antialiased duration-200 ease-out md:gap-12 dark:bg-main-dark"
>
  <button
    type="button"
    class="group absolute top-4 right-4 z-10 flex h-fit items-center gap-0 self-end rounded-lg bg-orange-200 px-2 py-1.5 text-xs font-medium text-neutral-900 duration-200 ease-out hover:bg-orange-300 hover:shadow-md focus-visible:bg-orange-300 focus-visible:shadow-md sm:gap-1 sm:px-4 sm:py-2 sm:text-sm dark:bg-orange-800 dark:text-neutral-50 dark:hover:bg-orange-700"
    onclick={() => {
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
    }}
  >
    <Moon
      class={(themeMode === "Dark" ? "scale-100 rotate-0" : "scale-0 rotate-90") +
        " relative h-4 duration-300 ease-out sm:h-5 md:h-6"}
    />
    <Sun
      class={(themeMode === "Light" ? "scale-100 rotate-0" : "scale-0 rotate-90") +
        " absolute h-4 duration-300 ease-out sm:h-5 md:h-6"}
    />
    <SunMoon
      class={(themeMode !== "Light" && themeMode !== "Dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90") +
        " absolute h-4 duration-300 ease-out sm:h-5 md:h-6"}
    />
    <span class="duration-200 ease-out">{themeMode ? themeMode : "System"}</span></button
  >

  {@render children?.()}
</div>
