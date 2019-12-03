<template>
	<div class="author">

		<!-- <g-image alt="Author image" class="author__image" src="~/favicon.png"  blur="5" /> -->
        <g-image alt="Logo image" class="author__image" style="display: var(--hide-dark)" src="~/assets/images/Logo_black.png" />
		<g-image alt="Logo image" class="author__image" style="display: var(--hide-light)" src="~/assets/images/Logo_white.png" />
	
		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro">
			Spiral in. Spiral out.
		</p>

		<p class="author__links">
			<a href="//twitter.com/deepettas">Follow on Twitter</a>
			<a href="//github.com/deepettas">GitHub</a>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from '~/components/Logo.vue'

export default {
	props: ['showTitle'],
	components: {
	Logo
	}
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 0%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
		object-fit: scale-down;
		
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
