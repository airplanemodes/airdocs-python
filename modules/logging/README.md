# logging

**Logging facility for Python.**

> Source code: [`Lib/logging/__init__.py`](https://github.com/python/cpython/tree/3.13/Lib/logging/__init__.py)

This module defines functions and classes which implement a flexible event logging system for applications and libraries.

The key benefit of having the logging API provided by a standard library module is that all Python modules can participate in logging, so your application log can include your own messages integrated with messages from third-party modules.

The simplest example:

```python
>>> import logging
>>> logging.warning('Watch out!') # WARNING:root:Watch out!
```

The basic classes defined by the module, together with their functions, are listed below.

* Loggers expose the interface that application code directly uses.
* Handlers send the log records (created by loggers) to the appropriate destination.
* Filters provide a finer grained facility for determining which log records to output.
* Formatters specify the layout of log records in the final output.
