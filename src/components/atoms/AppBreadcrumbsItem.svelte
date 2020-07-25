<script>
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import { center, secP, sp96, leftP } from "../../../static/style/Variables.js";

  //compornents

  //variables
  export let title = "";
  export let link = "";


  //style
  const bredItem = css`
    position: relative;
    margin-right: 2rem;

    &:not(:last-of-type){
      &::before{
        position: absolute;
        top: 50%;
        right: -1rem;
        width: 8px;
        height: 8px;
        border: 0;
        border-top: 2px solid ${Color.Text100};
        border-right: 2px solid ${Color.Text100};
        content: "";
        transform: translateY(-50%) rotate(45deg);
      }
    }
  `

</script>



<style>
  .bredlink {
    text-decoration: none;
  }
</style>

<li class={bredItem}><a href={link} class="bredlink">{title}</a></li>
