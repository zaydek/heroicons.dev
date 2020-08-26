// https://github.com/codex-src/dot-eslintrc.js (2483dfa)
module.exports = {
	env: {
		browser: true,
		es6:     true,
		jest:    true,
		node:    true,
	},
	extends: ["eslint:recommended"],
	parser: "babel-eslint",
	parserOptions: { sourceType: "module" },
	rules: {
		"array-bracket-newline":            [1, "consistent"], // enforce linebreaks after opening and before closing array brackets
		"array-bracket-spacing":            1, // enforce consistent spacing inside array brackets
		"array-element-newline":            [1, "consistent"], // enforce line breaks after each array element
		"arrow-body-style":                 0, // require braces around arrow function bodies
		"arrow-parens":                     [1, "as-needed"], // require parentheses around arrow function arguments
		"arrow-spacing":                    1, // enforce consistent spacing before and after the arrow in arrow functions
		"block-spacing":                    0, // disallow or enforce spaces inside of blocks after opening block and before closing block
		"brace-style":                      1, // enforce consistent brace style for blocks
		"capitalized-comments":             0, // enforce or disallow capitalization of the first letter of a comment
		"comma-dangle":                     [1, { arrays: "always-multiline", objects: "always-multiline", imports: "always-multiline", exports: "always-multiline", functions: "always-multiline" }], // require or disallow trailing commas
		"comma-spacing":                    1, // enforce consistent spacing before and after commas
		"comma-style":                      1, // enforce consistent comma style
		"computed-property-spacing":        1, // enforce consistent spacing inside computed property brackets
		"curly":                            1, // enforce consistent brace style for all control statements
		"dot-location":                     [1, "property"], // enforce consistent newlines before and after dots
		"dot-notation":                     1, // enforce dot notation whenever possible
		"eol-last":                         1, // require or disallow newline at the end of files
		"eqeqeq":                           1, // require the use of `===` and `!==`
		"func-call-spacing":                1, // require or disallow spacing between function identifiers and their invocations
		"function-call-argument-newline":   [1, "consistent"], // enforce line breaks between arguments of a function call
		"function-paren-newline":           1, // enforce consistent line breaks inside function parentheses
		"generator-star-spacing":           0, // enforce consistent spacing around `*` operators in generator functions
		"implicit-arrow-linebreak":         1, // enforce the location of arrow function bodies
		"indent":                           [1, "tab"], // enforce consistent indentation
		"jsx-quotes":                       1, // enforce the consistent use of either double or single quotes in JSX attributes
		"key-spacing":                      [1, { beforeColon: false, afterColon: true, mode: "minimum" }], // enforce consistent spacing between keys and values in object literal properties
		"keyword-spacing":                  1, // enforce consistent spacing before and after keywords
		"linebreak-style":                  1, // enforce consistent linebreak style
		"lines-around-comment":             0, // require empty lines around comments
		"lines-between-class-members":      0, // require or disallow an empty line between class members
		"multiline-comment-style":          0, // enforce a particular style for multiline comments
		"new-parens":                       1, // enforce or disallow parentheses when invoking a constructor with no arguments
		"newline-per-chained-call":         0, // require a newline after each call in a method chain
		"no-confusing-arrow":               0, // disallow arrow functions where they could be confused with comparisons
		"no-div-regex":                     0, // disallow division operators explicitly at the beginning of regular expressions
		"no-else-return":                   0, // disallow `else` blocks after `return` statements in `if` statements
		"no-extra-bind":                    0, // disallow unnecessary calls to `.bind()`
		"no-extra-boolean-cast":            0, // disallow unnecessary boolean casts
		"no-extra-label":                   0, // disallow unnecessary labels
		"no-extra-parens":                  0, // disallow unnecessary parentheses
		"no-extra-semi":                    0, // disallow unnecessary semicolons
		"no-floating-decimal":              0, // disallow leading or trailing decimal points in numeric literals
		"no-implicit-coercion":             0, // disallow shorthand type conversions
		"no-lonely-if":                     0, // disallow `if` statements as the only statement in `else` blocks
		"no-multi-spaces":                  [1, { ignoreEOLComments: true }], // disallow multiple spaces
		"no-multiple-empty-lines":          [1, { max: 1, maxEOF: 0, maxBOF: 0 }], // disallow multiple empty lines
		"no-regex-spaces":                  0, // disallow multiple spaces in regular expressions
		"no-trailing-spaces":               1, // disallow trailing whitespace at the end of lines
		"no-undef-init":                    0, // disallow initializing variables to `undefined`
		"no-unneeded-ternary":              0, // disallow ternary operators when simpler alternatives exist
		"no-unused-labels":                 0, // disallow unused labels
		"no-useless-computed-key":          1, // disallow unnecessary computed property keys in objects and classes
		"no-useless-rename":                1, // disallow renaming import, export, and destructured assignments to the same name
		"no-useless-return":                0, // disallow redundant return statements
		"no-var":                           1, // require `let` or `const` instead of `var`
		"no-whitespace-before-property":    1, // disallow whitespace before properties
		"nonblock-statement-body-position": 0, // enforce the location of single-line statements
		"object-curly-newline":             [1, { consistent: true }], // enforce consistent line breaks inside braces
		"object-curly-spacing":             [1, "always"], // enforce consistent spacing inside braces
		"object-property-newline":          [1, { allowAllPropertiesOnSameLine: true }], // enforce placing object properties on separate lines
		"object-shorthand":                 1, // require or disallow method and property shorthand syntax for object literals
		"one-var":                          0, // enforce variables to be declared either together or separately in functions
		"one-var-declaration-per-line":     0, // require or disallow newlines around variable declarations
		"operator-assignment":              1, // require or disallow assignment operator shorthand where possible
		"operator-linebreak":               1, // enforce consistent linebreak style for operators
		"padded-blocks":                    0, // require or disallow padding within blocks
		"padding-line-between-statements":  0, // require or disallow padding lines between statements
		"prefer-arrow-callback":            0, // require using arrow functions for callbacks
		"prefer-const":                     [1, { destructuring: "all" }], // require `const` declarations for variables that are never reassigned after declared
		"prefer-destructuring":             0, // require destructuring from arrays and/or objects
		"prefer-exponentiation-operator":   1, // disallow the use of `Math.pow` in favor of the `**` operator
		"prefer-numeric-literals":          1, // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
		"prefer-object-spread":             1, // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
		"prefer-template":                  0, // require template literals instead of string concatenation
		"quote-props":                      0, // require quotes around object literal property names
		"quotes":                           1, // enforce the consistent use of either backticks, double, or single quotes
		"rest-spread-spacing":              1, // enforce spacing between rest and spread operators and their expressions
		"semi":                             [1, "never"], // require or disallow semicolons instead of ASI
		"semi-spacing":                     0, // enforce consistent spacing before and after semicolons
		"semi-style":                       0, // enforce location of semicolons
		"sort-imports":                     0, // enforce sorted import declarations within modules
		"sort-vars":                        0, // require variables within the same declaration block to be sorted
		"space-before-blocks":              1, // enforce consistent spacing before blocks
		"space-before-function-paren":      [1, { anonymous: "never", named: "never", asyncArrow: "always" }], // enforce consistent spacing before `function` definition opening parenthesis
		"space-in-parens":                  1, // enforce consistent spacing inside parentheses
		"space-infix-ops":                  1, // require spacing around infix operators
		"space-unary-ops":                  1, // enforce consistent spacing before or after unary operators
		"spaced-comment":                   0, // enforce consistent spacing after the `//` or `/*` in a comment
		"strict":                           0, // require or disallow strict mode directives
		"switch-colon-spacing":             1, // enforce spacing around colons of switch statements
		"template-curly-spacing":           1, // require or disallow spacing around embedded expressions of template strings
		"template-tag-spacing":             1, // require or disallow spacing between template tags and their literals
		"unicode-bom":                      1, // require or disallow Unicode byte order mark (BOM)
		"wrap-iife":                        [1, "inside"], // require parentheses around immediate `function` invocations
		"wrap-regex":                       0, // require parenthesis around regex literals
		"yield-star-spacing":               0, // require or disallow spacing around the `*` in `yield*` expressions
		"yoda":                             1, // require or disallow "Yoda" conditions
	},
}
