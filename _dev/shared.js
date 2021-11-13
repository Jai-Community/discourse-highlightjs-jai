// Current hljs version used by Discourse is 10.6.0
// Reference: https://github.com/highlightjs/highlight.js/tree/eb122d3b7f88e3471e871866d73e2a99aafb20e1/docs

// Edit this language definition function and test by opening test-syntax-highlight.html in your browser.
// Once done, copy this function over to common/head_tag.html

function jai_language_definition() {

    const COMPILER_DIRECTIVE = {className: 'meta', begin: `#[a-zA-Z][a-zA-Z0-9_]*`};

    const TAG = {className: 'tag', begin: `\\@[a-zA-Z_][a-zA-Z0-9]*`};

    const SINGLE_LINE_COMMENT = {
        className: 'comment',
        begin: '//',
        end: '$'
    };

    const MULTI_LINE_COMMENT = {
        className: 'comment',
        begin: `/\\*`,
        end: `\\*/`,
    };

    const STRING_VAR_PLACEHOLDER = {
        className: 'string_var_placeholder',
        match: '%\\d*',
    };

    const STRING_ESCAPE_SEQUENCE = {
        className: 'string_escape_sequence',
        variants: [
            { match: '\\\\e' },
            { match: '\\\\n' },
            { match: '\\\\r' },
            { match: '\\\\t' },
            { match: '\\\\"' },
            { match: '\\\\0' },
            { match: '\\\\\\\\' },
            { match: `\\\\x[0-9a-fA-F]{2}` },
            { match: `\\\\d[0-9]{1,3}` },
            { match: `\\\\u[0-9a-fA-F]{8}` },
            { match: `\\\\u[0-9a-fA-F]{4}` },
        ]
    };

    const DOUBLE_QUOTE_STRING = {
        className: 'double_quote_string',
        begin: '"', end: '"',
        contains: [
            STRING_VAR_PLACEHOLDER,
            STRING_ESCAPE_SEQUENCE,
        ]
    };

    const MULTILINE_STRING = {
        className: 'multiline_string',
        // match: '#string\\s+(?<name>[a-zA-Z_][a-zA-Z0-9_]*)\\n(.*\\n)*?\\k<name>(\\s*)$',
        begin: '#string\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\n',
        returnBegin: true,  // will highlight #string
        end: '^\\s*([a-zA-Z_][a-zA-Z0-9_]*)\\s*$',
        'on:begin': (m, resp) => {
            resp.data._beginMatch = m[1];
            // console.log(`on:begin for match ${m[0]}, beginMatch=${m[1]}`);
        },
        'on:end': (m, resp) => {
            // console.log(`Testing the multiline string end match "${m[0]}" for remembered beginMatch=${resp.data._beginMatch}`);
            // console.log(`Current token is ${m[1]} in match ${m[0]}`);
            // console.log('m', m, 'resp', resp);

            if (resp.data._beginMatch !== m[1]) {
                // console.log(`Not the right match, skipping!`);
                resp.ignoreMatch();
            } else {
                // console.log(`This is the right match!`);
            }
        },
        contains: [
            STRING_VAR_PLACEHOLDER,
            STRING_ESCAPE_SEQUENCE,
            {
                className: 'meta',
                match: '#string',
            }
        ]
    }

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
            SINGLE_LINE_COMMENT,
            MULTI_LINE_COMMENT,
            DOUBLE_QUOTE_STRING,
            MULTILINE_STRING,
            TAG,
            COMPILER_DIRECTIVE,
        ]
    };
}