<script context="module">
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import {
    center,
    secP,
    sp96,
    leftP,
    maxW
  } from "../../../static/style/Variables.js";
  import {
    display1,
    display2,
    mainHeading,
    Body
  } from "../../../static/style/Title.js";

  //compornents
  import AppBreadcrumbs from "../../components/molecules/AppBreadcrumbs.svelte";
  import AppCvButton from "../../components/atoms/AppCvButton.svelte";

  export async function preload({ params, query }) {
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
    },
    {
      id: 3,
      title: post.title,
      link: "#"
    }
  ];

  //style
  const work = css`
    background: ${Color.Gray200};
  `;

  const workBlock = css`
    padding-top: 24px;
    ${Body};

    ${mq[1]} {
      padding-top: 24%;
    }
  `;

  const workTitle = css`
    ${display2};
    ${leftP};
    margin: 0 auto 1rem;
    width: 96%;

    ${mq[1]} {
      display: none;
    }
  `;

  const workSubTitle = css`
    ${rem(18)};
    margin: 0 auto 1.5rem;
    padding: 0.8em 0.5em;
    background: ${Color.Gray200};

    ${mq[1]} {
    }
  `;

  const workBox = css`
    background: ${Color.White};
    position: relative;
    z-index: 2;
    margin-bottom: 40px;
    ${leftP};

    ${mq[1]} {
      width: calc(100% - 180px);
    }

    ${mq[2]} {
      width: 100%;
      ${maxW}
      margin-bottom: 80px;
    }
  `;

  const workImg = css`
    width: 100%;
    height: 240px;

    img {
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

  const workBody = css`
    padding: 24px 16px;

    ${mq[1]} {
      padding: 4rem;
    }
  `;

  const workTime = css`
    font-weight: bold;
    color: ${Color.Gray400};
  `;

  const workText = css`
    margin-top: 24px;

    ${mq[1]} {
      margin-top: 56px;
    }

    > h3 {
      margin: 1.5em 0 0.3em;
    }
  `;

  const itemTitle = css`
    ${display1};
  `;

  const back = css`
    margin: 16px auto 24px;

    ${mq[1]} {
      margin: 24px auto 32px;
    }
  `;

  const itemText = css`
    order: 3;
    ${rem(11)};
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 2rem 0 0;

    li {
      background: ${Color.Gray300};
      padding: 0.1em 0.3em;
      margin: 0 0.5rem 0.5rem 0;
    }
  `;
</script>

<svelte:head>
  <title>{post.title} | murakami naomi's portfolio site</title>
</svelte:head>
<div class={work}>
  <div class={workBlock}>
    <h2 class={workTitle}>work</h2>
    <div class={workImg}>
      <img src={post.hero} alt={post.title} width="763" height="318" />
    </div>
    <div class={workBox}>
      <div class={workBody}>
        <h1 class={itemTitle}>{post.title}</h1>
        <time class={workTime}>RELEASE : {post.time}</time>
        <p class={workTime}>{post.url}</p>
        <div class={workText}>
          <h2 class={workSubTitle}>制作のPOINT</h2>
          {@html post.html}
          <h3>Good</h3>
          {@html post.good}
          <h3>Try</h3>
          {@html post.try}
        </div>
        <ul class={itemText}>
          {@html post.despriction}
        </ul>
      </div>
    </div>
  </div>
  <div class={back}>
    <AppCvButton
      type="button"
      areaLabel="BACK"
      className="secondary"
      onClick="history.back()" />
  </div>

  <AppBreadcrumbs {breds} />
</div>
