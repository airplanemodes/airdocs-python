# codeop

**Compile Python code.**

> Source code: [`Lib/codeop.py`](https://github.com/python/cpython/tree/3.13/Lib/codeop.py)

The `codeop` module provides utilities upon which the Python read-eval-print loop can be emulated, as is done in the [`code`](/modules/code/) module. As a result, you probably don’t want to use the module directly. If you want to include such a loop in your program you probably want to use the [`code`](/modules/code/) module instead.

There are two parts to this job:

1. Being able to tell if a line of input completes a Python statement: in short, telling whether to print ‘`>>>`’ or ‘`...`’ next.
2. Remembering which future statements the user has entered, so subsequent input can be compiled with these in effect.

The `codeop` module provides a way of doing each of these things, and a way of doing them both.