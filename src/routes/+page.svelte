<script lang="ts">
	import { browser } from "$app/environment";

	import { LinkData } from "$lib/LinkData";
	import portrait from "$lib/assets/photosquarezoom.webp";

	let themeMode: string | null;

	// Detect if in browser and not in server
	if (browser) {
		themeMode = window.localStorage.getItem("theme");
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (e) => {
				if (e.matches && !localStorage.theme) {
					window.matchMedia("(prefers-color-scheme: dark)").matches
						? (document.documentElement.className = "dark")
						: (document.documentElement.className = "light");
				}
			});

		window
			.matchMedia("(prefers-color-scheme: light)")
			.addEventListener("change", (e) => {
				if (e.matches && !localStorage.theme) {
					window.matchMedia("(prefers-color-scheme: dark)").matches
						? (document.documentElement.className = "dark")
						: (document.documentElement.className = "light");
				}
			});
	}
</script>

<div
	class="pt-4 min-w-dvw w-full max-w-full min-h-dvh h-fit flex flex-col gap-12 items-center justify-between bg-main-light dark:bg-main-dark bg-center bg-cover duration-200 ease-out">
	<button
		class="group self-end flex items-center gap-1 mr-4 px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-orange-200 dark:bg-orange-800 font-medium text-black dark:text-neutral-50 hover:bg-orange-300 dark:hover:bg-orange-700 duration-200 ease-out"
		on:click={() => {
			if (browser) {
				// if the theme is dark, change to light
				if (
					document.documentElement.classList.contains("dark") &&
					window.localStorage.getItem("theme") === "Dark"
				) {
					document.documentElement.classList.remove("dark");
					window.localStorage.setItem("theme", "Light");
					themeMode = "Light";
				}
				// if the theme is light, change to follow system
				else if (
					!document.documentElement.classList.contains("dark") &&
					window.localStorage.getItem("theme") === "Light"
				) {
					document.documentElement.classList.remove("dark");
					window.localStorage.removeItem("theme");
					themeMode = null;
				}
				// if the theme is following system, change to dark
				else {
					document.documentElement.classList.add("dark");
					window.localStorage.setItem("theme", "Dark");
					themeMode = "Dark";
				}
			}
		}}
		><span
			class="material-symbols-rounded group-hover:material-fill duration-200 ease-out">
			{themeMode === "Dark"
				? "dark_mode"
				: themeMode === "Light"
					? "light_mode"
					: "contrast"}
		</span>{themeMode ? themeMode : "System"}</button>
	<header class="flex flex-col items-center justify-center gap-1">
		<img
			src={portrait}
			alt="Portrait of Rafli Malik"
			class="rounded-full size-1/5 sm:size-1/6" />
		<h1
			class="text-4xl sm:text-5xl font-medium text-theme-purple duration-200 ease-out">
			Rafli Malik
		</h1>
	</header>
	<main
		class="px-4 sm:px-0 min-w-fit w-dvw max-w-full flex flex-col items-center gap-4 rounded-xl">
		{#each LinkData as link}
			<a
				class="group w-full sm:w-1/2 lg:w-1/3 px-4 py-2 flex flex-col rounded-lg text-sm sm:text-md bg-purple-100 shadow-md hover:shadow-lg duration-200 ease-out hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 dark:text-gray-200"
				href={link.url}
				target="_blank">
				<div class="flex flex-row items-start justify-start gap-2">
					<span
						class="material-symbols-rounded pt-1 group-hover:material-fill duration-150 ease-out">
						{link.icon}
					</span>
					<div>
						<h2 class="text-xl font-medium sm:text-2xl duration-200 ease-out">
							{link.title}
						</h2>
						<p class="text-base duration-200 ease-out">{link.desc}</p>
					</div>
				</div>
			</a>
		{/each}
	</main>
	<footer class="mt-10 sm:mt-16 pb-5 flex flex-col items-center gap-1">
		<p class="text-black dark:text-white duration-200 ease-out">
			Free SVG Background by <a
				target="_blank"
				rel="noopener noreferrer"
				href="https://bgjar.com"
				class="text-blue-500 dark:text-blue-300 hover:underline after:content-['_↗'] duration-200 ease-out"
				>BGJar</a>
		</p>
		<p>
			Source available in <a
				href="https://github.com/RMalik777/LinkBook"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-500 dark:text-blue-300 hover:underline after:content-['_↗'] duration-200 ease-out"
				>GitHub</a>
		</p>
		<a
			href="https://www.raflimalik.com/"
			target="_blank"
			class="text-theme-green hover:underline">&copy; 2024 Rafli Malik</a>
	</footer>
</div>
