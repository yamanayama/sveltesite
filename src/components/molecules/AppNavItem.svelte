<script>
  //common
  import { css } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";

  //variables
  export let segment;
  export let type = "none";

  let attr = {
    none: {
      caption: "",
      segment: "undefined"
    },
    home: {
      caption: "home",
      link: "/",
      segment: "undefined"
    },
    about: {
      caption: "about",
      link: "about",
      segment: "about"
    },
    work: {
      caption: "work",
      link: "work",
      segment: "work"
    },
    blog: {
      caption: "blog",
      link: "blog",
      segment: "blog"
    },
    contact: {
      caption: "contact",
      link: "/#contact",
      segment: "contact"
    }
  };

  //style
  const current = css`
    content: '';
    text-transform: uppercase;
    font-family: ${Color.FontFamilyEng100};
  `;

  const link = css`
    text-decoration: none;
    font-weight: bold;
    color: ${Color.White};

    ${mq[1]} {
      color: ${Color.Text100};
    }

    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }
  `;

</script>

<style>
	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}
</style>

<li class={current}>
  <a
    class={link}
    rel="prefetch"
    aria-current={segment === attr[type].segment ? attr[type].caption : undefined}
    href={attr[type].link}>
    {attr[type].caption}
  </a>
</li>
