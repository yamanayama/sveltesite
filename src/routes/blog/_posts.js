const posts = [{
		title: 'リリースしました',
		slug: 'firstrelease',
		time: '2020/07/26',
		hero: '../../../images/works/works_hero01.jpg',
		despriction: '<li>NEWS</li>',
		html: `
			<p>ポートフォリオサイトリリースしました。Githubは💁‍♀️<a href="https://github.com/yamanayama/sveltesite" target="_blank" rel="noopener noreferrer">こちら</a></p>

			<p>Svelte（Sapper）+ Netlifyです。(contentfulはAPI連携がどうにも🙅‍♀️だったので、違うJAMStackで試してみようかな・・<br>アニメーション、ライフサイクル、storeなど一通りさわっています。</p>
			<h3 class={subHeading}>使った技術一通り</h3>
			<ul>
				<li>Svelte(Sapper)</li>
				<li>emotion(CSSinJS)</li>
				<li>Netlify</li>
				<li>ゆるゆるAtomicDesign</li>
			</ul>
			<p>反省として、コンポーネントが分離できなかった点と、スタイル（emotion)が無理くりになってしまった点ですね。<br>Svelteはスタイル管理が不便に感じたので、またブログやQiitaに書きます。<br>また、pagesコンポーネントでロジック、スタイルと長く作りすぎたので、状態管理はstoreにもっと移行していきます…(´ω｀)</p></p>

			<p>これからアニメーション追加していくぞ〜💪</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
