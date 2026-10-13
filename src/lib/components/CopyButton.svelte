<script lang="ts">
	import { onMount } from "svelte";
	import { toast } from "svelte-sonner";
	import { Check, Copy } from "@lucide/svelte";
	import { event } from "onedollarstats";

	let { value, label }: { value: string; label: string } = $props();

	let supported = $state(false);
	let copied = $state(false);
	let timeout: ReturnType<typeof setTimeout> | undefined;

	onMount(() => {
		supported = !!navigator.clipboard?.writeText;
		return () => clearTimeout(timeout);
	});
</script>

{#if supported}
	<button
		type="button"
		onclick={async () => {
			try {
				await navigator.clipboard.writeText(value);
			} catch {
				toast.error("Failed to copy to clipboard");
				return;
			}
			copied = true;
			toast.success(`${label} copied to clipboard`);
			event("Email Copy");
			clearTimeout(timeout);
			timeout = setTimeout(() => (copied = false), 1500);
		}}
		aria-label="Copy {label}"
		class="relative z-10 grid size-9 place-items-center text-muted-foreground outline-primary transition-[color,scale] duration-150 ease-snappy hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-90 dark:hover:text-purple-400 dark:focus-visible:text-purple-400"
	>
		<span class="relative size-4">
			<Copy
				class={[
					"absolute inset-0 size-4 transition-[opacity,scale] duration-200 ease-snappy",
					copied ? "scale-50 opacity-0" : "scale-100 opacity-100",
				]}
			/>
			<Check
				class={[
					"absolute inset-0 size-4 text-primary transition-[opacity,scale] duration-200 ease-snappy dark:text-purple-400",
					copied ? "scale-100 opacity-100" : "scale-50 opacity-0",
				]}
			/>
		</span>
	</button>
{/if}
