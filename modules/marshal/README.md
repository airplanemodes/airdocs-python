# marshal

**Internal Python object serialization.**

This module contains functions that can read and write Python values in a binary format. The format is specific to Python, but independent of machine architecture issues (e.g., you can write a Python value to a file on a PC, transport the file to a Mac, and read it back there). Details of the format are undocumented on purpose; it may change between Python versions (although it rarely does).

This is not a general “persistence” module. For general persistence and transfer of Python objects through RPC calls, see the modules [`pickle`](/modules/pickle/) and [`shelve`](/modules/shelve/). The marshal module exists mainly to support reading and writing the “pseudo-compiled” code for Python modules of `.pyc` files. Therefore, the Python maintainers reserve the right to modify the marshal format in backward incompatible ways should the need arise. The format of code objects is not compatible between Python versions, even if the version of the format is the same. De-serializing a code object in the incorrect Python version has undefined behavior. If you’re serializing and de-serializing Python objects, use the [`pickle`](/modules/pickle/) module instead – the performance is comparable, version independence is guaranteed, and pickle supports a substantially wider range of objects than marshal.

!> The `marshal` module is not intended to be secure against erroneous or maliciously constructed data. Never unmarshal data received from an untrusted or unauthenticated source.

Not all Python object types are supported; in general, only objects whose value is independent from a particular invocation of Python can be written and read by this module. The following types are supported: booleans, integers, floating-point numbers, complex numbers, strings, bytes, bytearrays, tuples, lists, sets, frozensets, dictionaries, and code objects (if **allow_code** is true), where it should be understood that tuples, lists, sets, frozensets and dictionaries are only supported as long as the values contained therein are themselves supported. The singletons [`None`](/abstraction/interpreter/None.md), [`Ellipsis`](/abstraction/interpreter/Ellipsis.md) and [`StopIteration`](/exceptions/StopIteration.md) can also be marshalled and unmarshalled. For format **version** lower than 3, recursive lists, sets and dictionaries cannot be written (see below).

There are functions that read/write files as well as functions operating on bytes-like objects.
