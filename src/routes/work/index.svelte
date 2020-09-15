<script context="module">
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import {
    center,
    secP,
    sp96,
    leftP
  } from "../../../static/style/Variables.js";
  import {
    display1,
    display2,
    subHeading
  } from "../../../static/style/Title.js";

  //compornents
  import AppTwoColumnWide from "../../components/organisms/AppTwoColumnWide.svelte";
  import AppSlide from "../../components/organisms/AppSlide.svelte";
  import AppBreadcrumbs from "../../components/molecules/AppBreadcrumbs.svelte";

  //function
  export function preload({ params, query }) {
    return this.fetch(`work.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import { onMount } from "svelte";
  export let posts;

  onMount(async () => {
    const res = await fetch(`work.json`);
    posts = await res.json();
  });

  // let name = 'デザイン';

  // $: console.log(name);//リアクティブになった時点でコンソールで表示

  // async function handleChange() {
  //   posts = await fetchPost(name);
  // }

  // onMount(async () => {
  // 	books = await fetchBooks(name);
  // 	// const res = await fetch(`work.json`);
  // 	posts = await fetchPost(name);
  // });

  // async function fetchPost(searchText){//searchTextでかけるように
  // 	const res = await fetch(`work.json?q=${searchText}`);
  // 	return await res.json().then(response => response.items);
  // }

  //animation

  //meta
  const metadata = {
    title: "work | murakami naomi portfolio site",
    description: "過去のWEBサイト、LPOなどの制作実績一覧です。",
    imageAlt: "過去のWEBサイト、LPOなどの制作実績一覧です。",
    url: "/work"
  };

  let breds = [
    {
      id: 1,
      title: "TOP",
      link: "/"
    },
    {
      id: 2,
      title: "WORK",
      link: "/work"
    }
  ];

  const work = css`
    background: ${Color.Gray200};
    ${rem(13)};
  `;

  const workBlock = css`
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

  const workBox = css`
    ${mq[1]} {
    }
  `;

  const workContainer = css`
    list-style: none;
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

    ${mq[1]} {
      ${rem(14)};
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, 240px);
    }

    ${mq[2]} {
      max-width: ${breakpoints[2]}px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
    }
  `;

  const item = css`
    ${rem[14]};
    background: ${Color.White};
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
    padding: 1em;
    text-decoration: none;

    ${mq[1]} {
      padding: 1.875em;
    }
  `;
  export const largeT = css`
    grid-column: 1/3;
    grid-row: auto;
  `;

  const large1 = css`
    ${largeT};
    ${mq[1]} {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
  `;
  const large2 = css`
    ${largeT};
    ${mq[1]} {
      grid-column: 3 / 5;
    }
  `;
  const large3 = css`
    ${largeT};
    ${mq[1]} {
      grid-column: 4 / 5;
      grid-row: 3 / 5;
    }
  `;

  const large4 = css`
    ${largeT};
    ${mq[1]} {
      grid-column: 2 / 4;
    }
  `;

  //////////////////
  const itemText = css`
    order: 3;
    ${rem(11)};
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0.5rem 0 0;

    li {
      background: ${Color.Gray300};
      padding: 0.1em 0.3em;
      margin: 0 0.5rem 0.5rem 0;
    }
  `;

  const itemImg = css`
    width: auto;
    height: auto;
    order: 1;
    margin: 0 auto 0.8rem;
    padding: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  const itemBox = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 4px;
    text-align: center;
    transition: all 0.1s ease-in-out;

    ${mq[1]} {
      &:hover {
        opacity: 0.7;
      }
    }
  `;

  const itemTitle = css`
    order: 2;
    ${subHeading};
  `;
</script>

<style>

</style>

<svelte:head>
  <title>Work | murakami naomi's portfolio site</title>
</svelte:head>

<div class={work}>
  <div class={workBlock}>
    <h1 class={display2}>work</h1>

    <div class={workBox}>

      <div class={workContainer}>
        {#each posts as post}
          <a class={item} href="work/{post.slug}" rel="prefetch">
            <div class={itemBox}>

              <h3 class={itemTitle}>{post.title}</h3>
              <figure class={itemImg}>
                <img src={post.thum} alt={post.title} />
              </figure>
              <ul class={itemText}>
                {@html post.despriction}
              </ul>
              <div />
            </div>
          </a>
        {:else}
          <div>loading...:)</div>
        {/each}
      </div>
    </div>

  </div>

  <AppBreadcrumbs {breds} />
</div>
