# grp

**The group database.**

> **Availability:** not Emscripten, not WASI.

This module provides access to the Unix group database. It is available on all Unix versions.

This module does not work or is not available on WebAssembly platforms `wasm32-emscripten` and `wasm32-wasi`.

Group database entries are reported as a tuple-like object, whose attributes correspond to the members of the `group` structure (Attribute field below, see `<grp.h>`):

| Index       | Attribute   | Meaning                               |
| ----------- | ----------- | ------------------------------------- |
| 0           | `gr_name`   | Name of the group                     |
| 1           | `gr_passwd` | Encrypted group password. Often empty |
| 2           | `pw_gid`    | Numerical group ID                    |
| 3           | `pw_mem`    | All the group member’s user names     |

The gid is an integer, name and password are strings, and the member list is a list of strings.

?> Note that most users are not explicitly listed as members of the group they are in according to the password database. Check both databases to get complete membership information. Also note that a `gr_name` that starts with a `+` or `-` is likely to be a YP/NIS reference and may not be accessible via [`getgrnam()`](/modules/grp/getgrnam.md) or [`getgrgid()`](/modules/grp/getgrgid.md).