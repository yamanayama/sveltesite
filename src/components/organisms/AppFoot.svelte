<script>
  //common
  import { css } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import { center, secP, sp96, leftP } from "../../../static/style/Variables.js";

  //compornents
  import AppFootText from "../../components/atoms/AppFootText.svelte";

  //style
  const footer = css`
    padding: 2rem;
    background: #1f4954;

    ${mq[1]} {
      padding: 4rem;
    }
  `;
</script>

<style>

</style>

<footer class={footer}>
  <AppFootText />
</footer>
