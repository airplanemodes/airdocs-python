# asyncio

**Asynchronous I/O.**

```python
import asyncio

async def main():
    print('Hello ...')
    await asyncio.sleep(1)
    print('... World!')

asyncio.run(main())
```

`asyncio` is a library to write **concurrent** code using the **async**/**await** syntax.

`asyncio` is used as a foundation for multiple Python asynchronous frameworks that provide high-performance network and web-servers, database connection libraries, distributed task queues, etc.

`asyncio` is often a perfect fit for IO-bound and high-level **structured** network code.

`asyncio` provides a set of **high-level** APIs to:

- Run Python coroutines concurrently and have full control over their execution.
- Perform network IO and IPC.
- Control subprocesses.
- Distribute tasks via queues.
- Synchronize concurrent code.

Additionally, there are **low-level** APIs for library and framework developers to:

- Create and manage event loops, which provide asynchronous APIs for networking, running subprocesses, handling OS signals, etc.
- Implement efficient protocols using transports.
- Bridge callback-based libraries and code with async/await syntax.
