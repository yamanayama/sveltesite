<script>
  //common
  import { css } from "emotion";
  import { mq } from "../../../static/style/Base.js";

  //compornents
  import AppHeadBox from "../../components/molecules/AppHeadBox.svelte";
  import AppHeadLogo from "../../components/atoms/AppHeadLogo.svelte";

  //variables

  //style
  const header = css`

    width: 100%;
    background: rgba(255,255,255,0.8);

    ${mq[1]} {
      position: fixed;
      z-index: 100;
      width: 180px;
      background: none;
    }

    ${mq[2]} {
      width: 240px;
    }
  `;
</script>

<div class={header}>
  <AppHeadBox />
</div>
