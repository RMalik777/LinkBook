<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";

	import { ArrowLeft } from "@lucide/svelte";
</script>

<main class="-mt-14 flex h-svh w-full max-w-xl flex-col justify-center gap-8 px-4">
	<section class="flex flex-col gap-3">
		<p class="font-heading text-xs tracking-widest text-primary uppercase dark:text-purple-400">
			Error {page.status}
		</p>
		<h1 class="text-5xl leading-[0.9] font-semibold tracking-tighter uppercase sm:text-6xl">
			{page.error?.message ?? "Something went wrong"}
		</h1>
	</section>
	<a
		href={resolve("/")}
		class="group flex w-fit items-center gap-2 border border-border bg-background px-4 py-2 font-heading text-xs tracking-wider uppercase outline-primary transition-[color,border-color,scale] duration-150 ease-snappy hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95 dark:hover:border-purple-400/40 dark:hover:text-purple-400"
	>
		<ArrowLeft
			aria-hidden="true"
			class="size-4 transition-transform duration-200 ease-snappy group-hover:-translate-x-0.5"
		/>
		Home
	</a>
</main>
