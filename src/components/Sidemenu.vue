<template>

	<div class="side-menu">
			<g-link class="link" to='/'> subpixel space </g-link>
        	<g-link class="link" to='/about/'> about this space </g-link>
        	<g-link class="link" to='/entries/'> all neural outputs </g-link>
			<p>   </p>
			<g-link class="link" to='/about/'> Dionisis Pettas </g-link>

	</div>
</template>


<style lang="scss">
.side-menu{
	display: flex;
	flex-direction: column;
	text-align: right;
	width: 120px;
    position: relative;
    margin-top: 75px;
    right: 0px;
    margin-right: 6.25%;
    z-index: 10;
    font-family: HelveticaNowText-Medium;
    font-size: .75em;

}
.link {
	text-decoration: none;
	margin-bottom: 7px;
    color: var(--body-color)!important;
    color: var(--body-color);
    cursor: pointer;
    padding-right: 1em;
    &:hover {
     opacity: .8
    }
      &:focus {
      outline: none;
	}
}
</style>