# SyntaxError

Raised when the parser encounters a syntax error. This may occur in an [`import`](/statements/import.md) statement, in a call to the built-in functions [`compile()`](/built-in-functions/compile.md), [`exec()`](/built-in-functions/exec.md), or [`eval()`](/built-in-functions/eval.md), or when reading the initial script or standard input (also interactively).

The [`str()`](/built-in-functions/str.md) of the exception instance returns only the error message. Details is a tuple whose members are also available as separate attributes.

* `filename` the name of the file the syntax error occurred in.
* `lineno` which line number in the file the error occurred in. This is 1-indexed: the first line in the file has a `lineno` of 1.
* `offset` the column in the line where the error occurred. This is 1-indexed: the first character in the line has an `offset` of 1.
* `text` the source code text involved in the error.
* `end_lineno` which line number in the file the error occurred ends in. This is 1-indexed: the first line in the file has a `lineno` of 1.
* `end_offset` the column in the end line where the error occurred finishes. This is 1-indexed: the first character in the line has an `offset` of 1.
