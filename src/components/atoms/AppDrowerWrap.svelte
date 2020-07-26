<script>
  //common
  import { css } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { fade } from 'svelte/transition';
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import { centerF } from "../../../static/style/Variables.js";

  //compornents
  import AppNavItem from "../../components/molecules/AppNavItem.svelte";
  import Twitter from "../../../static/svg/icon_twitter.svg";
  import Github from "../../../static/svg/icon_github.svg";
  import Instagram from "../../../static/svg/icon_insta.svg";

  //variables
  export let segment;

  //drower
  let open = false;

  //style
  function drawerBase(height = "1px", width = "56%", bg = Color.Text100) {
    return {
      height: height,
      background: bg,
      transition: "all 0.25s ease-out",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      width: width
    };
  }

  const listWrap = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100% - 160px);
    width: 100%;
  `;

  const list = css`
    list-style-type: none;
    text-align: center;
    line-height: 2;
    margin-top: 48px;
    margin-left: 0;
  `;

  //open
  const drawer = css`
    cursor: pointer;
    display: inline-block;
    height: 48px;
    width: 48px;
    position: relative;
  `;

  const drawerBorder = css`
    ${drawerBase()}

    &::before,
    &::after {
      content: "";
      ${drawerBase("100%", "100%")}
    }

    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 50%;
      tranform: translateX(-50%);
      background: ${Color.Text100};
      z-index: 1000;
      margin-top: -32%;
    }

    &::after {
      margin-top: 32%;
    }
  `;

  //close
    const drawerClose = css`
    cursor: pointer;
    display: inline-block;
    height: 48px;
    width: 48px;
    position: relative;
  `;

  const drawerCloseBorder = css`
    ${drawerBase("1px", "56%", "none")}

    &::before,
    &::after {
      content: "";
      ${drawerBase("100%", "100%", Color.White)}
    }

    &::before {
      transform: translate(-50%,-50%) rotateZ(-135deg);
    }

    &::after {
      transform: translate(-50%,-50%) rotateZ(135deg);
    }
  `;

  const nav = css`
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${Color.Gray500};
    z-index: 1000;
    padding: 8px 16px;
    ${rem(30)};
  `;

  const titleWrap = css`
    position:relative;

    &::before{
      content: '';
      position: absolute;
      height: 2px;
      width: 32px;
      left: 50%;
      bottom: -24px;
      transform: translateX(-50%);
      background: ${Color.White};
    }
  `;

  const title = css`
    position: relative;
    ${rem(10)}
    color: ${Color.White};
    letter-spacing: .2em;
    font-family: ${Color.FontFamilyEng100};
    text-align: center;
    font-weight: bold;
  `;

  const sns = css`
    display: flex;

    a {
      color: ${Color.White};

      &:not(:last-of-type){
        margin-right: 16px;
      }
    }
  `;
</script>

<button class={drawer} for="header-switch" on:click={() => (open = !open)}>
  <span class={drawerBorder} />
</button>

{#if open}

  <div class={nav} in:fade="{{duration: 100}}" out:fade="{{duration: 100}}">
    <button class={drawerClose} for="header-switch" on:click={() => (open = !open)}>
      <span class={drawerCloseBorder} />
    </button>
    <div class={listWrap}>
      <div class={titleWrap}>
        <p class={title}>Hello,Noel</p>
        <p class={title}>murakami naomi's portfolio</p>
      </div>

      <div>
        <ul class={list} on:click={() => (open = !open)}>
          <AppNavItem {segment} type="home" value="" />
          <AppNavItem {segment} type="about" value=""/>
          <AppNavItem {segment} type="work" value=""/>
          <AppNavItem {segment} type="blog" value=""/>
          <AppNavItem {segment} type="contact" value=""/>
        </ul>
      </div>
      <div class={sns}>
        <a href="https://twitter.com/yamanayama" taregt="_blank" rel="noopener noreferrer"><Twitter width="32" height="32" /></a>
        <a href="https://github.com/yamanayama/" target="_blank" rel="noopener noreferrer"><Github width="32" height="32" /></a>
        <a href="https://www.instagram.com/hello.noel.the.cat/" target="_blank" rel="noopener noreferrer"><Instagram width="32" height="32" /></a>
      </div>
    </div>

  </div>

{/if}
