<script>
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../static/style/Base.js";
  import {
    center,
    secP,
    sp96,
    leftP,
    maxW
  } from "../../static/style/Variables.js";
  import {
    display1,
    display2,
    mainHeading,
    subHeading,
    Body
  } from "../../static/style/Title.js";

  //compornents
  // import AppTitle from "../components/atoms/itle.svelte";
  import Meta from "./Meta.svelte";
  import AppTwoColumnProf from "../components/organisms/AppTwoColumnProf.svelte";
  import AppSlide from "../components/organisms/AppSlide.svelte";
  import AppCvButton from "../components/atoms/AppCvButton.svelte";
  import AppBreadcrumbs from "../components/molecules/AppBreadcrumbs.svelte";

  //meta
  const metadata = {
    title: "about | murakami naomi portfolio site",
    description: "このポートフォリオサイトの説明と村上奈緒美の紹介です。",
    imageAlt: "名古屋で働くWEBデザイナー村上奈緒美のポートフォリオサイトです",
    url: "/about"
  };

  //variables
  let points = [
    {
      id: 1,
      img: "../images/about/prof_img01.jpg",
      title: "村上 奈緒美",
      despriction: "村上 奈緒美 WEB/UIデザイナー",
      body: `<p>一般職、ゲームイラストレーターを経てWEB業界へきました。<br>
				受託制作会社でWEBデザイナー・コーダー・ディレクター兼任後、株式会社エイチームブライズのデザイナーとして働いています。</p><p>普段はGAなどのデータ分析をもとに、WEBサービスのUI開発でグロースハック、新規開発、LP制作etcを行なっています。</p><p>マークアップ（CSS,アニメーション）が得意で、趣味はフロンエンドの個人開発とマインクラフトの整地です。Vue(Nuxt),Reactは雰囲気を察します。</p><p>画像は村上家の居候のノエル（猫）です。サイト名もこちらから。</p><p>よければこちらの<a href="https://www.figma.com/proto/HNKTD2XKuxknDurvbEbBNK/200507_optimind_murakami?node-id=1%3A84&scaling=min-zoom" target="_blank" rel="noopener noreferrer">自己紹介スライド</a>もどうぞ</p>`
    }
  ];
  let careerTitle = "2020年";
  let careers = [
    {
      id: 1,
      title: careerTitle,
      time: "2020/01/19",
      body: "ヤフー名古屋 TechMeetup デザインを語ろう（セッション）"
      // url: ""
    },
    {
      id: 2,
      title: careerTitle,
      time: "2020/02/15",
      body:
        "バナーワークショップ 現役デザイナーに学ぶ　魅力的なバナーの作り方（講師）"
      // url: ""
    },
    {
      id: 3,
      title: careerTitle,
      time: "2020/06/01",
      body: "なごやデザイナーLT大会（運営サポート）"
      // url: ""
    },
    {
      id: 4,
      title: careerTitle,
      time: "2020/06/25",
      body: "TORIMA LT大会（社内デザイナーイベント運営）"
      // url: ""
    },
    {
      id: 5,
      title: careerTitle,
      time: "2020/06/23",
      body: "社内勉強会　OOUIは銀の弾丸になりうるのか"
      // url:
      //   "https://docs.google.com/presentation/d/1FdBqLdShqsnRdebx4DYZCH5Ei8aOIvi7CdgKI3EQ_TI/edit?usp=sharing"
    },
    {
      id: 6,
      title: careerTitle,
      time: "2020/09/03",
      body: "全社LT大会（登壇＆デザイン制作）"
      // url:
      //   "https://docs.google.com/presentation/d/1FdBqLdShqsnRdebx4DYZCH5Ei8aOIvi7CdgKI3EQ_TI/edit?usp=sharing"
    }
  ];

  let breds = [
    {
      id: 1,
      title: "TOP",
      link: "/"
    },
    {
      id: 2,
      title: "ABOUT",
      link: "#"
    }
  ];

  ////////////////////////////////////////////

  const about = css`
    background: ${Color.Gray200};
    ${Body};
  `;

  const aboutBlock = css`
    ${leftP};
    ${sp96};
    padding: 24px 0 0;

    ${mq[1]} {
      width: calc(100% - 180px);
      ${rem(14)};
    }

    ${mq[2]} {
      width: 100%;
      ${maxW}
    }

    p {
      margin-bottom: 8px;

      ${mq[1]} {
        margin-bottom: 16px;
      }
    }
  `;

  const aboutHero = css`
    margin-bottom: 32px;

    ${mq[1]} {
      margin-bottom: 40px;
    }
  `;

  const aboutBox = css``;

  const aboutBoxSub = css`
		padding: 16px 0 0;

		${mq[1]}
			padding: 48px 0 0;
			${rem(14)};
		}

		${mq[2]} {
			width: ${breakpoints[2]}px;
		}
	`;

  //point
  const point = css`
    position: relative;
    overflow: hidden;
  `;

  const pointBlock = css`
    padding: 4rem 0;

    ${mq[1]} {
      padding: 40px 0;
      ${rem(14)};
    }
  `;

  const pointBackground = css`
    position: absolute;
    top: 80px;
    left: 0;
    height: 100%;
    z-index: -10;
  `;

  const career = css`
    ${leftP};
    ${sp96};

    ${mq[1]} {
      padding-top: 80px;
      width: calc(100% - 180px);
    }

    ${mq[2]} {
      width: ${breakpoints[2]}px;
    }
  `;

  const careerBlock = css`
    margin-top: 8px;
  `;

  const careerList = css`
    margin-top: 8px;

    ${mq[1]} {
      display: flex;
    }

    dd {
      margin-right: 2rem;
      font-weight: bold;
    }
  `;
</script>

<svelte:head>
  <title>About | murakami naomi's portfolio site</title>
</svelte:head>
<Meta {metadata} />

<div class={about}>
  <div class={aboutBlock}>
    <section class={aboutHero}>
      <h1 class={display2}>about</h1>
      <section class={aboutBox}>
        <h2 class={display1}>portfolio with svelte</h2>
        <p>
          こちらは村上奈緒美のポートフォリオです。Svelte（Sapper）+
          Netlifyです。(contentfulはAPI連携がどうにも🙅‍♀️だったので、違うJAMStackで試してみようかな・・
          <br />
          アニメーション、ライフサイクル、storeなど一通りさわっています。
          <br />
          Githubは
          <a
            href="https://github.com/yamanayama/sveltesite"
            target="_blank"
            rel="noopener noreferrer">
            こちら
          </a>
        </p>
        <h3 class={subHeading}>使った技術一通り</h3>
        <ul>
          <li>Svelte(Sapper)</li>
          <li>emotion(CSSinJS)</li>
          <li>Netlify</li>
          <li>ゆるゆるAtomicDesign</li>
        </ul>
        <p>その他、最近の活動記録など載せています。</p>
      </section>

    </section>

    <div class={aboutBoxSub}>
      <section class={point}>
        <h2 class={display2}>profile</h2>
        {#each points as point (point.id)}
          <AppTwoColumnProf {...point} />
        {/each}
      </section>
    </div>
  </div>

  <div class={career}>
    <section class={aboutBox}>
      <h2 class={mainHeading}>登壇履歴(抜粋）</h2>
      <section class={careerBlock}>
        {#each careers as career (career.id)}
          <dl class={careerList}>
            <dd>{career.time}</dd>
            <dt>{career.body}</dt>
          </dl>
        {/each}
      </section>
    </section>
  </div>

  <AppBreadcrumbs {breds} />
</div>
