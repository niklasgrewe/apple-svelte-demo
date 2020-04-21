<script>
	import { fly } from "svelte/transition";
	import { onMount } from "svelte";
	import { translateRange } from "../lib/translateRange";

	let onLoad;

	let scrollY = 0;
	let innerHeight;

	let stretchParent;
	let stretchElement;

	let stretchParentOffsetHeight = 700;
	let stretchElementOffsetHeight = 700;
	let originalScaleFactor = 1;

	$: scaleFactor = translateRange(
		scrollY,
		0,
		stretchParentOffsetHeight / 2,
		originalScaleFactor,
		1
	);

	$: overlayOpacity1 = translateRange(
		scrollY,
		0,
		stretchParentOffsetHeight / 2,
		3,
		0
	);

	$: overlayOpacity2 = translateRange(
		scrollY,
		0,
		stretchParentOffsetHeight / 4,
		1,
		0
	);

	$: overlayTranslation = translateRange(
		scrollY,
		stretchParentOffsetHeight / 2,
		stretchParentOffsetHeight / 1.4,
		0,
		-104
	);

	$: overlayTranslation2 = translateRange(
		scrollY,
		stretchParentOffsetHeight / 2,
		stretchParentOffsetHeight / 1.4,
		104,
		0
	);

	onMount(() => {
		onLoad = true;

		setTimeout(() => {
			const viewportOffset = stretchElement.getBoundingClientRect();
			const pixelRatio = window.devicePixelRatio;

			const offsetWidth = stretchElement.offsetWidth * pixelRatio;

			const offsetHeight =
				stretchElement.offsetHeight * pixelRatio - 160 * pixelRatio;

			const widthScaleFactor = (viewportOffset.left * 2) / offsetWidth;

			const heightScaleFactor =
				(viewportOffset.top * pixelRatio * 2 + offsetHeight) /
				offsetHeight;

			originalScaleFactor =
				widthScaleFactor >= heightScaleFactor
					? widthScaleFactor
					: heightScaleFactor;
		}, 50);
	});
</script>

<style lang="postcss">
	.hero {
		background: #fafafa;
		margin-top: -96px;
	}

	.slideshow {
		@apply absolute overflow-hidden;
		top: 6%;
		left: 11.8%;
		right: 11.8%;
		bottom: 0;
		.slide,
		.slide img {
			@apply absolute inset-0;
			width: 100%;
		}
	}
</style>

<svelte:window bind:scrollY bind:innerHeight />

<div class="relative">
	<section
		bind:clientHeight="{stretchParentOffsetHeight}"
		bind:this="{stretchParent}"
		class="hero overflow-hidden sticky top-0 z-10 pb-24"
	>
		<div class="relative text-center">
			<img
				class="inline-block mt-32"
				src="/img/catalina_blk_logo__dnf4e0kz7viq_large.jpg"
				alt="macOS Catalina"
			/>
			<h2 class="font-bold leading-none mt-6 text-7xl">
				The power of Mac.
				<br />
				Taken further.
			</h2>
			<div class="max-w-screen-xl mt-20 mx-auto relative">
				<figure
					bind:clientHeight="{stretchElementOffsetHeight}"
					bind:this="{stretchElement}"
					class="absolute w-full"
					style="top: 50%; left: 50%; transform: translate3d(-50%,
					-50%, 0) scale({scaleFactor});"
				>
					<img
						class="inline-block w-full"
						src="/img/hardware__sped6myhcuye_large.jpg"
						alt="MacBook Pro"
					/>
					<div class="slideshow">
						<div class="slide">
							<img
								style="transform: translate3d({overlayTranslation}%,
								0, 0);"
								src="/img/screen_darkmode__slg2qk1ijleq_large.jpg"
								alt="macOS Catalina"
							/>
							<img
								src="/img/desktop__on4gxlz1xv6u_large.jpg"
								alt="macOS Catalina"
								style="opacity: {overlayOpacity1};transform: translate3d(0%, 0, 0)"
							/>
						</div>
						<div
							class="slide"
							style="transform: translate3d({overlayTranslation2}%,
							0, 0);"
						>
							<img
								src="/img/screen_darkmode_apps__b07j9pqpfw02_large.jpg"
								alt="macOS Catalina"
							/>
						</div>
					</div>
				</figure>
				<div
					class="sticky top-0 w-full z-0"
					style="height: {stretchElementOffsetHeight}px"
				></div>
			</div>
			<div class="max-w-screen-md mx-auto py-16">
				<p class="text-2xl">
					macOS Catalina gives you more of everything you love about
					Mac. Experience music, TV, and podcasts in three all-new Mac
					apps. Enjoy your favorite iPad apps now on your Mac. Extend
					your workspace and expand your creativity with iPad and
					Apple Pencil. And discover smart new features in the apps
					you use every day. Now you can take everything you do above
					and beyond.
				</p>
			</div>
		</div>

		<div
			class="absolute flex flex-col h-screen items-center justify-center
			left-0 right-0 text-center top-0 {overlayOpacity2 === 0 ? 'invisible' : ''}"
			style="opacity: {overlayOpacity2};"
		>
			{#if onLoad}
				<p
					class="font-semibold leading-none text-4xl text-white"
					in:fly="{{ delay: 200, duration: 2000, y: 50 }}"
				>
					macOS
				</p>
				<h1
					class="font-bold leading-none text-10xl text-white
					tracking-tight"
					in:fly="{{ delay: 500, duration: 2000, y: 50 }}"
				>
					Catalina
				</h1>
			{/if}
		</div>
	</section>

	<section
		class="sticky top-0 z-0"
		style="height: {stretchParentOffsetHeight / 1.4}px"
	></section>
</div>
