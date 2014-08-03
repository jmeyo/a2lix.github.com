---
layout: post
title: Translate/Internationalize your Doctrine entities with ease - Custom backend and Sonata compatible
published: true
tags: [symfony2, doctrine2, sonata, a2lix, translation, form, knplabs, doctrineextension, doctrinebehaviors, prezent]
---

To internationalize your Doctrine entities, you have basically 2 ways:

- Add a locale field to your entity and manage many instance that locale. Simplest way, but can create unwanted information duplication.
- Split your entity in two, with a translatable entity that contains common fields not related to translation and a dedicated one, a translation entity that contains only translations fields

You can and should use both ways in the same application according to the need of the entity.

If for the first and simplest way, you don't need a bundle, for the second way, you have differents potential. Ordered from the oldest to newest:

- <a href="https://github.com/Atlantic18/DoctrineExtensions">GedmoDoctrineExtension</a> - <a href="https://github.com/stof/StofDoctrineExtensionsBundle">StofDoctrineExtensionsBundle</a>
Back early 2012, this was the first solution I used. You can ease its install with the StofDoctrineExtensionsBundle.
I don't recommend anymore the use of the Translatable feature of the DoctrineExtension.
I'm not a fan of its old and buggy implementation and I advice to wait the 2.4 release.

- <a href="https://github.com/KnpLabs/DoctrineBehaviors#translatable">KnpDoctrineBehaviors</a>
Back early 2013, this was the second solution I used. This is a simply solution with fallback feature with nice use of PHP5.4 traits.
KnpLabs do good bundles (KnpMenu, KnpPaginator, ...) and I advice you to use this bundle.

- <a href="https://github.com/a2lix/I18nDoctrineBundle">A2lixI18nDoctrineBundle</a>
Middle in 2013, I developed my own solution, inspired by the Knp one but with use of Doctrine Filters to try another approach.
Give it a try if you doesn't need the fallback feature. And yes, adding tests are always plan...

- <a href="https://github.com/Prezent/doctrine-translatable-bundle">PrezentDoctrineTranslatableBundle</a>
End of 2013, another solution inspired by the Knp one come out but with some performances boost by the use of the metadata caching.
I always need give it a try, but from what I've seen in the code and documentation, it seems all good!


This 3 last solutions (and the incoming 2.4 version of GedmoDoctrineExtension) store data in database in the same way, so you can switch from one solution to another easily.

For manage edition of all locales at the same time, I published end of 2012, the <a href="https://github.com/a2lix/TranslationFormBundle">A2lixTranslationFormBundle</a>
The last version is only compatible with this 3 last solutions again.


I published a simple <a href="https://github.com/a2lix/Demo">demo on GitHub</a>  where you can test A2lixI18nDoctrineBundle or KnpDoctrineBehaviors independently
with a custom backend and Sonata Admin, which use both A2lixI18nDoctrineBundle. PrezentDoctrineTranslatableBundle is plan too.

You'll note that Sonata work like a breeze with A2lixI18nDoctrineBundle, but some problems stay to fix with KnpDoctrineBehaviors about filtering that search
in all locale by default and not the current locale.
A basic locale switcher is include in the right top corner for Sonata.

This Demo include use a fork of SonataAdmin (<a href="https://github.com/sonata-project/SonataAdminBundle/pull/2262">PR 2262</a>) and a fork of Sonata Exporter
(<a href="https://github.com/sonata-project/exporter/pull/41">PR 41</a>), both to manage magic method __call. Hope theses PRs will be merged, otherwise, it can
work but with a more verbose version of translatable entities...

Have a look at <a href="http://a2lix.fr/bundles/translation-form/#bundle-additional">A2lixTranslationForm additional features</a> for additional features too.
I'll see to complete the demo.
