<script context="module">
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import { center, secP, sp96, leftP } from "../../../static/style/Variables.js";
  import { display1, display2,mainHeading } from "../../../static/style/Title.js";

	//compornents
	import AppBreadcrumbs from "../../components/molecules/AppBreadcrumbs.svelte";

	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`work/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;

	let breds  = [
		{
			id: 1,
			title: "TOP",
      link: "/"
		},
		{
			id: 2,
			title: "WORK",
      link: "/WORK"
		},
		{
			id: 3,
			title: post.title,
      link: "#"
		}
	];


	//style
	const work = css `
		background: ${Color.Gray200};
		${rem(13)};

		${mq[1]} {
			${rem(14)};
		}
	`;

	const workBlock = css `
		padding-top: 80px;

		${mq[1]} {
			margin-left: 180px;
			padding-top: 24%;
		}

		${mq[2]} {
			margin-left: 240px;
		}
	`;

	const workTitle = css `
		${display2};
		${leftP};

		${mq[1]} {
      display: none;
		}
	`;

	const workBox = css `
		background: ${Color.White};
		position: relative;
		z-index: 2;

		${mq[1]} {
		}
	`;

	const workImg = css `
		width: 100%;
		height: 240px;

		img{
			object-fit: cover;
			width: 100%;
			height: 100%;
		}

		${mq[1]} {
			position: absolute;
			right: 0;
			top: 0;
			width: 72%;
			height: auto;
			z-index: 1;
		}
	`;

	const workBody = css `
		padding: 24px 16px;

		${mq[1]} {
			padding: 4rem;
			max-width: ${breakpoints[2]}px;
		}
	`;

	const workTime = css `
		font-weight: bold;
		color: ${Color.Gray500};

		${mq[1]} {
		}
	`;

	const workText = css `
		margin-top: 24px;

		${mq[1]} {
			margin-top: 56px;
		}
	`;


	const itemTitle = css `
		${display1};

		${mq[1]} {
		}
	`;


</script>

<style>

</style>

<svelte:head>
	<title>{post.title} | murakami naomi's portfolio site</title>
</svelte:head>
<div class={work}>
	<div class={workBlock}>
		<h2 class={workTitle}>work</h2>
		<div class={workImg}><img src={post.hero} alt={post.title} width="763" height="318"></div>
		<div class={workBox}>
			<div class={workBody}>
				<h1 class={itemTitle}>{post.title}</h1>
				<time class={workTime}>リリース:{post.time}</time>
				<div class={workText}>
					{@html post.html}
				</div>

			</div>
		</div>

	</div>
	<AppBreadcrumbs {breds} />
</div>
