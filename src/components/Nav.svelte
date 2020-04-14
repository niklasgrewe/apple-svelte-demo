<script>
	let scrollY;
</script>

<style lang="postcss">
	section {
		background: #000c;
		backdrop-filter: saturate(180%) blur(20px);
	}

	ul {
		@apply flex items-center justify-between;
		li {
			@apply mx-5;
			&.logo {
				@apply ml-0;
			}

			a {
				@apply inline-block align-top text-sm text-white px-3 font-text;
				opacity: 0.8;
				transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
				line-height: 44px;
				font-weight: 300;
				&.active {
					opacity: 0.5;
				}
			}

			&:hover a:not(.active) {
				opacity: 1;
			}
		}
	}
</style>

<svelte:window bind:scrollY />

<section class="{scrollY === 0 ? 'sticky' : 'relative'} top-0 z-20">
	<div class="container max-w-screen-lg mx-auto px-2">
		<ul>
			<li class="logo">
				<a href="https://www.apple.com/" target="_blank">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="44"
						viewBox="0 0 16 44"
					>
						<path
							d="M8.02 16.23c-.73
							0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63
							2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34
							1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73
							1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56
							1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34
							1.91-3.46
							2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78
							1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12
							1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31"
							fill="#fff"
						></path>
					</svg>
				</a>
			</li>
			<li>
				<a
					href="https://www.apple.com/mac/"
					target="_blank"
					class="active"
				>
					Mac
				</a>
			</li>
			<li>
				<a href="https://www.apple.com/ipad/" target="_blank">iPad</a>
			</li>
			<li>
				<a href="https://www.apple.com/iphone/" target="_blank">
					iPhone
				</a>
			</li>
			<li>
				<a href="https://www.apple.com/watch/" target="_blank">Watch</a>
			</li>
			<li>
				<a href="https://www.apple.com/tv/" target="_blank">TV</a>
			</li>
			<li>
				<a href="https://www.apple.com/music/" target="_blank">Music</a>
			</li>
			<li>
				<a href="https://support.apple.com/" target="_blank">Support</a>
			</li>
		</ul>
	</div>
</section>
