# sys._emscripten_info

> **Availability:** Emscripten.

A named tuple holding information about the environment on the *wasm32-emscripten* platform. The named tuple is provisional and may change in the future.

| Attribute            | Explanation                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `emscripten_version` | Emscripten version as tuple of ints (major, minor, micro), e.g. `(3, 1, 8)`.   |
| `runtime`            | Runtime string, e.g. browser user agent, `'Node.js v14.18.2'`, or `'UNKNOWN'`. |
| `pthreads`           | `True` if Python is compiled with Emscripten pthreads support.                 |
| `shared_memory`      | `True` if Python is compiled with shared memory support.                       |

### Syntax

```python
sys._emscripten_info
```