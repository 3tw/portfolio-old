<template>
	<div class="content-wrap">
		<div class="image-wrap">
			<img src="../../assets/p2cover.jpg" alt="cover-photo" />
			<div class="text-wrap p2">
				<div class="image-text">
					<span class="proj-title">{{p2Title}}</span>
					<p class="proj-type">{{p2Type}}</p>
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