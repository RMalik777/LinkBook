<script lang="ts">
	import { LinkData, Profile } from "#lib/LinkData.js";

	import GlideList from "#lib/components/GlideList.svelte";
	import LinkRow from "#lib/components/LinkRow.svelte";

	import portrait from "#lib/assets/photosquarezoom.webp?enhanced";

	const year = new Date().getFullYear();

	// Running index across groups so the entrance stagger flows down the whole page.
	const offsets = LinkData.map((_, i) =>
		LinkData.slice(0, i).reduce((sum, group) => sum + group.links.length, 0),
	);
</script>

<main class="flex w-full max-w-xl flex-col gap-12 px-4 pt-6 pb-4 sm:gap-14 sm:pt-12">
	<header
		class="flex items-center gap-5 transition-[opacity,translate] duration-700 ease-snappy sm:gap-6 starting:translate-y-2 starting:opacity-0"
	>
		<div class="relative size-20 shrink-0 sm:size-24">
			<enhanced:img
				src={portrait}
				alt="Portrait of Rafli Malik"
				loading="eager"
				decoding="sync"
				class="absolute inset-0 z-1 size-full rounded-full"
			/>
			<div
				aria-hidden="true"
				class="absolute inset-0 z-0 rounded-full bg-cover opacity-50 blur-md saturate-150"
				style:background-image="url({portrait.img.src})"
			></div>
		</div>
		<div class="flex flex-col gap-3">
			<h1
				translate="no"
				class="text-5xl leading-[0.9] font-semibold tracking-tight text-foreground uppercase sm:text-6xl"
			>
				{Profile.name}
			</h1>
			<p
				class="flex w-fit flex-wrap items-center gap-x-2 gap-y-1 bg-background/85 py-0.5 pr-1 font-heading text-xs text-muted-foreground backdrop-blur-[2px] sm:text-sm"
			>
				<span class="whitespace-nowrap">{Profile.bio}</span>
				<span class="flex items-center gap-1.5">
					<span aria-hidden="true" class="size-1.5 rounded-full bg-primary dark:bg-purple-400"
					></span>
					{Profile.location}
				</span>
			</p>
		</div>
	</header>

	{#each LinkData as group, groupIndex (group.name)}
		<section
			aria-labelledby="group-{group.name}"
			class="-mx-2 flex flex-col gap-3 bg-background/85 px-2 pt-2 backdrop-blur-[2px] sm:-mx-3 sm:px-3"
		>
			<h2
				id="group-{group.name}"
				class="flex items-center gap-3 font-heading text-xs tracking-widest text-muted-foreground uppercase"
			>
				<span class="text-primary tabular-nums dark:text-purple-400">
					{String(groupIndex + 1).padStart(2, "0")}
				</span>
				<span>/</span>
				<span>{group.name}</span>
				<span aria-hidden="true" class="h-px flex-1 bg-border"></span>
			</h2>
			<GlideList>
				{#each group.links as link, index (link.url)}
					<LinkRow {link} delay={(offsets[groupIndex] + index) * 40} />
				{/each}
			</GlideList>
		</section>
	{/each}
</main>

<footer
	class="mt-6 flex w-full max-w-xl flex-wrap items-center justify-between gap-2 px-4 pb-8 font-heading text-xs text-muted-foreground sm:mt-10"
>
	<a
		translate="no"
		href="https://www.raflimalik.com/"
		target="_blank"
		rel="noopener"
		class="outline-primary transition-colors duration-150 hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:text-purple-400"
	>
		&copy; {year} Rafli Malik
	</a>
	<a
		href="https://github.com/RMalik777/LinkBook"
		target="_blank"
		rel="noopener noreferrer"
		class="group flex items-center gap-1 outline-primary transition-colors duration-150 hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:text-purple-400"
	>
		Source on GitHub
		<span
			aria-hidden="true"
			class="transition-transform duration-200 ease-snappy group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
			>↗</span
		>
	</a>
</footer>
