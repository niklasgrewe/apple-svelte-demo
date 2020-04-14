<script>
	import PageNav from "../components/PageNav.svelte";
	import Hero from "../components/Hero.svelte";
</script>

<style lang="postcss">
	section {
		background: linear-gradient(to bottom, #f7eef1, #fff);
		h2,
		h3 {
			color: #333333;
		}
	}
</style>

<svelte:head>
	<title>macOS Catalina - Apple</title>
</svelte:head>

<PageNav />
<Hero />

<section class="align-top inline-block w-full py-40">
	<div class="container mx-auto max-w-screen-lg">
		<h2 class="font-bold leading-none text-7xl">
			Music, TV, and podcasts take center stage.
		</h2>
		<p class="mt-4 pr-56 text-2xl">
			iTunes forever changed the way people experienced music, movies, TV
			shows, and podcasts. It all changes again with three all-new,
			dedicated apps — Apple Music, Apple TV, and Apple Podcasts — each
			designed from the ground up to be the best way to enjoy
			entertainment on your Mac. And rest assured; everything you had in
			your iTunes library is still accessible in each app. iCloud
			seamlessly syncs everything across your devices — or you can back
			up, restore, and sync by connecting the device directly to your Mac.
		</p>
		<figure class="relative mt-32 mb-10">
			<img
				src="/img/macbook_air_shared_hw__bt45nx6ajgia_large.png"
				alt="MacBook Air"
			/>
		</figure>
		<div class="grid grid-cols-3 max-w-screen-md mx-auto">
			<h3 class="font-semibold leading-none text-4xl mt-5">
				Presenting Apple Music on Mac.
			</h3>
			<p class="mt-4 text-lg col-span-2 pl-16">
				The new Apple Music app is the ultimate music streaming
				experience on Mac.1 Explore a library of 60 million songs,
				discover new artists and tracks, find the perfect playlist,
				download and listen offline, or enjoy all the music you’ve
				collected over the years. And find it all in your music library
				on all your devices.
			</p>
		</div>
		<figure class="relative mt-32 mb-10">
			<img
				src="/img/macbook_air_shared_hw__bt45nx6ajgia_large.png"
				alt="MacBook Air"
			/>
		</figure>
		<div class="grid grid-cols-3 max-w-screen-md mx-auto">
			<h3 class="font-semibold leading-none text-4xl mt-5">
				Apple TV. Premiering on Mac.
			</h3>
			<p class="mt-4 text-lg col-span-2 pl-16">
				The Apple TV app for Mac is the new home for all your favorite
				movies, shows, premium channels, and Apple TV+.2 Watch
				everything directly in the app or enjoy it offline, and discover
				the best of what’s on in the Watch Now tab. You can even pick up
				where you left off on any screen, across all your devices. And
				for the first time, 4K3 and Dolby Atmos4–supported movies are
				available on Mac.
			</p>
		</div>
		<figure class="relative mt-32 mb-10">
			<img
				src="/img/macbook_air_shared_hw__bt45nx6ajgia_large.png"
				alt="MacBook Air"
			/>
		</figure>
		<div class="grid grid-cols-3 max-w-screen-md mx-auto">
			<h3 class="font-semibold leading-none text-4xl mt-5">
				Listen up. Podcasts on Mac.
			</h3>
			<p class="mt-4 text-lg col-span-2 pl-16">
				More than 700,000 of the best entertainment, comedy, news, and
				sports shows are now available on your Mac with Apple Podcasts.
				Search for podcasts by title, topic, guest, host, content, and
				more. Subscribe and be notified as soon as new episodes become
				available. And in the Listen Now tab, you can easily pick up
				where you left off across all your devices.
			</p>
		</div>
	</div>
</section>
