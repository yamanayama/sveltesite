<script context="module">
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import { center, secP, sp96, leftP } from "../../../static/style/Variables.js";
  import { display1, display2, subHeading } from "../../../static/style/Title.js";

  //compornents
	import AppBreadcrumbs from "../../components/molecules/AppBreadcrumbs.svelte";

	//function
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}

</script>

<script>
	import { onMount } from 'svelte';
	export let posts;

  $: console.log(posts.title);//リアクティブになった時点でコンソールで表示

	onMount(async () => {
		const res = await fetch(`blog.json`);
		posts = await res.json();
	});

	//meta
	const metadata = {
		title: 'blog | murakami naomi portfolio site',
		description: '村上奈緒美のポートフォリオサイトのブログです。技術共有やお知らせを載せます。',
		imageAlt: '村上奈緒美のポートフォリオサイトのブログです。技術共有やお知らせを載せます。',
		url:'/blog'
  }

	let breds  = [
		{
			id: 1,
			title: "TOP",
      link: "/"
		},
		{
			id: 2,
			title: "BLOG",
      link: "/blog"
		}
	];


	const blog = css `
		background: ${Color.Gray200};
    ${rem(13)};
	`;

	const blogBlock = css `
		${leftP};
		${sp96};
    padding: 24px 0 4rem;

		${mq[1]} {
      width: calc(100% - 180px);
		}

		${mq[2]} {
      width: ${breakpoints[2]}px;
		}
	`;

	const blogContainer = css `
		list-style: none;
	`;

	const blogBox = css `
		margin-top: 24px;
		padding-bottom: 8px;
		border-bottom: 1px solid ${Color.Gray300};
	`;

	const item = css`
		text-decoration: none;
		display: block;

		&:hover{
			text-decoration: underline;
		}
	`

	const itemList = css`
		display: flex;
		align-items: baseline;
	`

	const tag = css`
		list-style-type: none;
		margin: 0 1rem 0 0;

		li{
			${rem(11)};
			background: ${Color.Text100};
			color: ${Color.White};
			padding: .1em .3em;
		}
	`;

	const time = css`
		margin-right: 1rem;
		color: ${Color.Gray400};
	`;

  const itemTitle = css`
		${subHeading}
		margin: 8px 0;
  `;

</script>

<style>
</style>

<svelte:head>
	<title>Blog | murakami naomi's portfolio site</title>
</svelte:head>

<div class={blog}>
	<div class={blogBlock}>
		<h1 class={display2}>blog</h1>
		<ul class={blogContainer}>
			{#each posts as post}
				<li class={blogBox}>
					<div class={itemList}>
						<time class={time}>{post.time}</time><ul class={tag}>{@html post.despriction}</ul>
					</div>
					<a class={item} href='blog/{post.slug}' rel='prefetch'>
						<h3 class={itemTitle} >{post.title}</h3>
					</a>
				</li>
			{:else}
				<li>loading...:)</li>
			{/each}
		</ul>
	</div>

	<AppBreadcrumbs {breds} />
</div>
