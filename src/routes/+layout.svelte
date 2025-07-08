<script lang="ts">
	import { dev } from "$app/environment";
	import type { Snippet } from "svelte";
	import "@fontsource-variable/inter";
	import "../app.css";

	import { ModeWatcher, setMode, userPrefersMode } from "mode-watcher";
	import { Moon, Sun, SunMoon } from "lucide-svelte";
	import { clsx } from "clsx";

	import { inject } from "@vercel/analytics";
	inject({ mode: dev ? "development" : "production" });

	let { children }: { children: Snippet } = $props();
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
<div
	class="flex h-fit min-h-dvh w-full max-w-full flex-col items-center justify-between scroll-smooth bg-white bg-radial from-purple-100 from-[2px] to-0% bg-[size:50px_50px] bg-fixed antialiased sm:from-[3px] sm:bg-[size:60px_60px] dark:bg-neutral-950 dark:from-purple-900/40"
>
	<button
		type="button"
		class="group absolute top-4 right-4 z-10 flex h-fit items-center gap-0 self-end border border-neutral-200 bg-transparent px-2 py-1.5 text-xs font-medium tracking-tight text-black shadow-xs backdrop-blur-xs duration-200 ease-out hover:bg-purple-700 hover:text-white focus-visible:bg-purple-700 focus-visible:text-white sm:gap-1.5 sm:px-4 sm:text-sm dark:border-neutral-700 dark:text-neutral-50 dark:hover:bg-purple-800/90 dark:focus-visible:bg-purple-800/90"
		onclick={() => {
			if (userPrefersMode.current === "light") setMode("dark");
			else if (userPrefersMode.current === "dark") setMode("system");
			else setMode("light");
		}}
	>
		<Moon
			class={clsx(
				userPrefersMode.current === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90",
				" relative h-4 duration-300 ease-out sm:h-5 md:h-6",
			)}
		/>
		<Sun
			class={clsx(
				userPrefersMode.current === "light" ? "scale-100 rotate-0" : "scale-0 rotate-90",
				" absolute h-4 duration-300 ease-out sm:h-5 md:h-6",
			)}
		/>
		<SunMoon
			class={clsx(
				userPrefersMode.current !== "light" && userPrefersMode.current !== "dark"
					? "scale-100 rotate-0"
					: "scale-0 -rotate-90",
				" absolute h-4 duration-300 ease-out sm:h-5 md:h-6",
			)}
		/>
		<span class="duration-200 ease-out"
			>{userPrefersMode.current ? userPrefersMode.current : "System"}</span
		></button
	>

	{@render children?.()}
</div>
