<script lang="ts">
  import { page } from "$app/stores";
  import { ArrowLeft } from "lucide-svelte";
  // console.log($page);
</script>

<main
  class="flex h-dvh w-dvw flex-col items-center justify-center gap-6 text-center text-3xl tracking-tighter backdrop-blur-3xl backdrop-saturate-150 dark:backdrop-brightness-[.25] dark:backdrop-saturate-200 sm:text-4xl md:text-5xl lg:text-6xl"
>
  <span class="absolute left-1/4 top-1/4 -z-50 aspect-square w-36 rounded-full bg-cyan-300 blur-[100px]"></span>
  <span class="absolute bottom-1/4 right-1/4 -z-50 aspect-square w-36 rounded-full bg-purple-300 blur-[100px]"></span>
  <section
    class="flex flex-col gap-2 bg-gradient-to-l from-cyan-500 to-purple-500 bg-clip-text leading-none text-transparent xs:flex-row xs:gap-1"
  >
    <h1 class="font-bold">{$page?.status}</h1>
    <span class="hidden xs:block">|</span>
    <p class="font-medium">{$page?.error?.message}</p>
  </section>
  <a
    href="/"
    class="group inline-flex items-center rounded-xl border-2 border-purple-500 bg-transparent px-8 py-1 text-base font-medium tracking-tight text-purple-500 duration-200 ease-out hover:bg-purple-500 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:border-purple-500 dark:hover:text-white sm:px-10 sm:py-2 sm:text-lg"
    ><ArrowLeft
      class="absolute h-fit w-auto min-w-fit translate-x-0 opacity-0 transition-all duration-200 ease-out group-hover:-translate-x-4 group-hover:opacity-100"
    />
    <span class="transition-transform duration-200 group-hover:translate-x-2">Home</span></a
  >
</main>
