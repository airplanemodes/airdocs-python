# dis

**Disassembler for Python bytecode.**

> Source code: [`Lib/dis.py`](https://github.com/python/cpython/tree/3.12/Lib/dis.py)

The `dis` module supports the analysis of CPython bytecode by disassembling it. The CPython bytecode which this module takes as an input is defined in the file `Include/opcode.h` and used by the compiler and the interpreter.

**CPython implementation detail:** Bytecode is an implementation detail of the CPython interpreter. No guarantees are made that bytecode will not be added, removed, or changed between versions of Python. Use of this module should not be considered to work across Python VMs or Python releases.
