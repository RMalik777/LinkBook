<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";

	import { ArrowLeft } from "@lucide/svelte";

	import { Button } from "#lib/components/ui/button/index.js";
</script>

<main class="-mt-14 flex h-svh w-full max-w-xl flex-col justify-center gap-8 px-4">
	<section class="flex flex-col gap-3">
		<p class="font-heading tracking-widest text-primary uppercase dark:text-purple-400">
			Error {page.status}
		</p>
		<h1 class="text-5xl font-semibold tracking-tight uppercase sm:text-6xl">
			{page.error?.message ?? "Something went wrong"}
		</h1>
	</section>
	<Button
		href={resolve("/")}
		variant="secondary"
		class="w-fit font-heading tracking-wider uppercase"
	>
		<ArrowLeft
			data-icon="inline-start"
			aria-hidden="true"
			class="transition-transform duration-200 ease-snappy group-hover/button:-translate-x-0.5"
		/>
		Home
	</Button>
</main>
