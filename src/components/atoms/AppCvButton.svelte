<script>
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";

  //compornents

  //variables
  export let type = "button";
  export let areaLabel = "";
  export let className = "primary";
  export let onClick = "";

  //style

  function base(bg = Color.Text100, color = Color.White) {
    return {
      content: "''",
      maxWidth: "320px",
      height: "40px",
      textAlign: "center",
      margin: "auto",
      background: bg,
      color: color
    };
  }

  const primary = css`
    ${base(Color.Gray400,Color.Text100)};
  `;

  const secondary = css`
    ${base(Color.Gray400,Color.Text100)};
  `;


</script>

<style>
  /* もっといい書き方をしたい*/

  .primary{
    --btn-color: #2AC7C9;
    --btn-color-hover: #FDFDFD;
    color: var(--btn-color-hover);
    display: block;
    width: auto;
    padding: 8px 16px;
    letter-spacing: .04em;
    text-align: center;
    margin: auto;
    font-family: urw-din, sans-serif;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    background-color: var(--btn-color);
    box-shadow: 0px 6px 10px 6px rgba(0,0,0,0.1);
    transition: all .3s;
  }

  .primary span {
    text-decoration: inherit;
  }

  .primary:hover {
    color: var(--btn-color);
    background-color: var(--btn-color-hover);
  }

  .primary:active {
    background-color: var(--btn-color);
  }

 .secondary{
    --btn-color: #222;
    --btn-color-back: #FDFDFD;
    --btn-color-hover: #2AC7C9;
    color: var(--btn-color);
    display: block;
    width: auto;
    padding: 8px 16px;
    letter-spacing: .04em;
    text-align: center;
    margin: auto;
    font-family: urw-din, sans-serif;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    border: 2px solid var(--btn-color);
    transition: all .3s;
  }

  .secondary span {
    text-decoration: inherit;
  }

  .secondary:hover {
    color: var(--btn-color-back);
    background-color: var(--btn-color-hover);
    border: 2px solid var(--btn-color-hover);
    box-shadow: 0px 6px 10px 6px rgba(0,0,0,0.1);
  }

  .secondary:active {
    background-color: var(--btn-color);
    color: var(--btn-color-back);
  }

  @media (min-width: 480px) {
		.primary , .secondary {
      font-size: 24px;
		}
	}


</style>

<button class={className} {type} aria-label={areaLabel} onclick={onClick}><span>{areaLabel}</span></button>
