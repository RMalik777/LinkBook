<script lang="ts">
	import { ArrowUpRight } from "@lucide/svelte";
	import { event } from "onedollarstats";

	import type { LinkType } from "#lib/LinkData.js";

	import BrandIcon from "#lib/components/BrandIcon.svelte";
	import CopyButton from "#lib/components/CopyButton.svelte";

	let { link, delay = 0 }: { link: LinkType; delay?: number } = $props();

	const external = $derived(link.url.startsWith("http"));
</script>

<!-- Entrance lives on the <li> so its delay never slows down hover/press on the row.
     The hover/focus tint comes from GlideList. -->
<li
	class="transition-[opacity,translate] duration-500 ease-snappy starting:translate-y-2 starting:opacity-0"
	style:transition-delay="{delay}ms"
>
	<div
		class="group relative flex items-center gap-4 px-2 py-4 outline-primary transition-[scale,background-color] duration-500 ease-spring has-[a:active]:scale-[0.985] has-[a:active]:bg-primary/8 has-[a:active]:duration-100 has-[a:active]:ease-snappy has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 sm:px-3"
	>
		<span
			class="grid size-10 shrink-0 place-items-center border border-border bg-background text-foreground transition-colors duration-150 group-hover:border-primary/40 group-hover:text-primary group-has-[a:focus-visible]:text-primary dark:group-hover:border-purple-400/40 dark:group-hover:text-purple-400 dark:group-has-[a:focus-visible]:text-purple-400"
		>
			{#if link.path}
				<BrandIcon path={link.path} class="size-4.5" />
			{:else if link.icon}
				<link.icon class="size-4.5" aria-hidden="true" />
			{/if}
		</span>

		<div class="min-w-0 flex-1">
			<a
				href={link.url}
				target={external ? "_blank" : undefined}
				rel={external ? "noopener noreferrer" : undefined}
				class="block text-base leading-tight font-medium tracking-tight outline-none after:absolute after:inset-0 sm:text-lg"
				onclick={() =>
					event("Link Click", {
						link_title: link.identifier,
						link_url: link.url,
					})}
			>
				{link.title}
				{#if external}<span class="sr-only">(opens in new tab)</span>{/if}
			</a>
			<p class="mt-1 truncate font-heading text-xs text-muted-foreground">{link.desc}</p>
		</div>

		{#if link.copy}
			<CopyButton value={link.copy} label={link.title} />
		{/if}

		<ArrowUpRight
			aria-hidden="true"
			class="size-5 shrink-0 text-muted-foreground transition-[translate,color] duration-200 ease-snappy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-has-[a:active]:translate-x-1 group-has-[a:active]:-translate-y-1 group-has-[a:focus-visible]:translate-x-0.5 group-has-[a:focus-visible]:-translate-y-0.5 group-has-[a:focus-visible]:text-primary dark:group-hover:text-purple-400 dark:group-has-[a:focus-visible]:text-purple-400"
		/>
	</div>
</li>
