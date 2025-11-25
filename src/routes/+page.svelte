<script lang="ts">
	import { LinkData } from "$lib/LinkData";

	import { Separator } from "$lib/components/ui/separator/index.js";

	import portrait from "$lib/assets/photosquarezoom.webp?enhanced";
</script>

<main class="flex w-full flex-col items-center gap-4 px-4 sm:w-1/2 sm:px-0 lg:w-2/5">
	<div
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
	</div>
	<div class="flex w-full flex-col gap-2">
		{#each LinkData as group (group.name)}
			<div class="relative mt-2">
				<Separator orientation="horizontal" class="absolute inset-0 top-1/2" />
				<span class="relative mx-auto block w-fit bg-background px-2 text-sm text-muted-foreground"
					>{group.name}</span
				>
			</div>
			{#each group.links as link, index (link.url)}
				<a
					class="group relative flex w-full flex-col border border-purple-200/80 bg-transparent px-4 py-2 text-sm break-all shadow-xs backdrop-blur-xs backdrop-saturate-150 duration-200 ease-out hover:shadow-sm focus-visible:shadow-sm sm:text-base dark:border-purple-900/30 dark:text-neutral-50 starting:translate-y-40"
					style="transition-delay: {index * 10}ms;"
					href={link.url}
					target="_blank"
				>
					<div class="z-10 flex flex-row items-start justify-start gap-2">
						<div class="mt-1">
							<link.icon />
						</div>
						<div class="leading-none">
							<h2 class="text-lg font-medium tracking-tighter duration-200 ease-out sm:text-xl">
								{link.title}
							</h2>
							<p
								class="text-sm tracking-tight text-muted-foreground duration-200 ease-out sm:text-sm"
							>
								{link.desc}
							</p>
						</div>
					</div>
					<div
						class="gradient absolute inset-0 z-2 h-full w-full bg-linear-to-r/oklch from-purple-100 to-violet-100 opacity-0 transition duration-150 ease-in-out group-hover:opacity-100 group-focus-visible:opacity-100 dark:from-purple-900/10 dark:to-violet-950/70"
					></div>

					<div
						class="background absolute inset-0 z-1 h-full w-full bg-white dark:bg-neutral-950"
					></div>
					<div
						class="glow absolute inset-0 z-0 h-full w-full bg-linear-to-r/oklch from-purple-200/50 to-violet-200/50 opacity-0 blur-md transition duration-200 ease-in-out group-hover:opacity-100 group-focus-visible:opacity-100 dark:from-purple-500/30 dark:to-violet-500/30"
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
