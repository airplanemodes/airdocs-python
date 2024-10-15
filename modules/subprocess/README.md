# subprocess

**Subprocess management.**

> Source code: [`Lib/subprocess.py`](https://github.com/python/cpython/tree/3.13/Lib/subprocess.py)  
> **Availability:** not Emscripten, not WASI.

The `subprocess` module allows you to spawn new processes, connect to their input/output/error pipes, and obtain their return codes.

The recommended approach to invoking subprocesses is to use the [`run()`](/modules/subprocess/run.md) function for all use cases it can handle. For more advanced use cases, the underlying [`Popen`](/modules/subprocess/Popen/) interface can be used directly.
