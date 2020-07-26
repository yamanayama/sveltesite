<script context="module">
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import { center, secP, sp96, leftP, maxW } from "../../../static/style/Variables.js";
  import { display1, display2, mainHeading, Body } from "../../../static/style/Title.js";

	//compornents
	import AppBreadcrumbs from "../../components/molecules/AppBreadcrumbs.svelte";
	import AppCvButton from "../../components/atoms/AppCvButton.svelte";

	export async function preload({ params, query }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
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
      link: "/blog"
		},
		{
			id: 3,
			title: post.title,
      link: "#"
		}
	];


	//style
	const blog = css `
		background: ${Color.White};
		${Body};
	`;

	const blogBlock = css `
		margin: 24px auto 40px;
		padding: 0 16px;
		${leftP}

		${mq[1]} {
			margin-top: 40px;
			margin-bottom: 80px;
			width: calc(100% - 180px);
		}

		${mq[2]} {
			width: 100%;
			${maxW}
		}
	`;

	const blogBox = css `
		padding-bottom: 16px;
		border-bottom: 1px solid ${Color.Gray300};

		${mq[1]} {
			padding-bottom: 40px;
		}
	`;

	const blogTime = css `
		font-weight: bold;
		color: ${Color.Gray400};
	`;

	const blogText = css `
		margin-top: 24px;

		${mq[1]} {
			margin-top: 56px;
		}
	`;

	const itemTitle = css `
		${display1};
		text-transform: initial;
		margin-bottom: 40px;
		border-bottom: 2px solid ${Color.Text100};

		${mq[1]} {
		}
	`;

	const back = css `
		margin: 16px auto 24px;

		${mq[1]} {
			margin: 24px auto 32px;
		}
	`;


</script>

<style>

</style>

<svelte:head>
	<title>{post.title} | murakami naomi's portfolio site</title>
</svelte:head>
<div class={blog}>
	<div class={blogBlock}>
		<time class={blogTime}>{post.time}</time>
		<h1 class={itemTitle}>{post.title}</h1>
			<div class={blogBox}>
				{@html post.html}
			</div>
		</div>

	<div class={back}>
	  <AppCvButton type="button" areaLabel="BACK" className="secondary" onClick="history.back()" />
	</div>

	<AppBreadcrumbs {breds} />
</div>
