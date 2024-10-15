# traceback

**Print or retrieve a stack traceback.**

> Source code: [`Lib/traceback.py`](https://github.com/python/cpython/tree/3.13/Lib/traceback.py)

This module provides a standard interface to extract, format and print stack traces of Python programs. It exactly mimics the behavior of the Python interpreter when it prints a stack trace. This is useful when you want to print stack traces under program control, such as in a “wrapper” around the interpreter.