# multiprocessing.Process.exitcode

The child’s exit code. This will be `None` if the process has not yet terminated.

If the child’s [`run()`](/modules/multiprocessing/Process/run.md) method returned normally, the exit code will be 0. If it terminated via [`sys.exit()`](/modules/sys/exit.md) with an integer argument **N**, the exit code will be **N**.

If the child terminated due to an exception not caught within [`run()`](/modules/multiprocessing/Process/run.md), the exit code will be 1. If it was terminated by signal **N**, the exit code will be the negative value -**N**.

# Syntax

```python
multiprocessing.Process.exitcode
```