# os.environb

Bytes version of [`environ`](/modules/os/environ.md): a mapping object where both keys and values are bytes objects representing the process environment. [`environ`](/modules/os/environ.md) and `environb` are synchronized (modifying `environb` updates [`environ`](/modules/os/environ.md), and vice versa).

`environb` is only available if [`supports_bytes_environ`](/modules/os/supports_bytes_environ.md) is `True`.