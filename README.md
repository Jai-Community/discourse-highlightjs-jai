# Discourse Highlight.js Jai

This Discourse theme component adds syntax highlighting for `jai` programming language.

## Installation

Step 1. Add a "remote" theme component in Discourse admin console,
use `https://github.com/Jai-Community/discourse-highlightjs-jai` repository URL.

Step 2. Add `jai` to the `highlighted languages` list in Discourse Settings.


## How it works

Discourse uses Highlight.js library to highlight code syntax.

Note that Discourse does not use the latest version of Highlight.js. For instance, at the time of writing this README, the latest version is `11.3.1`, while the one at use by Discourse is `10.6.0`.

To check the hljs version being used by your Discourse instance, open your Discourse website, go to the developer console, and type: `hljs.versionString`.

This means the online documentation of Highlight.js might not work for you, so you will need to choose the right release tag in GitHub and navigate to the `/docs`. For example, here are the [docs for 10.6.0](https://github.com/highlightjs/highlight.js/tree/eb122d3b7f88e3471e871866d73e2a99aafb20e1/docs).

This also means we'll have to update this component when Discourse migrates to a newer major version.

## Develop and test locally

While developing locally, edit `function jai_language_definition()` in file `_dev/shared.js`.

Open `_dev/test-syntax-highlight.html` in your browser to preview highlighted jai code. It is also where you add more sample `jai` code for the preview.

This file is ignored by Discourse and is only used to preview syntax highlighting locally before pushing the new version.

Once done, copy the `jai_language_definition()` language definition function over to `common/head_tag.html`, which is the file loaded by Discourse.

**Note**. When updating the version of Highlight.js, you also need to update the version referenced by the `<script>` tag:

`<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/highlight.min.js"></script>`


## CSS Styles

Syntax highlighting styles are defined in `common/common.scss`. Note that even though it will be SASS-compiled by Discourse when the theme is installed, we don't use any of the SASS features in it because we want it to work in our local preview file. In fact, we load is as a `css` file in there, so it's not compiled.

Please keep this in mind when adding more styles.  We want our local develop preview file to keep functioning.


## Authors

After contributing, please don't forget to add yourself to the list:

* [Anton Andriievskyi](https://github.com/meglio)