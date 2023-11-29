# tracemalloc

**Trace memory allocations.**

> Source code: [`Lib/tracemalloc.py`](https://github.com/python/cpython/tree/3.12/Lib/tracemalloc.py)

The tracemalloc module is a debug tool to trace memory blocks allocated by Python. It provides the following information:

* Traceback where an object was allocated
* Statistics on allocated memory blocks per filename and per line number: total size, number and average size of allocated memory blocks
* Compute the differences between two snapshots to detect memory leaks

To trace most memory blocks allocated by Python, the module should be started as early as possible by setting the [`PYTHONTRACEMALLOC`](../cli/Environment/PYTHONTRACEMALLOC.md) environment variable to `1`, or by using `-X tracemalloc` command line option. The [`tracemalloc.start()`](/modules/tracemalloc/start.md) function can be called at runtime to start tracing Python memory allocations.

By default, a trace of an allocated memory block only stores the most recent frame (1 frame). To store 25 frames at startup: set the [`PYTHONTRACEMALLOC`](../cli/Environment/PYTHONTRACEMALLOC.md) environment variable to `25`, or use the `-X tracemalloc=25` command line option.
