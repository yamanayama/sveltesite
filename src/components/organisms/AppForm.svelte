<script>
  //common
  import { css, keyframes } from "emotion";
  import Color from "../../../static/style/Color.js";
  import { mq, rem, breakpoints } from "../../../static/style/Base.js";
  import { center, secP, sp96 } from "../../../static/style/Variables.js";
  import { display1 } from "../../../static/style/Title.js";

  //compornents
  import AppInput from "../../components/atoms/AppInput.svelte";
  import AppTextarea from "../../components/atoms/AppTextarea.svelte";
  import AppCvButton from "../../components/atoms/AppCvButton.svelte";
  import { formUser } from "../../store/stores.js";

  //variables

  //style
  const formBlock = css`
    margin: 0 auto 24px;

		${mq[1]} {
			max-width: ${breakpoints[1]}px;
      margin-bottom: 40px;
      display: grid;
      grid-template-columns: 20% 80%;
      grid-column-gap: 18px;
      grid-row-gap: 18px;
      align-items: center;
		}
  `;

  const formAside = css`
    ${rem(10)};
    text-align: center;
    padding-top: 16px;
  `;

  const label = css`
    font-weight: bold;
    margin-bottom: 8px;
    display: block;

    ${mq[1]}{
      margin-bottom: 0;
    }
  `;
</script>

<style>
</style>

<form name="contact" method="POST" data-netlify="true">
  <div class={formBlock}>
    <label class={label}>Nome</label>
    <AppInput type="text" name="name" placeholder={$formUser.name} />
    <label class={label}>E-mail</label>
    <AppInput type="text" name="email" placeholder={$formUser.email} />
    <label class={label}>Comment</label>
    <AppTextarea name="message" placeholder={$formUser.text} row={8} cols={40} />
  </div>
  <AppCvButton type="submit" areaLabel="SUBMIT" className="primary"/>
  <aside class={formAside}>確認画面は出ません。ご注意ください。</aside>
</form>

<!-- <p>{JSON.stringify($formUser, 0, 2)}</p> -->
