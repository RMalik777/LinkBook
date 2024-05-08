<script lang="ts">
	import "../app.css";
	import { LinkData } from "$lib/LinkData";
</script>

<!-- MOVING/GRADIENT BACKGROUND -->
<main class="min-w-dvw w-full min-h-dvh h-fit flex flex-col items-center bg-slate-100">
	<header>
		<img src="" alt="Portrait of Rafli Malik" />
		<h1 class="text-5xl font-medium">Rafli Malik</h1>
	</header>
	<div class="w-fit p-4 flex flex-col gap-4 rounded-xl bg-slate-200 shadow-sm">
		{#each LinkData as link}
			<a
				class="w-auto px-4 py-2 flex flex-col rounded-lg text-md bg-slate-300 shadow-md"
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				><h2 class="text-2xl">{link.title}</h2>
				{link.desc}</a>
		{/each}
	</div>
</main>
