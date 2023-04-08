# re

**Regular expression operations.**

> Source code: [`Lib/re/`](https://github.com/python/cpython/tree/3.11/Lib/re/)

This module provides regular expression matching operations similar to those found in Perl.

Both patterns and strings to be searched can be Unicode strings (str) as well as 8-bit strings (bytes). However, Unicode strings and 8-bit strings cannot be mixed: that is, you cannot match a Unicode string with a byte pattern or vice-versa; similarly, when asking for a substitution, the replacement string must be of the same type as both the pattern and the search string.

Regular expressions use the backslash character (`'\'`) to indicate special forms or to allow special characters to be used without invoking their special meaning. This collides with Python’s usage of the same character for the same purpose in string literals. For example, to match a literal backslash, one might have to write `'\\\\'` as the pattern string, because the regular expression must be `\\`, and each backslash must be expressed as `\\` inside a regular Python string literal. Also, please note that any invalid escape sequences in Python’s usage of the backslash in string literals now generate a [`DeprecationWarning`](/exceptions/DeprecationWarning.md) and in the future this will become a [`SyntaxError`](/exceptions/SyntaxError.md). This behaviour will happen even if it is a valid escape sequence for a regular expression.

The solution is to use Python’s raw string notation for regular expression patterns; backslashes are not handled in any special way in a string literal prefixed with `'r'`. So `r"\n"` is a two-character string containing `'\'` and `'n'`, while `"\n"` is a one-character string containing a newline. Usually patterns will be expressed in Python code using this raw string notation.

It is important to note that most regular expression operations are available as module-level functions and methods on compiled regular expressions. The functions are shortcuts that don’t require you to compile a regex object first, but miss some fine-tuning parameters.

### Regular expression syntax

A regular expression (or RE) specifies a set of strings that matches it. The functions in this module let you check if a particular string matches a given regular expression (or if a given regular expression matches a particular string, which comes down to the same thing).

Regular expressions can be concatenated to form new regular expressions. If **A** and **B** are both regular expressions, then **AB** is also a regular expression. In general, if a string **p** matches **A** and another string **q** matches **B**, the string **pq** will match **AB**. This holds unless **A** or **B** contain low precedence operations, boundary conditions between **A** and **B**, or have numbered group references. Thus, complex expressions can easily be constructed from simpler primitive expressions like the ones described here.

Regular expressions can contain both special and ordinary characters. Most ordinary characters, like `'A'`, `'a'`, or `'0'`, are the simplest regular expressions. They simply match themselves. You can concatenate ordinary characters, so last matches the string `'last'`. In the rest of this section, we’ll write RE’s in `this special style`, usually without quotes, and strings to be matched `'in single quotes'`.

Some characters, like `'|'` or `'('`, are special. Special characters either stand for classes of ordinary characters, or affect how the regular expressions around them are interpreted.

Repetition operators or quantifiers (`*`, `+`, `?`, `{m,n}`, etc) cannot be directly nested. This avoids ambiguity with the non-greedy modifier suffix `?`, and with other modifiers in other implementations. To apply a second repetition to an inner repetition, parentheses may be used. For example, the expression `(?:a{6})*` matches any multiple of six `'a'` characters.

The special characters are:

`.` **Dot.**  
In the default mode, this matches any character except a newline. If the **DOTALL** flag has been specified, this matches any character including a newline.

`^` **Caret.**  
Matches the start of the string, and in **MULTILINE** mode also matches immediately after each newline.

`$`  
Matches the end of the string or just before the newline at the end of the string, and in **MULTILINE** mode also matches before a newline. `foo` matches both ‘foo’ and ‘foobar’, while the regular expression `foo$` matches only ‘foo’. More interestingly, searching for `foo.$` in `'foo1\nfoo2\n`' matches ‘foo2’ normally, but ‘foo1’ in **MULTILINE** mode. Searching for a single `$` in `'foo\n'` will find two (empty) matches: one just before the newline, and one at the end of the string.

`*`  
Causes the resulting RE to match 0 or more repetitions of the preceding RE, as many repetitions as are possible. `ab*` will match ‘a’, ‘ab’, or ‘a’ followed by any number of ‘b’s.

`+`  
Causes the resulting RE to match 1 or more repetitions of the preceding RE. `ab+` will match ‘a’ followed by any non-zero number of ‘b’s. It will not match just ‘a’.

`?`  
Causes the resulting RE to match 0 or 1 repetitions of the preceding RE. `ab?` will match either ‘a’ or ‘ab’.

`*?`, `+?`, `??`  
The `'*'`, `'+'`, and `'?'` quantifiers are all *greedy*. They match as much text as possible. Sometimes this behaviour isn’t desired. If the RE `<.*>` is matched against `'<a> b <c>'`, it will match the entire string, and not just `'<a>'`. Adding `?` after the quantifier makes it perform the match in *non-greedy* or *minimal* fashion. As few characters as possible will be matched. Using the RE `<.*?>` will match only `'<a>'`.

`*+`, `++`, `?+`  
Like the `'*'`, `'+'`, and `'?'` quantifiers, those where `'+'` is appended also match as many times as possible. However, unlike the true greedy quantifiers, these do not allow back-tracking when the expression following it fails to match. These are known as *possessive* quantifiers. For example, `a*a` will match `'aaaa'` because the `a*` will match all 4 `'a'`s, but, when the final `'a'` is encountered, the expression is backtracked so that in the end the `a*` ends up matching 3 `'a'`s total, and the fourth `'a'` is matched by the final `'a'`. However, when `a*+a` is used to match `'aaaa'`, the `a*+` will match all 4 `'a'`, but when the final `'a'` fails to find any more characters to match, the expression cannot be backtracked and will thus fail to match. `x*+`, `x++` and `x?+` are equivalent to `(?>x*)`, `(?>x+)` and `(?>x?)` correspondingly.

`{m}`  
Specifies that exactly **m** copies of the previous RE should be matched. Fewer matches cause the entire RE not to match. For example, `a{6}` will match exactly six `'a'` characters, but not five.