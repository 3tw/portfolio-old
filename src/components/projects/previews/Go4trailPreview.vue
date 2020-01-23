<template>
	<div class="proj-wrap">
		<img src="@/assets/images/p2cover1.jpg" alt="cover-photo" />
		<div class="text-wrap p2">
			<div class="image-text">
				<span class="proj-title">{{p2Title}}</span>
				<p class="proj-type">{{p2Type}}</p>
				<router-link to="/projects/go4trail" class="btn">More</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			p2Title: `GO4TRAIL WEBSITE`,
			p2Type: `Website design`
		};
	}
};
</script>

<style lang="sass" scoped>
.text-wrap.p2
	background-color: #87c5be
</style>