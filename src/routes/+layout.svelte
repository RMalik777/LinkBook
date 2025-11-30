<script lang="ts">
	import "@fontsource-variable/inter";
	import type { Snippet } from "svelte";
	import "../app.css";

	import { clsx } from "clsx";
	import { Moon, Sun, SunMoon } from "@lucide/svelte";
	import { ModeWatcher, setMode, userPrefersMode } from "mode-watcher";

	import { Button } from "$lib/components/ui/button/index.js";

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
	class="bg-white bg-radial from-purple-100 from-[2px] to-0% bg-size-[50px_50px] bg-fixed antialiased sm:from-[3px] sm:bg-size-[60px_60px] dark:bg-neutral-950 dark:from-purple-900/25"
>
	<header class="flex h-fit w-full max-w-full flex-col items-center justify-between">
		<Button
			size="sm"
			type="button"
			variant="outline"
			class="z-10 m-2 self-end border-neutral-200 bg-transparent tracking-tight text-black backdrop-blur-xs duration-200 ease-out hover:bg-purple-700 hover:text-white focus-visible:bg-purple-700 focus-visible:text-white dark:border-neutral-700 dark:text-neutral-50 dark:hover:bg-purple-800/90 dark:focus-visible:bg-purple-800/90"
			onclick={() => {
				if (userPrefersMode.current === "light") setMode("dark");
				else if (userPrefersMode.current === "dark") setMode("system");
				else setMode("light");
			}}
		>
			<div class="relative size-4">
				<Sun
					class={clsx(
						userPrefersMode.current === "light"
							? "scale-100 rotate-0 blur-none"
							: "scale-0 rotate-90 blur-xs",
						"absolute size-full transition-all!",
					)}
				/>
				<Moon
					class={clsx(
						userPrefersMode.current === "dark"
							? "scale-100 rotate-0 blur-none"
							: "scale-0 rotate-90 blur-xs",
						"absolute size-full transition-all!",
					)}
				/>
				<SunMoon
					class={clsx(
						userPrefersMode.current !== "light" && userPrefersMode.current !== "dark"
							? "scale-100 rotate-0 blur-none"
							: "scale-0 -rotate-90 blur-xs",
						"absolute size-full",
					)}
				/>
			</div>
			<span class="capitalize duration-200 ease-out">
				{userPrefersMode.current ? userPrefersMode.current : "System"}
			</span>
		</Button>
	</header>
	<div class="flex flex-col items-center justify-start">
		{@render children?.()}
	</div>
</div>
