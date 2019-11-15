<template>
	<g-link class="logo" to="/">
	<g-image alt="Logo image" class="logo__image" src="~/assets/images/Logo_black.png" />

	  <span class="logo__text">
		  
	    {{ $static.metadata.siteName }}
	  </span>
	</g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color)!important;
  font-family: HelveticaNowText-Medium;
  &__image {
		vertical-align: middle;
		border-radius: 99px;
		height: 27px;
		width: 27px;
		margin-right: .9em;
	}
}
</style>
