const posts = [{
		title: '人工芝専門店 芝助',
		slug: 'shibasuke',
		time: '2019/03',
		thum: '../../../images/works/works_thum01.jpg',
		hero: '../../../images/works/works_hero01.jpg',
		despriction: '<li>WEBデザイン</li><li>ロゴ制作</li><li>イラスト</li><li>ノベルティ</li>',
		html: `
			<h2>あとでちゃんとかく</h2>
			<p>あとでちゃんとかく</p>
		`
	},

	{
		title: '児童デイサービス ハートシップ',
		slug: 'heartsite',
		time: '2018/10',
		thum: '../../../images/works/works_thum03.jpg',
		hero: '../../../images/works/works_hero03.jpg',
		despriction: `<li>コーディング</li><li>WordPress</li>`,
		html: `
			<h2>あとでちゃんとかく</h2>
			<p>あとでちゃんとかく</p>
		`
	},

	{
		title: 'ヒマリ',
		slug: 'himari',
		time: '2019/06 〜',
		thum: '../../../images/works/works_thum02.jpg',
		hero: '../../../images/works/works_hero02.jpg',
		despriction: `<li>ワイヤー制作</li><li>UI設計</li><li>ユーザーインタビュー</li><li>LPO</li>`,
		html: `
			<h2>あとでちゃんとかく</h2>
			<p>あとでちゃんとかく</p>
		`
	}

	// {
	// 	title: '芝助 名刺制作',
	// 	slug: 'shibasukemeisi',
	// 	time: '2019/05',
	// 	thum: '../../../images/works/works_thum04.jpg',
	// 	hero: '../../../images/works/works_hero04.jpg',
	// 	despriction: `<li>ノベルティ制作</li>`,
	// 	html: `
	// 		<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

	// 		<ul>
	// 			<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
	// 			<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
	// 			<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
	// 			<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
	// 		</ul>
	// 	`
	// },
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
