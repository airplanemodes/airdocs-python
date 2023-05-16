# pwd

**The password database.**

> **Availability:** not Emscripten, not WASI.

This module provides access to the Unix user account and password database. It is available on all Unix versions.

This module does not work or is not available on WebAssembly platforms `wasm32-emscripten` and `wasm32-wasi`.

Password database entries are reported as a tuple-like object, whose attributes correspond to the members of the `passwd` structure (Attribute field below, see `<pwd.h>`):

| Index       | Attribute   | Meaning                     |
| ----------- | ----------- | --------------------------- |
| 0           | `pw_name`   | Login name                  |
| 1           | `pw_passwd` | Optional encrypted password |
| 2           | `pw_uid`    | Numerical user ID           |
| 3           | `pw_gid`    | Numerical group ID          |
| 4           | `pw_gecos`  | User name or comment field  |
| 5           | `pw_dir`    | User home directory         |
| 6           | `pw_shell`  | User command interpreter    |

The uid and gid items are integers, all others are strings. [`KeyError`](/exceptions/KeyError.md) is raised if the entry asked for cannot be found.