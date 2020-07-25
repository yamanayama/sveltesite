<script>
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../static/style/Base.js";
  import { center, secP, sp96, leftP } from "../../static/style/Variables.js";
  import { display1, display2, mainHeading, Body } from "../../static/style/Title.js";

  //compornents
  // import AppTitle from "../components/atoms/itle.svelte";
  import Meta from './Meta.svelte'
  import AppTwoColumnWide from "../components/organisms/AppTwoColumnWide.svelte";
  import AppSlide from "../components/organisms/AppSlide.svelte";
  import AppForm from "../components/organisms/AppForm.svelte";
  import AppCvButton from "../components/atoms/AppCvButton.svelte";

  //meta
  const metadata = {
		title: 'Hello Noel | murakami naomi portfolio site',
		description: '名古屋で働くWEBデザイナー村上奈緒美のポートフォリオサイトです。WEB制作、UIUX、フロントエンドの実績や登壇資料をアップしています。',
		image: '../../../static/images/common/ogp.jpg',
		imageAlt: '名古屋で働くWEBデザイナー村上奈緒美のポートフォリオサイトです',
		url:''
  }

  //variables
  let points = [
    {
      id: 1,
      img: "../images/top/point_img01.jpg",
      title: "UI/UX",
      despriction: "UI/UX",
      body:
        "ワイヤー制作、UI設計、ユーザーインタビュー、LPO、デザインガイドライン作成など幅広く対応できます。受託制作でCMSデザインを経験し、インハウスでサービスUI、LPOでPDCAを回しながら、スタートアップならではDPCAも展開中です。UX勉強中。"
    },
    {
      id: 2,
      img: "../images/top/point_img02.jpg",
      title: "frontend",
      despriction: "frontend",
      body:
        "マークアップ、スタイルからCSSアニメーション、JSフレームワーク制作まで行います。セマンティックで秩序あるコーディングを行います。アクセシビリティやりたい勢です。"
    },
    {
      id: 3,
      img: "../images/top/point_img03.jpg",
      title: "marketing",
      despriction: "marketing",
      body: "GAなどの解析"
    }
  ];

  let works = [
    {
      id: Math.random(),
      link: "/work/shibasuke",
      img: "../images/works/works_thum01.jpg",
      title: "人工芝専門店 芝助",
      despriction: "WEBサイト・ノベルティ制作"
    },
    {
      id: Math.random(),
      link: "",
      img: "../images/works/works_thum02.jpg",
      title: "himari",
      despriction: "サイト改善"
    },
    {
      id: Math.random(),
      link: "",
      img: "../images/works/works_thum03.jpg",
      title: "児童デイサービス ハートシップ",
      despriction: "WEBサイト（コーディング）"
    }
  ];
  //style

  //animation
  const scrollBar = keyframes`
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(40px,0);
      opacity: 0;
  `;

  //hero
  const hero = css`
    ${leftP};
    background: ${Color.Secondary};
    height: 90vh;
    position: relative;
  `;

  const heroImg = css`
    width: 72vmin;
    height: 120vmin;
    border: 4px solid ${Color.White};
    margin: auto;
    ${center("xy")};

    ${mq[1]} {
      width: 40vmin;
      height: 68vmin;
    }
  `;

  const heroBody = css`
    text-align: left;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    ${rem(10)};
    font-family: ${Color.FontFamilyEng100};

    ${mq[1]} {
      left: -12vmin;
      bottom: -2rem;
    }
  `;

  function scrollLine(bg = Color.Text100, left = "3rem") {
    return {
      content: "''",
      width: "80px",
      height: "1px",
      position: "absolute",
      top: "14px",
      left: left,
      background: bg
    };
  }

  const scroll = css`
    transform: rotate(90deg);
    position: absolute;
    right: 8px;
    bottom 80px;
    ${rem(14)};
    font-family: ${Color.FontFamilyEng100};
    text-transform: capitalize;
    font-weight: bold;

    &::after{
      ${scrollLine(Color.Text100, "3rem")};
      animation: ${scrollBar} 1.2s infinite;
    }
  `;

  //vision
  const vision = css`
    ${sp96};
    padding: 4rem 0;
    position: relative;
    ${leftP};

    ${mq[1]} {
      max-width: ${breakpoints[2]}px;
      padding: 120px 0;
      display: flex;
      ${rem(14)};
    }

    &::before {
      content: "portfolio";
      font-family:  ${Color.FontFamilyEng100};
      position: absolute;
      top: -8px;
      right: 0;
      text-transform: uppercase;
      font-weight: bold;
      color: ${Color.Gray200};
      z-index: -1;
      ${rem(40)}
      line-height: 1;

      ${mq[1]} {
        ${rem(80)}
        top: -18px;
      }
    }
  `;

  const visionCopy = css`
    line-height: 1;
    ${rem(60)}
    font-family: ${Color.FontFamilyEng100};
    text-transform: uppercase;
    font-weight: bold;
    margin: 0 4rem 2rem 0;

      br {
        display: none;

        ${mq[1]} {
          display: block;
        }
      }

    span{
      background: ${Color.White};

      ${mq[1]} {
        padding: 0 .1em;
      }

      &:nth-of-type(2){
        -webkit-text-stroke: .02em ${Color.Text100};
        color: ${Color.White};
      }
    }

    ${mq[1]} {
      ${rem(140)}
    }
  `;

  const visionTitle = css`
    ${display1}
  `;

  const visionBody = css`
    ${Body}
    margin-bottom: 16px;
  `;

  //point
  const point = css`
    position: relative;
    overflow: hidden;
  `;

  const pointBlock = css`
    ${sp96};
    padding: 4rem 0;
    ${leftP};

    ${mq[1]} {
      max-width: ${breakpoints[2]}px;
      padding: 120px 0;
      ${rem(14)};
    }
  `;

  const pointBackground = css`
    position: absolute;
    top: 40px;
    left: 0;
    width: 50%;
    background-color: #f2f3f4;
    height: 100%;
    z-index: -10;

    ${mq[1]} {
      top: 80px;
    }
  `;

  //works
  const work = css`
    width: 100%;
  `;

  const workWrap = css`
    ${sp96};
    ${leftP};
    padding: 4rem 0;

    ${mq[1]} {
      max-width: ${breakpoints[2]}px;
      padding: 120px 0;
      ${rem(14)};
    }
  `;

  //contact
  const contact = css`
    width: 100%;
  `;

  const contactTitle = css`
    text-align: center;
    ${display1}
  `;

  const contactWrap = css`
    ${sp96};
    ${leftP};
    padding: 4rem 0;

    ${mq[1]} {
      max-width: ${breakpoints[2]}px;
      padding: 120px 0;
      ${rem(14)};
    }
  `;
