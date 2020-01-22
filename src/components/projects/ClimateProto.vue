<template>
	<div class="content-wrap">
		<div class="image-wrap">
			<img src="../../assets/p3cover.jpg" alt="cover-photo" />
			<div class="text-wrap p3">
				<div class="image-text">
					<span class="proj-title">{{p3Title}}</span>
					<p class="proj-type">{{p3Type}}</p>
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
            p3Title: `CLIMATE AWARNESS`,
            p3Type: `Prototype`
		};
	}
};
</script>

<style lang="sass" scoped>
.text-wrap.p3
	background-color: #111111
</style>