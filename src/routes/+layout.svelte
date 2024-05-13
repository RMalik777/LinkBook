<script lang="ts">
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	import "../app.css";

	inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
	<title>Link Book | Rafli Malik</title>
	<meta
		name="description"
		content="Rafli Malik link dictionary for his social media, website and portofolio" />
	<meta
		name="theme-color"
		media="(prefers-color-scheme: light)"
		content="#6E3FBD" />
	<meta
		name="theme-color"
		media="(prefers-color-scheme: dark)"
		content="#222222" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
		rel="stylesheet" />
</svelte:head>

<slot />
