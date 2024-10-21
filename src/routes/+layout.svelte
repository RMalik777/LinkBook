<script lang="ts">
  import { browser, dev } from "$app/environment";
  import type { Snippet } from "svelte";
  import "../app.css";

  import { Moon, Sun, SunMoon } from "lucide-svelte";

  import { inject } from "@vercel/analytics";
  inject({ mode: dev ? "development" : "production" });

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

  let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <title>Link Book | Rafli Malik</title>

  <meta property="og:title" content="Link Book" />
  <meta
    property="og:description"
    content="Link Book is a list of Rafli Malik's social, portfolio and contact. Find out more inside." />
  <meta property="og:url" content="https://www.raflimalik.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Rafli Malik" />
  <meta name="description" content="Rafli Malik link dictionary for his social media, website and portofolio." />
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#6E3FBD" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#222222" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
</svelte:head>

<div
  class="min-w-dvw flex h-fit min-h-dvh w-full max-w-full flex-col items-center justify-between gap-8 scroll-smooth bg-main-light bg-cover bg-center antialiased duration-200 ease-out dark:bg-main-dark md:gap-12">
  <button
    type="button"
    class="group absolute right-4 top-4 z-10 flex h-fit items-center gap-0 self-end rounded-lg bg-orange-200 px-2 py-1.5 text-xs font-medium text-neutral-900 duration-200 ease-out hover:bg-orange-300 hover:shadow-md focus:bg-orange-300 focus:shadow-md dark:bg-orange-800 dark:text-neutral-50 dark:hover:bg-orange-700 sm:gap-1 sm:px-4 sm:py-2 sm:text-sm"
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

  {@render children?.()}
</div>