</script>

<style>
.parallax {
  background-image: url('../images/top/parallax.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 8%;
  height: 100%;
}
</style>

<svelte:head>
  <title>Hello Noel | murakami naomi's portfolio site</title>
</svelte:head>

<Meta {metadata}/>

<div class={hero}>
  <div class={heroImg}>
    <p class={heroBody}>
      Web/UI Design,
      <br />
      UX,
      <br />
      Frontend,
      <br />
      Illustration
    </p>
  </div>
  <div class={scroll}>scroll</div>
</div>

<div class={vision}>
  <div class={visionCopy}>
    <span>my</span>
    <br />
    <span>vision</span>
  </div>
  <section class="visionBlock">
    <h2 class={visionTitle}>
      サービスと技術を繋ぐ
      <br />
      ヒトとモノを繋ぐ
    </h2>
    <div class={visionBody}>
      <p>aaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <p>
        aaaaaaaaaaaaaaaaaaaaaaaab
        <br />
        aaaaaaaaaaaa
      </p>
    </div>
  </section>
</div>

<div class={point}>
  <div class={pointBackground} />
  <section class={pointBlock}>
    <h2 class={display2}>skills</h2>

    {#each points as point (point.id)}
      <AppTwoColumnWide {...point} />
    {/each}
  </section>
</div>

<div class="parallax"></div>

<div class={work}>
  <section class={workWrap}>
    <h2 class={display2}>works</h2>
    <AppSlide {works} />
  </section>
</div>

<div class={contact} id="contact">
  <section class={contactWrap}>
    <h2 class={contactTitle}>contact</h2>
    <AppForm />
  </section>
</div>
