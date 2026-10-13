<script lang="ts">
	import type { Snippet } from "svelte";
	import { onMount } from "svelte";
	import { Toaster } from "#lib/components/ui/sonner/index.js";
	import "../app.css";

	import { configure } from "onedollarstats";

	import { Moon, Sun, SunMoon } from "@lucide/svelte";
	import { ModeWatcher, setMode, userPrefersMode } from "mode-watcher";

	import DotGrid from "#lib/components/DotGrid.svelte";
	import { Button } from "#lib/components/ui/button/index.js";

	let { children }: { children: Snippet } = $props();

	onMount(() => {
		configure({ trackLocalhostAs: "link.raflimalik.com" });
	});
</script>

<svelte:head>
	<title>Link Book | Rafli Malik</title>

	<meta property="og:title" content="Link Book" />
	<meta
		property="og:description"
		content="Link Book is a list of Rafli Malik's social, portfolio and contact. Find out more inside."
	/>
	<meta property="og:url" content="https://www.raflimalik.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Rafli Malik" />
	<meta
		name="description"
		content="Collection of Rafli Malik link for his social media, website and portofolio."
	/>
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#6E3FBD" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#222222" />
</svelte:head>

<ModeWatcher />
<Toaster />
<!-- The CSS dot pattern is the fallback; DotGrid paints over it once mounted. -->
<div
	class="relative isolate min-h-svh bg-white bg-radial from-(--dot) from-[1.5px] to-0% bg-size-[50px_50px] bg-fixed antialiased sm:from-[2.5px] sm:bg-size-[60px_60px] dark:bg-neutral-950"
>
	<DotGrid />
	<header class="flex h-fit w-full max-w-full flex-col items-center justify-between">
		<Button
			variant="secondary"
			size="sm"
			class="z-10 m-3 self-end font-heading text-xs tracking-wider uppercase"
			onclick={() => {
				if (userPrefersMode.current === "light") setMode("dark");
				else if (userPrefersMode.current === "dark") setMode("system");
				else setMode("light");
			}}
		>
			<span class="relative size-4">
				<Sun
					class={[
						userPrefersMode.current === "light"
							? "scale-100 rotate-0 opacity-100"
							: "scale-0 rotate-90 opacity-0",
						"absolute size-full transition-[scale,rotate,opacity] duration-300 ease-snappy",
					]}
				/>
				<Moon
					class={[
						userPrefersMode.current === "dark"
							? "scale-100 rotate-0 opacity-100"
							: "scale-0 rotate-90 opacity-0",
						"absolute size-full transition-[scale,rotate,opacity] duration-300 ease-snappy",
					]}
				/>
				<SunMoon
					class={[
						userPrefersMode.current !== "light" && userPrefersMode.current !== "dark"
							? "scale-100 rotate-0 opacity-100"
							: "scale-0 -rotate-90 opacity-0",
						"absolute size-full transition-[scale,rotate,opacity] duration-300 ease-snappy",
					]}
				/>
			</span>
			<span><span class="sr-only">Theme: </span>{userPrefersMode.current ?? "System"}</span>
		</Button>
	</header>
	<div class="flex flex-col items-center justify-start">
		{@render children?.()}
	</div>
</div>
