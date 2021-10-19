// Current hljs version used by Discourse is 10.6.0
// Reference: https://github.com/highlightjs/highlight.js/tree/eb122d3b7f88e3471e871866d73e2a99aafb20e1/docs

// Edit this language definition function and test by opening test-syntax-highlight.html in your browser.
// Once done, copy this function over to common/head_tag.html
function jai_language_definition() {
    return {
        name: 'jai',
        aliases: ['jai'],
        disableAutodetect: false,
        case_insensitive: false,
        keywords: {
            $pattern: /([_a-zA-Z][a-zA-Z0-9_]+|---)/,
            keyword: ['return', 'struct', 'if', 'ifx', 'else', 'case', 'for', 'while', 'break', 'using', 'enum', 'new', 'defer', 'no_check', 'cast', 'enum_flags' ],
            literal: ['false', 'true', 'null', 'void', '---',],
            built_in: ['Any', 'Type', 'Code', 'type_of', 'size_of'],
            type: ['u8', 'u16', 'u32', 'u64', 's8', 's16', 's32', 's64', 'int', 'float', 'float32', 'float64', 'string'],
        },
        contains: [
            {
                className: 'comment', begin: '//', end: '$',
            },
            {
                className: 'comment',
                begin: `/\\*`,
                end: `\\*/`,
            },
            {className: 'tag', begin: `\\@[a-zA-Z_][a-zA-Z0-9]*`},
            {className: 'meta', begin: `#[a-zA-Z][a-zA-Z0-9_]*`},
        ]
    };
}