<script lang="ts">
	import { LinkData } from "$lib/LinkData";

	import { Separator } from "$lib/components/ui/separator/index.js";

	import portrait from "$lib/assets/photosquarezoom.webp?enhanced";
</script>

<main class="flex w-full flex-col items-center gap-4 px-4 sm:w-1/2 sm:px-0 lg:w-2/5">
	<!-- <div
		class="flex flex-col items-center justify-center gap-3 overflow-hidden border border-purple-200/80 px-4 py-8 shadow-xs backdrop-blur-md backdrop-saturate-150 sm:mt-16 sm:mb-12 sm:gap-4 dark:border-purple-900/50"
	>
		<div class="group relative size-20 sm:size-24">
			<enhanced:img
				src={portrait}
				alt="Portrait of Rafli Malik"
				loading="eager"
				decoding="sync"
				class="absolute inset-0 z-1 rounded-full bg-transparent"
			/>
			<div
				class="absolute inset-0 z-0 rounded-full bg-cover bg-no-repeat blur-lg saturate-150"
				style={`background: url(${portrait.img.src})`}
			></div>
		</div>
		<h1
			translate="no"
			class="text-center text-3xl font-medium tracking-tighter text-purple-600 duration-200 ease-out sm:text-4xl dark:text-purple-500"
		>
			Rafli Malik
		</h1>
	</div> -->
	<div class="flex w-full flex-col gap-3">
		{#each LinkData as group (group.name)}
			<div class="relative mt-2">
				<Separator orientation="horizontal" class="absolute inset-0 top-1/2" />
				<span
					class="relative mx-auto block w-fit bg-purple-100 px-3 py-1 text-xs font-medium tracking-wide text-purple-700 uppercase dark:bg-purple-950/50 dark:text-purple-400"
				>
					{group.name}
				</span>
			</div>
			{#each group.links as link, index (link.url)}
				<a
					class="group relative flex w-full flex-col border border-purple-200/80 bg-white/80 p-4 px-5 py-4 text-sm break-all shadow-xs backdrop-blur-xs backdrop-saturate-150 transition-all duration-200 ease-out hover:scale-[1.02] hover:border-purple-300 hover:shadow-sm focus-visible:scale-[1.02] focus-visible:border-purple-300 focus-visible:shadow-sm sm:text-base dark:border-purple-900/30 dark:bg-neutral-950/80 dark:text-neutral-50 dark:hover:border-purple-800 starting:translate-y-40"
					style="transition-delay: {index * 10}ms;"
					href={link.url}
					target="_blank"
				>
					<div class="z-10 flex flex-row items-center justify-start gap-3">
						<div
							class="bg-purple-100 p-3 text-purple-700 transition-all duration-200 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-900/30 dark:text-purple-400 dark:group-hover:bg-purple-700"
						>
							<link.icon class="p-0.5 duration-200 ease-in" />
						</div>
						<div class="leading-none">
							<h2
								class="text-lg font-medium tracking-tighter transition-colors duration-200 ease-out group-hover:text-purple-700 sm:text-xl dark:group-hover:text-purple-400"
							>
								{link.title}
							</h2>
							<p
								class="text-sm tracking-tight text-muted-foreground transition-colors duration-200 ease-out sm:text-sm"
							>
								{link.desc}
							</p>
						</div>
					</div>
					<div
						class="absolute inset-0 z-2 bg-linear-to-r/oklch from-purple-50 via-violet-50 to-fuchsia-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-focus-visible:opacity-100 dark:from-purple-900/20 dark:via-violet-900/20 dark:to-fuchsia-950/40"
					></div>

					<div class="absolute inset-0 z-1 bg-white dark:bg-neutral-950"></div>
					<div
						class="absolute inset-0 z-0 bg-linear-to-r/oklch from-purple-300/30 via-violet-300/30 to-fuchsia-300/30 opacity-0 blur-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-100 group-focus-visible:opacity-100 dark:from-purple-500/30 dark:via-violet-500/30 dark:to-fuchsia-500/30"
					></div>
				</a>
			{/each}
		{/each}
	</div>
</main>
<footer class="mt-10 flex flex-col items-center pb-6 text-center text-sm tracking-tight sm:mt-16">
	<p>
		Source available in <a
			href="https://github.com/RMalik777/LinkBook"
			target="_blank"
			rel="noopener noreferrer"
			class="group relative z-1 p-px text-purple-600 underline duration-200 ease-out after:content-['_↗'] hover:text-white hover:no-underline focus-visible:text-white focus-visible:no-underline dark:text-purple-400 dark:hover:text-neutral-950 dark:focus-visible:text-neutral-950"
		>
			GitHub
			<span
				class="absolute inset-0 -z-1 size-full origin-bottom scale-y-0 bg-neutral-950 transition-transform duration-200 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100 dark:bg-neutral-50"
			></span>
		</a>
	</p>
	<a
		translate="no"
		href="https://www.raflimalik.com/"
		target="_blank"
		class="bg-linear-to-r/oklch from-purple-500 to-fuchsia-500 bg-clip-text text-base font-medium tracking-tighter text-transparent decoration-purple-500 transition-colors duration-500 ease-in-out hover:from-fuchsia-500 hover:to-purple-500 hover:underline focus-visible:font-semibold focus-visible:underline dark:from-purple-400 dark:to-fuchsia-400 dark:decoration-purple-400 dark:hover:from-fuchsia-400 dark:hover:to-purple-400"
	>
		&copy; 2024 Rafli Malik
	</a>
</footer>
