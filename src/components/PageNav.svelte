<script>
	let scrollY;
</script>

<style lang="postcss">
	section {
		transition: background 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
		background: #ffffff00;
		&.sticky {
			background: #ffffffb8;
			border-bottom: 1px solid #00000029;
			backdrop-filter: saturate(180%) blur(20px);
			ul {
				border-bottom: none;
				li {
					a {
						@apply text-black;
					}
				}
			}
		}
	}

	ul {
		@apply flex items-center justify-end mx-3;
		height: 52px;
		border-bottom: 1px solid #ffffff1a;
		li {
			@apply ml-6;
			&.title {
				@apply mr-auto ml-0;
				a {
					@apply font-semibold font-sans;
					font-size: 21px;
					opacity: 0.92;
					transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
				}
			}

			a {
				@apply text-xs font-text text-white;
				opacity: 0.8;
				&.active {
					opacity: 0.5;
				}

				&.btn {
					@apply inline-block rounded-full text-white !important;
					padding: 4px 11px;
					background: #0071e3;
					/* line-height: 16px; */
					opacity: 1;
					&:hover {
						@apply text-white;
						background: #147ce5;
					}
				}
			}

			&:hover:not(.title) a:not(.active) {
				opacity: 1;
				color: #2997ff;
			}
		}
	}
</style>

<svelte:window bind:scrollY />

<section class="{scrollY > 44 ? 'sticky top-0' : 'relative'} z-20">
	<div class="container max-w-screen-lg mx-auto px-2">
		<ul>
			<li class="title">
				<a href="https://www.apple.com/macos/catalina/" target="_blank">
					macOS
				</a>
			</li>
			<li>
				<a href="javascript:void(0);" target="_blank" class="active">
					Overview
				</a>
			</li>
			<li>
				<a
					href="https://www.apple.com/macos/catalina/features/"
					target="_blank"
				>
					All New Features
				</a>
			</li>
			<li>
				<a
					href="https://www.apple.com/macos/how-to-upgrade/"
					target="_blank"
				>
					How to Upgrade
				</a>
			</li>
			<li>
				<a
					href="https://itunes.apple.com/us/app/macos-catalina/id1466841314?mt=12&l=en-us"
					target="_blank"
					class="btn"
				>
					Upgrade now
				</a>
			</li>
		</ul>
	</div>
</section>
