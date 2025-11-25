<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";

	import { Button } from "$lib/components/ui/button/index.js";

	import { ArrowLeft } from "@lucide/svelte";
</script>

<main
	class="-mt-13 flex h-svh w-full flex-col items-center justify-center gap-6 text-center text-3xl backdrop-blur-3xl backdrop-saturate-150 sm:text-4xl md:text-5xl lg:text-6xl dark:backdrop-brightness-[.25] dark:backdrop-saturate-200"
>
	<span
		class="absolute top-1/4 left-1/4 -z-50 aspect-square w-36 rounded-full bg-cyan-300 blur-[100px]"
	></span>
	<span
		class="absolute right-1/4 bottom-1/4 -z-50 aspect-square w-36 rounded-full bg-purple-300 blur-[100px]"
	></span>
	<section
		class="flex flex-col gap-2 bg-linear-to-l/oklch from-cyan-500 to-purple-500 bg-clip-text leading-none text-transparent xs:flex-row xs:gap-1"
	>
		<h1 class="font-bold tracking-tighter tabular-nums">{page?.status}</h1>
		<span class="hidden tracking-tighter xs:block">|</span>
		<p class="font-medium tracking-tighter">{page?.error?.message}</p>
	</section>
	<Button
		variant="outline"
		href={resolve("/")}
		class="group border-purple-500 bg-transparent text-purple-500 duration-200 ease-out hover:bg-purple-500 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:border-purple-500 dark:hover:text-white"
	>
		<div class="relative flex w-full items-center px-2">
			<ArrowLeft
				class="absolute size-4 opacity-0 blur-xs transition-all duration-200 ease-out group-hover:-translate-x-3 group-hover:opacity-100 group-hover:blur-none"
			/>
			<span class="transition-transform duration-200 group-hover:translate-x-2">Home</span>
		</div>
	</Button>
</main>
