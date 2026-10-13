<script lang="ts">
	let { path, class: className }: { path: string; class?: string } = $props();
</script>

<svg
	viewBox="0 0 24 24"
	fill="currentColor"
	aria-hidden="true"
	class={className}
	xmlns="http://www.w3.org/2000/svg"
>
	<path d={path} />
</svg>
