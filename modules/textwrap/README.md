# textwrap

**Text wrapping and filling.**

> Source code: [`Lib/textwrap.py`](https://github.com/python/cpython/tree/3.13/Lib/textwrap.py)

The `textwrap` module provides some convenience functions, as well as [`TextWrapper`](/modules/textwrap/TextWrapper/), the class that does all the work. If you’re just wrapping or filling one or two text strings, the convenience functions should be good enough; otherwise, you should use an instance of [`TextWrapper`](/modules/textwrap/TextWrapper/) for efficiency.

[`wrap()`](/modules/textwrap/wrap.md), [`fill()`](/modules/textwrap/fill.md) and [`shorten()`](/modules/textwrap/shorten.md) work by creating a [`TextWrapper`](/modules/textwrap/TextWrapper/) instance and calling a single method on it. That instance is not reused, so for applications that process many text strings using [`wrap()`](/modules/textwrap/wrap.md) and/or [`fill()`](/modules/textwrap/fill.md), it may be more efficient to create your own [`TextWrapper`](/modules/textwrap/TextWrapper/) object.

Text is preferably wrapped on whitespaces and right after the hyphens in hyphenated words. Only then will long words be broken if necessary, unless [`TextWrapper.break_long_words`](/modules/textwrap/TextWrapper/break_long_words.md) is set to false.
