<script>
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import { center, secP, sp96, leftP } from "../../../static/style/Variables.js";

  //compornents
  import AppBreadcrumbsItem from "../../components/atoms/AppBreadcrumbsItem.svelte";

  //variables
  export let breds = [];
  console.log(breds);

  //style
  const breadcrumbs = css `
    padding-bottom: 8px;
    ${sp96};
    ${leftP};
    margin: 40px auto 0;

    ${mq[1]} {
      margin-top: 120px;
      width: auto;
    }

    ul{
      display: flex;
      ${rem(9)};
      list-style-type: none;
      font-weight: bold;
      margin-bottom: 0;

      ${mq[1]} {
        ${rem(10)};
		  }
    }
  `;


</script>
<style>
</style>


  <nav aria-label="breadcrumbs" class={breadcrumbs}>
    <ul>
      {#each breds as bred (bred.id)}
        <AppBreadcrumbsItem {...bred}/>
      {/each}
    </ul>
  </nav>
