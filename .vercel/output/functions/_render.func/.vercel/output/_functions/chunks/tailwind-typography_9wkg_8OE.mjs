import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DtPkZ9WL.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<blockquote>\n<p>This article is from <a href=\"https://tailwindcss-typography.vercel.app/\">TailwindLabs</a>. I put this article to demonstrate how you can write blog posts/articles using AstroPaper theme.</p>\n</blockquote>\n<p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>\n<p>We get lots of complaints about it actually, with people regularly asking us things like:</p>\n<blockquote>\n<p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?\nWe hear you, but we’re not convinced that simply disabling our base styles is what you really want. You don’t want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p>\n</blockquote>\n<p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p>\n<p>It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#ABB2BF\">&#x3C;</span><span style=\"color:#E06C75\">article</span><span style=\"color:#D19A66\"> class</span><span style=\"color:#ABB2BF\">=</span><span style=\"color:#98C379\">\"prose\"</span><span style=\"color:#ABB2BF\">></span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">  &#x3C;</span><span style=\"color:#E06C75\">h1</span><span style=\"color:#ABB2BF\">>Garlic bread with cheese: What the science tells us&#x3C;/</span><span style=\"color:#E06C75\">h1</span><span style=\"color:#ABB2BF\">></span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">  &#x3C;</span><span style=\"color:#E06C75\">p</span><span style=\"color:#ABB2BF\">></span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">    For years parents have espoused the health benefits of eating garlic bread</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">    with cheese to their children, with the food earning such an iconic status</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">    in our culture that kids will often dress up as warm, cheesy loaf for</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">    Halloween.</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">  &#x3C;/</span><span style=\"color:#E06C75\">p</span><span style=\"color:#ABB2BF\">></span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">  &#x3C;</span><span style=\"color:#E06C75\">p</span><span style=\"color:#ABB2BF\">></span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">    But a recent study shows that the celebrated appetizer may be linked to a</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">    series of rabies cases springing up around the country.</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">  &#x3C;/</span><span style=\"color:#E06C75\">p</span><span style=\"color:#ABB2BF\">></span></span>\n<span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">  &#x3C;!-- ... --></span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">&#x3C;/</span><span style=\"color:#E06C75\">article</span><span style=\"color:#ABB2BF\">></span></span>\n<span class=\"line\"></span></code></pre>\n<p>For more information about how to use the plugin and the features it includes, <a href=\"https://github.com/tailwindcss/typography/blob/master/README.md\">read the documentation</a>.</p>\n<hr>\n<h2 id=\"what-to-expect-from-here-on-out\">What to expect from here on out</h2>\n<p>What follows from here is just a bunch of absolute nonsense I’ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>\n<p>It’s important to cover all of these use cases for a few reasons:</p>\n<ol>\n<li>We want everything to look good out of the box.</li>\n<li>Really just the first reason, that’s the whole point of the plugin.</li>\n<li>Here’s a third pretend reason though a list with three items looks more realistic than a list with two items.</li>\n</ol>\n<p>Now we’re going to try out another header style.</p>\n<h3 id=\"typography-should-be-easy\">Typography should be easy</h3>\n<p>So that’s a header for you — with any luck if we’ve done our job correctly that will look pretty reasonable.</p>\n<p>Something a wise person once told me about typography is:</p>\n<blockquote>\n<p>Typography is pretty important if you don’t want your stuff to look like trash. Make it good then it won’t be bad.\nIt’s probably important that images look okay here by default as well:</p>\n</blockquote>\n<figure>\n  <img src=\"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&#x26;ixid=eyJhcHBfaWQiOjEyMDd9&#x26;auto=format&#x26;fit=crop&#x26;w=1000&#x26;q=80\" alt=\"\">\n  <figcaption>\n    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\n    classical Latin literature from 45 BC, making it over 2000 years old.\n  </figcaption>\n</figure>\n<p>Now I’m going to show you an example of an unordered list to make sure that looks good, too:</p>\n<ul>\n<li>So here is the first item in this list.</li>\n<li>In this example we’re keeping the items short.</li>\n<li>Later, we’ll use longer, more complex list items.</li>\n</ul>\n<p>And that’s the end of this section.</p>\n<h2 id=\"what-if-we-stack-headings\">What if we stack headings?</h2>\n<h3 id=\"we-should-make-sure-that-looks-good-too\">We should make sure that looks good, too.</h3>\n<p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p>\n<h3 id=\"when-a-heading-comes-after-a-paragraph\">When a heading comes after a paragraph …</h3>\n<p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let’s see what a more complex list would look like.</p>\n<ul>\n<li>\n<p><strong>I often do this thing where list items have headings.</strong></p>\n<p>For some reason I think this looks cool which is unfortunate because it’s pretty annoying to get the styles right.</p>\n<p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn’t write this way.</p>\n</li>\n<li>\n<p><strong>Since this is a list, I need at least two items.</strong></p>\n<p>I explained what I’m doing already in the previous list item, but a list wouldn’t be a list if it only had one item, and we really want this to look realistic. That’s why I’ve added this second list item so I actually have something to look at when writing the styles.</p>\n</li>\n<li>\n<p><strong>It’s not a bad idea to add a third item either.</strong></p>\n<p>I think it probably would’ve been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p>\n</li>\n</ul>\n<p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p>\n<h2 id=\"code-should-look-okay-by-default\">Code should look okay by default.</h2>\n<p>I think most people are going to use <a href=\"https://highlightjs.org/\">highlight.js</a> or <a href=\"https://prismjs.com/\">Prism</a> or something if they want to style their code blocks but it wouldn’t hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p>\n<p>Here’s what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E5C07B\">module</span><span style=\"color:#ABB2BF\">.</span><span style=\"color:#E5C07B\">exports</span><span style=\"color:#56B6C2\"> =</span><span style=\"color:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  purge</span><span style=\"color:#ABB2BF\">: [],</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  theme</span><span style=\"color:#ABB2BF\">: {</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">    extend</span><span style=\"color:#ABB2BF\">: {},</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">  },</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  variants</span><span style=\"color:#ABB2BF\">: {},</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  plugins</span><span style=\"color:#ABB2BF\">: [],</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">};</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Hopefully that looks good enough to you.</p>\n<h3 id=\"what-about-nested-lists\">What about nested lists?</h3>\n<p>Nested lists basically always look bad which is why editors like Medium don’t even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.</p>\n<ol>\n<li><strong>Nested lists are rarely a good idea.</strong>\n<ul>\n<li>You might feel like you are being really “organized” or something but you are just creating a gross shape on the screen that is hard to read.</li>\n<li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>\n<li>Nesting tons of folders in your source code is also not helpful.</li>\n</ul>\n</li>\n<li><strong>Since we need to have more items, here’s another one.</strong>\n<ul>\n<li>I’m not sure if we’ll bother styling more than two levels deep.</li>\n<li>Two is already too much, three is guaranteed to be a bad idea.</li>\n<li>If you nest four levels deep you belong in prison.</li>\n</ul>\n</li>\n<li><strong>Two items isn’t really a list, three is good though.</strong>\n<ul>\n<li>Again please don’t nest lists if you want people to actually read your content.</li>\n<li>Nobody wants to look at this.</li>\n<li>I’m upset that we even have to bother styling this.</li>\n</ul>\n</li>\n</ol>\n<p>The most annoying thing about lists in Markdown is that <code>&#x3C;li></code> elements aren’t given a child <code>&#x3C;p></code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p>\n<ul>\n<li>\n<p><strong>For example, here’s another nested list.</strong></p>\n<p>But this time with a second paragraph.</p>\n<ul>\n<li>These list items won’t have <code>&#x3C;p></code> tags</li>\n<li>Because they are only one line each</li>\n</ul>\n</li>\n<li>\n<p><strong>But in this second top-level list item, they will.</strong></p>\n<p>This is especially annoying because of the spacing on this paragraph.</p>\n<ul>\n<li>\n<p>As you can see here, because I’ve added a second line, this list item now has a <code>&#x3C;p></code> tag.</p>\n<p>This is the second line I’m talking about by the way.</p>\n</li>\n<li>\n<p>Finally here’s another list item so it’s more like a list.</p>\n</li>\n</ul>\n</li>\n<li>\n<p>A closing list item, but with no nested list, because why not?</p>\n</li>\n</ul>\n<p>And finally a sentence to close off this section.</p>\n<h2 id=\"there-are-other-elements-we-need-to-style\">There are other elements we need to style</h2>\n<p>I almost forgot to mention links, like <a href=\"https://tailwindcss.com\">this link to the Tailwind CSS website</a>. We almost made them blue but that’s so yesterday, so we went with dark gray, feels edgier.</p>\n<p>We even included table styles, check it out:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Wrestler</th><th>Origin</th><th>Finisher</th></tr></thead><tbody><tr><td>Bret “The Hitman” Hart</td><td>Calgary, AB</td><td>Sharpshooter</td></tr><tr><td>Stone Cold Steve Austin</td><td>Austin, TX</td><td>Stone Cold Stunner</td></tr><tr><td>Randy Savage</td><td>Sarasota, FL</td><td>Elbow Drop</td></tr><tr><td>Vader</td><td>Boulder, CO</td><td>Vader Bomb</td></tr><tr><td>Razor Ramon</td><td>Chuluota, FL</td><td>Razor’s Edge</td></tr></tbody></table>\n<p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&#x3C;span></code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p>\n<h3 id=\"sometimes-i-even-use-code-in-headings\">Sometimes I even use <code>code</code> in headings</h3>\n<p>Even though it’s probably a bad idea, and historically I’ve had a hard time making it look good. This <em>“wrap the code blocks in backticks”</em> trick works pretty well though really.</p>\n<p>Another thing I’ve done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href=\"https://github.com/tailwindcss/docs\"><code>tailwindcss/docs</code></a> repository. I don’t love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.</p>\n<h4 id=\"we-havent-used-an-h4-yet\">We haven’t used an <code>h4</code> yet</h4>\n<p>But now we have. Please don’t use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or <code>h6</code>.</p>\n<p>We don’t style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.</p>\n<h3 id=\"we-still-need-to-think-about-stacked-headings-though\">We still need to think about stacked headings though.</h3>\n<h4 id=\"lets-make-sure-we-dont-screw-that-up-with-h4-elements-either\">Let’s make sure we don’t screw that up with <code>h4</code> elements, either.</h4>\n<p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p>\n<p>Let’s add a closing paragraph here so things end with a decently sized block of text. I can’t explain why I want things to end that way but I have to assume it’s because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p>\n<p>What I’ve written here is probably long enough, but adding this final sentence can’t hurt.</p>";

				const frontmatter = {"title":"Tailwind Typography Plugin","author":"Sat Naing","pubDatetime":"2022-07-05T02:05:51.000Z","featured":false,"draft":false,"tags":["TypeScript","Astro"],"description":"EXAMPLE POST: About Tailwind Typography Plugin and how you can use it effectively."};
				const file = "/Users/kanatbektursyn/Documents/pet/own/src/content/blog/tailwind-typography.md";
				const url = undefined;
				function rawContent() {
					return "\n> This article is from [TailwindLabs](https://tailwindcss-typography.vercel.app/). I put this article to demonstrate how you can write blog posts/articles using AstroPaper theme.\n\nBy default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you _really are_ just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.\n\nWe get lots of complaints about it actually, with people regularly asking us things like:\n\n> Why is Tailwind removing the default styles on my `h1` elements? How do I disable this? What do you mean I lose all the other base styles too?\n> We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a `p` element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look _awesome_, not awful.\n\nThe `@tailwindcss/typography` plugin is our attempt to give you what you _actually_ want, without any of the downsides of doing something stupid like disabling our base styles.\n\nIt adds a new `prose` class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:\n\n```html\n<article class=\"prose\">\n  <h1>Garlic bread with cheese: What the science tells us</h1>\n  <p>\n    For years parents have espoused the health benefits of eating garlic bread\n    with cheese to their children, with the food earning such an iconic status\n    in our culture that kids will often dress up as warm, cheesy loaf for\n    Halloween.\n  </p>\n  <p>\n    But a recent study shows that the celebrated appetizer may be linked to a\n    series of rabies cases springing up around the country.\n  </p>\n  <!-- ... -->\n</article>\n```\n\nFor more information about how to use the plugin and the features it includes, [read the documentation](https://github.com/tailwindcss/typography/blob/master/README.md).\n\n---\n\n## What to expect from here on out\n\nWhat follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like **bold text**, unordered lists, ordered lists, code blocks, block quotes, _and even italics_.\n\nIt's important to cover all of these use cases for a few reasons:\n\n1. We want everything to look good out of the box.\n2. Really just the first reason, that's the whole point of the plugin.\n3. Here's a third pretend reason though a list with three items looks more realistic than a list with two items.\n\nNow we're going to try out another header style.\n\n### Typography should be easy\n\nSo that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.\n\nSomething a wise person once told me about typography is:\n\n> Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.\n> It's probably important that images look okay here by default as well:\n\n<figure>\n  <img\n    src=\"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80\"\n    alt=\"\"\n  />\n  <figcaption>\n    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\n    classical Latin literature from 45 BC, making it over 2000 years old.\n  </figcaption>\n</figure>\n\nNow I'm going to show you an example of an unordered list to make sure that looks good, too:\n\n- So here is the first item in this list.\n- In this example we're keeping the items short.\n- Later, we'll use longer, more complex list items.\n\nAnd that's the end of this section.\n\n## What if we stack headings?\n\n### We should make sure that looks good, too.\n\nSometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.\n\n### When a heading comes after a paragraph …\n\nWhen a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.\n\n- **I often do this thing where list items have headings.**\n\n  For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.\n\n  I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.\n\n- **Since this is a list, I need at least two items.**\n\n  I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.\n\n- **It's not a bad idea to add a third item either.**\n\n  I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.\n\nAfter this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.\n\n## Code should look okay by default.\n\nI think most people are going to use [highlight.js](https://highlightjs.org/) or [Prism](https://prismjs.com/) or something if they want to style their code blocks but it wouldn't hurt to make them look _okay_ out of the box, even with no syntax highlighting.\n\nHere's what a default `tailwind.config.js` file looks like at the time of writing:\n\n```js\nmodule.exports = {\n  purge: [],\n  theme: {\n    extend: {},\n  },\n  variants: {},\n  plugins: [],\n};\n```\n\nHopefully that looks good enough to you.\n\n### What about nested lists?\n\nNested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.\n\n1. **Nested lists are rarely a good idea.**\n   - You might feel like you are being really \"organized\" or something but you are just creating a gross shape on the screen that is hard to read.\n   - Nested navigation in UIs is a bad idea too, keep things as flat as possible.\n   - Nesting tons of folders in your source code is also not helpful.\n2. **Since we need to have more items, here's another one.**\n   - I'm not sure if we'll bother styling more than two levels deep.\n   - Two is already too much, three is guaranteed to be a bad idea.\n   - If you nest four levels deep you belong in prison.\n3. **Two items isn't really a list, three is good though.**\n   - Again please don't nest lists if you want people to actually read your content.\n   - Nobody wants to look at this.\n   - I'm upset that we even have to bother styling this.\n\nThe most annoying thing about lists in Markdown is that `<li>` elements aren't given a child `<p>` tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.\n\n- **For example, here's another nested list.**\n\n  But this time with a second paragraph.\n\n  - These list items won't have `<p>` tags\n  - Because they are only one line each\n\n- **But in this second top-level list item, they will.**\n\n  This is especially annoying because of the spacing on this paragraph.\n\n  - As you can see here, because I've added a second line, this list item now has a `<p>` tag.\n\n    This is the second line I'm talking about by the way.\n\n  - Finally here's another list item so it's more like a list.\n\n- A closing list item, but with no nested list, because why not?\n\nAnd finally a sentence to close off this section.\n\n## There are other elements we need to style\n\nI almost forgot to mention links, like [this link to the Tailwind CSS website](https://tailwindcss.com). We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier.\n\nWe even included table styles, check it out:\n\n| Wrestler                | Origin       | Finisher           |\n| ----------------------- | ------------ | ------------------ |\n| Bret \"The Hitman\" Hart  | Calgary, AB  | Sharpshooter       |\n| Stone Cold Steve Austin | Austin, TX   | Stone Cold Stunner |\n| Randy Savage            | Sarasota, FL | Elbow Drop         |\n| Vader                   | Boulder, CO  | Vader Bomb         |\n| Razor Ramon             | Chuluota, FL | Razor's Edge       |\n\nWe also need to make sure inline code looks good, like if I wanted to talk about `<span>` elements or tell you the good news about `@tailwindcss/typography`.\n\n### Sometimes I even use `code` in headings\n\nEven though it's probably a bad idea, and historically I've had a hard time making it look good. This _\"wrap the code blocks in backticks\"_ trick works pretty well though really.\n\nAnother thing I've done in the past is put a `code` tag inside of a link, like if I wanted to tell you about the [`tailwindcss/docs`](https://github.com/tailwindcss/docs) repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.\n\n#### We haven't used an `h4` yet\n\nBut now we have. Please don't use `h5` or `h6` in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a `before` pseudo-element to scream at you if you use an `h5` or `h6`.\n\nWe don't style them at all out of the box because `h4` elements are already so small that they are the same size as the body copy. What are we supposed to do with an `h5`, make it _smaller_ than the body copy? No thanks.\n\n### We still need to think about stacked headings though.\n\n#### Let's make sure we don't screw that up with `h4` elements, either.\n\nPhew, with any luck we have styled the headings above this text and they look pretty good.\n\nLet's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.\n\nWhat I've written here is probably long enough, but adding this final sentence can't hurt.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-to-expect-from-here-on-out","text":"What to expect from here on out"},{"depth":3,"slug":"typography-should-be-easy","text":"Typography should be easy"},{"depth":2,"slug":"what-if-we-stack-headings","text":"What if we stack headings?"},{"depth":3,"slug":"we-should-make-sure-that-looks-good-too","text":"We should make sure that looks good, too."},{"depth":3,"slug":"when-a-heading-comes-after-a-paragraph","text":"When a heading comes after a paragraph …"},{"depth":2,"slug":"code-should-look-okay-by-default","text":"Code should look okay by default."},{"depth":3,"slug":"what-about-nested-lists","text":"What about nested lists?"},{"depth":2,"slug":"there-are-other-elements-we-need-to-style","text":"There are other elements we need to style"},{"depth":3,"slug":"sometimes-i-even-use-code-in-headings","text":"Sometimes I even use code in headings"},{"depth":4,"slug":"we-havent-used-an-h4-yet","text":"We haven’t used an h4 yet"},{"depth":3,"slug":"we-still-need-to-think-about-stacked-headings-though","text":"We still need to think about stacked headings though."},{"depth":4,"slug":"lets-make-sure-we-dont-screw-that-up-with-h4-elements-either","text":"Let’s make sure we don’t screw that up with h4 elements, either."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
