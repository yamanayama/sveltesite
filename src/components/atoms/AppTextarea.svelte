<script>
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import { Body } from "../../../static/style/Title.js";
  import { center, secP, sp96 } from "../../../static/style/Variables.js";

  export let name = "";
  export let placeholder = "";
  export let row = "";
  export let cols = "";

  //style

  const text = css`
    background: ${Color.Gray200};
    line-height: 2;
    ${Body};
    width: 100%;
    height: 80px;
    margin-bottom: 24px;
    padding: 8px;

    ${mq[1]}{
      height: 120px;
      padding: 18px;
      max-width: 560px;
    }

  `;
</script>

<style>
  textarea {
    border-radius: 0;
    transition-duration: 0.4s;
  }

  ::placeholder {
    color: gray;
  }

</style>

<textarea {name} {placeholder} class={text} row={row} cols={cols} />
