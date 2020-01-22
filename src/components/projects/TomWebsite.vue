<template>
	<div class="content-wrap">
		<div class="image-wrap">
			<img src="../../assets/p1cover.jpg" alt="cover-photo" />
			<div class="text-wrap p1">
				<div class="image-text">
					<span class="proj-title">{{p1Title}}</span>
					<p class="proj-type">{{p1Type}}</p>
					<a class="btn">More</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			p1Title: `TOM'S WEB PORTFOLIO`,
			p1Type: `Website design`
		};
	}
};
</script>

<style lang="sass" scoped>
.text-wrap.p1
	background-color: whitesmoke
</style>