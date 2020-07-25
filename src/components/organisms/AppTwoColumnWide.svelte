<script>
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import { center, secP, sp96 } from "../../../static/style/Variables.js";
  import { display1,Body } from "../../../static/style/Title.js";

  //compornents
  // import AppTitle from "../components/atoms/itle.svelte";

  //variables
  // export let point;
  export let img = "";
  export let title = "";
  export let despriction = "";
  export let body = "";

  //style

  const pointBlock = css`
    margin-bottom: 40px;

    ${mq[1]} {
      margin-bottom: 240px;
    }

    ${mq[2]} {
      margin-bottom: 320px;
    }

    &:nth-of-type(2) {
      ${mq[1]} {
        .css-1tis47d {
          flex-direction: row-reverse;
          color: ${Color.White};
        }

        .css-1bzbwvq {
          background: ${Color.Gray500};
          color: ${Color.White};
        }

        .css-dwvb5m {
          color: ${Color.White};
        }

        .css-vvkee3{
          left: 0;
        }
      }
    }
  `;

  const pointItem = css`
    ${mq[1]} {
      display: flex;
      justify-content: space-between;
      align-items: start;
      position: relative;
    }
  `;

  const pointBody = css`
    text-align: left;
    padding: 0 0 16px;

    ${mq[1]} {
      padding: 48px 56px;
      background: ${Color.White};
      width: 46%;
    }
  `;

  const pointImage = css`
    text-align: left;
    width: 100%;
    height: 180px;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${mq[1]} {
      position: absolute;
      top: 40px;
      bottom: 0;
      right: 0;
      padding: 16px 24px;
      width: calc(64% - 16px);
      z-index: -1;

      img{
        width: 100%;
        height: auto;
      }
    }
  `;
</script>

<style>
  /* .pointBlock:nth-child(2n + 1) .pointItem {
    flex-direction: row-reverse;
    display: flex;
  }

  .pointItem {
  } */
</style>

<div class={pointBlock}>
  <div class={pointItem}>
    <section class={pointBody}>
      <h3 class={display1}>{title}</h3>
      <p class={Body}>{body}</p>
    </section>
    <div class={pointImage}>
      <img src={img} alt={despriction} />
    </div>
  </div>
</div>
