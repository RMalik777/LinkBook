<script lang="ts">
	import type { Snippet } from "svelte";
	import { Spring, prefersReducedMotion } from "svelte/motion";

	let { children }: { children: Snippet } = $props();

	let row: HTMLLIElement | null = null;
	let visible = $state(false);

	const box = new Spring({ y: 0, height: 0 }, { stiffness: 0.18, damping: 0.72 });

	function moveTo(e: Event & { currentTarget: HTMLUListElement }) {
		const li = (e.target as Element).closest("li");
		if (!li || !e.currentTarget.contains(li)) return;
		row = li;
		// Appear in place instead of sliding in from wherever the highlight last was.
		void box.set(
			{ y: li.offsetTop, height: li.offsetHeight },
			{ instant: !visible || prefersReducedMotion.current },
		);
		visible = true;
	}

	function hide() {
		visible = false;
		row = null;
	}

	function onFocusOut(e: FocusEvent & { currentTarget: HTMLUListElement }) {
		if (!e.currentTarget.contains(e.relatedTarget as Node | null)) hide();
	}

	function onResize() {
		if (row) void box.set({ y: row.offsetTop, height: row.offsetHeight }, { instant: true });
	}
</script>

<svelte:window onresize={onResize} />

<div class="relative">
	<div
		aria-hidden="true"
		class={[
			"pointer-events-none absolute inset-x-0 top-0 bg-primary/6 transition-opacity duration-200 ease-snappy dark:bg-purple-400/8",
			visible ? "opacity-100" : "opacity-0",
		]}
		style:translate="0 {box.current.y}px"
		style:height="{box.current.height}px"
	></div>
	<ul
		onpointerover={moveTo}
		onpointerleave={hide}
		onfocusin={moveTo}
		onfocusout={onFocusOut}
		class="relative divide-y divide-border border-y border-border"
	>
		{@render children()}
	</ul>
</div>
