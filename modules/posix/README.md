# posix

**The most common POSIX system calls.**

This module provides access to operating system functionality that is standardized by the C Standard and the POSIX standard (a thinly disguised Unix interface).

**Do not import this module directly.** Instead, import the module [`os`](/modules/os/), which provides a portable version of this interface. On Unix, the [`os`](/modules/os/) module provides a superset of the `posix` interface. On non-Unix operating systems the `posix` module is not available, but a subset is always available through the [`os`](/modules/os/) interface. Once [`os`](/modules/os/) is imported, there is no performance penalty in using it instead of `posix`. In addition, [`os`](/modules/os/) provides some additional functionality, such as automatically calling [`putenv()`](/modules/os/putenv.md) when an entry in [`os.environ`](/modules/os/environ.md) is changed.

Errors are reported as exceptions. The usual exceptions are given for type errors, while errors reported by the system calls raise [`OSError`](/exceptions/OSError.md).

### Large File Support

Several operating systems (including AIX and Solaris) provide support for files that are larger than 2 GiB from a C programming model where **int** and **long** are 32-bit values. This is typically accomplished by defining the relevant size and offset types as 64-bit values. Such files are sometimes referred to as large files.

Large file support is enabled in Python when the size of an `off_t` is larger than a **long** and the **long long** is at least as large as an `off_t`. It may be necessary to configure and compile Python with certain compiler flags to enable this mode. For example, with Solaris 2.6 and 2.7 you need to do something like:

```sh
CFLAGS="`getconf LFS_CFLAGS`" OPT="-g -O2 $CFLAGS" \
        ./configure
```

On large-file-capable Linux systems, this might work:

```shell
CFLAGS='-D_LARGEFILE64_SOURCE -D_FILE_OFFSET_BITS=64' OPT="-g -O2 $CFLAGS" \
        ./configure
```

### Notable Module Contents

In addition to many functions described in the [`os`](/modules/os/) module documentation, `posix` defines the following data item:

* `posix.environ`

A dictionary representing the string environment at the time the interpreter was started. Keys and values are bytes on Unix and str on Windows. For example, `environ[b'HOME']` (`environ['HOME']` on Windows) is the pathname of your home directory, equivalent to `getenv("HOME")` in C.

Modifying this dictionary does not affect the string environment passed on by `execv()`, [`popen()`](/modules/os/popen.md) or [`system()`](/modules/os/system.md). If you need to change the environment, pass `environ` to `execve()` or add variable assignments and export statements to the command string for [`system()`](/modules/os/system.md) or [`popen()`](/modules/os/popen.md).

?> The [`os`](/modules/os/) module provides an alternate implementation of environ which updates the environment on modification. Note also that updating [`os.environ`](/modules/os/environ.md) will render this dictionary obsolete. Use of the [`os`](/modules/os/) module version of this is recommended over direct access to the `posix` module.