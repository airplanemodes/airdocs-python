# str

Textual data in Python is handled with `str` objects, or **strings**. Strings are immutable sequences of Unicode code points. String literals are written in a variety of ways:
- Single quotes: `'allows embedded "double" quotes'`
- Double quotes: `"allows embedded 'single' quotes"`
- Triple quoted: `'''Three single quotes'''`, `"""Three double quotes"""`

Triple quoted strings may span multiple lines - all associated whitespace will be included in the string literal.

String literals that are part of a single expression and have only whitespace between them will be implicitly converted to a single string literal. That is, `("spam " "eggs") == "spam eggs"`.

Strings may also be created from other objects using the [`str`](/built-in-functions/str.md) constructor.

Since there is no separate “character” type, indexing a string produces strings of length 1. That is, for a non-empty string **s**, `s[0] == s[0:1]`.