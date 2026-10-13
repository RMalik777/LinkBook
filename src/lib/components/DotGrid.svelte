<script lang="ts">
	import type { Attachment } from "svelte/attachments";

	import { mode } from "mode-watcher";

	// Must match the CSS fallback grid in +layout.svelte so the canvas fades in seamlessly.
	const SM_BREAKPOINT = 640;
	const REACH = 140;
	const GROW = 1.3;
	const IDLE_MS = 1600;

	let ready = $state(false);

	const grid: Attachment<HTMLCanvasElement> = (canvas) => {
		const context = canvas.getContext("2d");
		if (!context) return;
		const ctx: CanvasRenderingContext2D = context;

		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

		let width = 0;
		let height = 0;
		let spacing = 50;
		let baseRadius = 1.5;
		let colors = { background: "", dot: "", active: "" };

		const pointer = { x: -9999, y: -9999 };
		const current = { x: -9999, y: -9999 };
		let intensity = 0;
		let targetIntensity = 0;
		let frame = 0;
		let idleTimer: ReturnType<typeof setTimeout> | undefined;

		function readColors() {
			const host = getComputedStyle(canvas.parentElement ?? document.body);
			colors = {
				background: host.backgroundColor,
				dot: host.getPropertyValue("--dot").trim(),
				active: host.getPropertyValue("--dot-active").trim(),
			};
		}

		function resize() {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = Math.round(width * dpr);
			canvas.height = Math.round(height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const sm = width >= SM_BREAKPOINT;
			spacing = sm ? 60 : 50;
			baseRadius = sm ? 2.5 : 1.5;
		}

		function draw() {
			ctx.fillStyle = colors.background;
			ctx.fillRect(0, 0, width, height);

			const half = spacing / 2;
			const active: [number, number, number, number][] = [];

			ctx.fillStyle = colors.dot;
			ctx.beginPath();
			for (let y = half; y < height + spacing; y += spacing) {
				for (let x = half; x < width + spacing; x += spacing) {
					let r = baseRadius;
					if (intensity > 0.001) {
						const d = Math.hypot(x - current.x, y - current.y);
						if (d < REACH) {
							const t = 1 - d / REACH;
							const f = t * t * (3 - 2 * t) * intensity;
							r = baseRadius * (1 + GROW * f);
							if (f > 0.02) active.push([x, y, r, f]);
						}
					}
					ctx.moveTo(x + r, y);
					ctx.arc(x, y, r, 0, Math.PI * 2);
				}
			}
			ctx.fill();

			ctx.fillStyle = colors.active;
			for (const [x, y, r, f] of active) {
				ctx.globalAlpha = f;
				ctx.beginPath();
				ctx.arc(x, y, r, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
		}

		function tick() {
			frame = 0;
			current.x += (pointer.x - current.x) * 0.18;
			current.y += (pointer.y - current.y) * 0.18;
			intensity += (targetIntensity - intensity) * 0.12;
			draw();

			const moving = Math.abs(pointer.x - current.x) > 0.5 || Math.abs(pointer.y - current.y) > 0.5;
			const fading = Math.abs(targetIntensity - intensity) > 0.005;
			if (moving || fading) start();
			else intensity = targetIntensity;
		}

		function start() {
			if (!frame && !document.hidden) frame = requestAnimationFrame(tick);
		}

		function onPointer(e: PointerEvent) {
			if (intensity < 0.01) {
				// Jump to the pointer instead of sliding in from the last position.
				current.x = e.clientX;
				current.y = e.clientY;
			}
			pointer.x = e.clientX;
			pointer.y = e.clientY;
			targetIntensity = 1;
			clearTimeout(idleTimer);
			idleTimer = setTimeout(release, IDLE_MS);
			start();
		}

		function release() {
			targetIntensity = 0;
			start();
		}

		function onPointerUp(e: PointerEvent) {
			if (e.pointerType !== "mouse") release();
		}

		function onPointerOut(e: PointerEvent) {
			if (!e.relatedTarget) release();
		}

		function onResize() {
			resize();
			draw();
		}

		function onVisibility() {
			if (document.hidden) {
				cancelAnimationFrame(frame);
				frame = 0;
			} else {
				start();
			}
		}

		function listen() {
			window.addEventListener("pointermove", onPointer, { passive: true });
			window.addEventListener("pointerdown", onPointer, { passive: true });
			window.addEventListener("pointerup", onPointerUp, { passive: true });
			document.addEventListener("pointerout", onPointerOut, { passive: true });
		}

		function unlisten() {
			window.removeEventListener("pointermove", onPointer);
			window.removeEventListener("pointerdown", onPointer);
			window.removeEventListener("pointerup", onPointerUp);
			document.removeEventListener("pointerout", onPointerOut);
		}

		function onMotionChange() {
			if (reducedMotion.matches) {
				unlisten();
				intensity = targetIntensity = 0;
				draw();
			} else {
				listen();
			}
		}

		$effect(() => {
			void mode.current;
			// Wait a frame so the theme class is applied before reading colors.
			const id = requestAnimationFrame(() => {
				readColors();
				draw();
			});
			return () => cancelAnimationFrame(id);
		});

		resize();
		readColors();
		draw();
		ready = true;

		if (!reducedMotion.matches) listen();
		reducedMotion.addEventListener("change", onMotionChange);
		window.addEventListener("resize", onResize, { passive: true });
		document.addEventListener("visibilitychange", onVisibility);

		return () => {
			unlisten();
			reducedMotion.removeEventListener("change", onMotionChange);
			window.removeEventListener("resize", onResize);
			document.removeEventListener("visibilitychange", onVisibility);
			cancelAnimationFrame(frame);
			clearTimeout(idleTimer);
		};
	};
</script>

<canvas
	{@attach grid}
	aria-hidden="true"
	class={[
		"pointer-events-none fixed inset-0 -z-10 size-full transition-opacity duration-700 ease-snappy",
		ready ? "opacity-100" : "opacity-0",
	]}
></canvas>
