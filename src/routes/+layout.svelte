<script lang="ts">
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";

	inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
	<title>Rafli | Link Book</title>
	<meta
		name="description"
		content="Rafli Malik link dictionary for social media, website and portofolio" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bellota+Text:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Bellota:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:wght@100..900&family=Jersey+10+Charted&display=swap"
		rel="stylesheet" />
</svelte:head>

<slot />
