---
layout: post
title: Manage Symfony Form Collection with Vanilla JS
published: true
tags: [symfony, form, collection, vanillaJS, javascript]
---

Lately, after refreshed some of my bundles (<a href="https://github.com/a2lix/TranslationFormBundle">A2lixTranslationFormBundle</a> & <a href="https://github.com/a2lix/AutoFormBundle">A2lixAutoFormBundle</a>), I refreshed my <a href="https://github.com/a2lix/Demo">Demo project</a> too.

This Demo project include a example of Symfony Form collection that was done some years ago, with JQuery.

Today, JQuery is discouraged and it's preferable to use native Javascript (which become better with latest ECMAScript releases) or more advanced solution as ReactJS or VueJS.

In the <a href="https://symfony.com/doc/current/form/form_collections.html">current documentation of the Symfony Form collection</a>, Symfony provide always today a simple JQuery version.

So, if you are interested by using a fresh ES6 version that use the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template">HTML5 Template Tag</a> in replacement of your JQuery version, have a look to:

<script src="https://gist.github.com/webda2l/2ad22cd58740713e17c4bec29591d13f.js"></script>
