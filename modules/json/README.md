# json

**JSON encoder and decoder.**

> Source code: [`Lib/json/__init__.py`](https://github.com/python/cpython/tree/3.13/Lib/json/__init__.py)

[`JSON`](https://json.org/) (JavaScript Object Notation), specified by [**RFC 7159**](https://datatracker.ietf.org/doc/html/rfc7159.html) and by [`ECMA-404`](https://www.ecma-international.org/publications-and-standards/standards/ecma-404/), is a lightweight data interchange format inspired by JavaScript object literal syntax (although it is not a strict subset of JavaScript).

!> Be cautious when parsing JSON data from untrusted sources. A malicious JSON string may cause the decoder to consume considerable CPU and memory resources. Limiting the size of data to be parsed is recommended.

`json` exposes an API familiar to users of the standard library [`marshal`](/modules/marshal/) and [`pickle`](/modules/pickle/) modules.