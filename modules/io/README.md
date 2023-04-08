# io
**Core tools for working with streams.**

The `io` module provides Python’s main facilities for dealing with various types of I/O. There are three main types of I/O: **text I/O**, **binary I/O** and **raw I/O**. These are generic categories, and various backing stores can be used for each of them. A concrete object belonging to any of these categories is called a `file object`. Other common terms are **stream** and **file-like object**.

Independent of its category, each concrete stream object will also have various capabilities: it can be read-only, write-only, or read-write. It can also allow arbitrary random access (seeking forwards or backwards to any location), or only sequential access (for example in the case of a socket or pipe).