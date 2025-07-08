<script lang="ts">
	import { LinkData } from "$lib/LinkData";
	import portrait from "$lib/assets/photosquarezoom.webp?enhanced";
</script>

<header
	class="mt-20 mb-10 flex flex-col items-center justify-center gap-3 overflow-hidden border border-purple-200 px-4 py-8 shadow-xs backdrop-blur-md backdrop-saturate-150 sm:mt-24 sm:mb-12 sm:gap-4 dark:border-purple-900"
>
	<div class="group relative size-20 sm:size-24">
		<enhanced:img
			src={portrait}
			alt="Portrait of Rafli Malik"
			loading="eager"
			decoding="sync"
			class="absolute inset-0 z-1 h-full w-full rounded-full bg-transparent"
		/>
		<div
			class="absolute inset-0 z-0 h-full w-full rounded-full bg-cover bg-no-repeat blur-lg saturate-150"
			style={`background: url(${portrait.img.src})`}
		></div>
	</div>
	<h1
		translate="no"
		class="text-4xl font-medium tracking-tighter text-purple-600 duration-200 ease-out sm:text-5xl dark:text-purple-500"
	>
		Rafli Malik
	</h1>
</header>
<main class="flex w-dvw max-w-full min-w-fit flex-col items-center gap-4 px-4 sm:px-0">
	{#each LinkData as link, index (link.url)}
		<a
			class="group relative flex w-full flex-col border border-purple-200 bg-transparent px-4 py-2 text-sm shadow-xs backdrop-blur-xs backdrop-saturate-150 duration-200 ease-out hover:shadow-sm focus-visible:shadow-sm sm:w-1/2 sm:text-base lg:w-2/5 dark:border-purple-900 dark:text-white starting:translate-y-40"
			style="transition-delay: {index * 10}ms;"
			href={link.url}
			target="_blank"
		>
			<div class="z-10 flex flex-row items-start justify-start gap-2">
				<div class="mt-1">
					<link.icon />
				</div>
				<div class="leading-none">
					<h2 class="mb-1 text-xl font-medium tracking-tighter duration-200 ease-out sm:text-2xl">
						{link.title}
					</h2>
					<p class="text-sm tracking-tight duration-200 ease-out sm:text-base">
						{link.desc}
					</p>
				</div>
			</div>
			<div
				class="absolute inset-[50%] z-0 h-full w-full -translate-x-[50%] -translate-y-[50%] scale-x-0 bg-linear-to-r/oklch from-purple-200 to-violet-200 opacity-0 duration-200 ease-in-out group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:w-full group-focus-visible:scale-x-100 group-focus-visible:opacity-100 dark:from-purple-900 dark:to-violet-900"
			></div>
			<div
				class="absolute inset-[50%] z-0 h-full w-full -translate-x-[50%] -translate-y-[50%] scale-x-0 bg-linear-to-r/oklch from-purple-200/50 to-violet-200/50 opacity-0 blur-md duration-200 ease-in-out group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:w-full group-focus-visible:scale-x-100 group-focus-visible:opacity-100 dark:from-purple-900/80 dark:to-violet-900/80"
			></div>
		</a>
	{/each}
</main>
<footer class="mt-10 flex flex-col items-center gap-1 pb-5 tracking-tight sm:mt-16">
	<p>
		Source available in <a
			href="https://github.com/RMalik777/LinkBook"
			target="_blank"
			rel="noopener noreferrer"
			class=" text-purple-600 duration-200 ease-out after:content-['_↗'] hover:underline focus-visible:underline dark:text-purple-400"
		>
			GitHub
		</a>
	</p>
	<a
		translate="no"
		href="https://www.raflimalik.com/"
		target="_blank"
		class="bg-linear-to-r/oklch from-purple-500 to-fuchsia-500 bg-clip-text text-lg font-medium tracking-tighter text-transparent decoration-purple-500 transition-colors duration-500 ease-in-out hover:from-fuchsia-500 hover:to-purple-500 hover:underline focus-visible:font-semibold focus-visible:underline dark:from-purple-400 dark:to-fuchsia-400 dark:decoration-purple-400 dark:hover:from-fuchsia-400 dark:hover:to-purple-400"
	>
		&copy; 2024 Rafli Malik
	</a>
</footer>
