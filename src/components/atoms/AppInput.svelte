<script>
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import { Body } from "../../../static/style/Title.js";
  import { center, secP, sp96 } from "../../../static/style/Variables.js";

  export let name = "";
  export let placeholder = "";

  //style

  const text = css`
    background: ${Color.Gray200};
    line-height: 2;
    ${Body};
    width: 100%;
    max-width: 560px;
    height: 60px;
    padding-left: 8px;
    margin-bottom: 24px;

    ${mq[1]}{
      padding-left: 18px;
    }
  `;
</script>

<style>
  input{
    border-radius: 0;
    transition-duration: 0.4s;
  }

  ::placeholder {
    color: gray;
  }

</style>

<input type="text" {name} {placeholder} class={text} />
