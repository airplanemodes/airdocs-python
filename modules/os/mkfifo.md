# os.mkfifo()

> **Availability:** Unix, not Emscripten, not WASI.

Create a FIFO (a named pipe) named **path** with numeric mode **mode**. The current umask value is first masked out from the mode.

This function can also support paths relative to directory descriptors.

FIFOs are pipes that can be accessed like regular files. FIFOs exist until they are deleted (for example with [`unlink()`](/modules/os/unlink.md)). Generally, FIFOs are used as rendezvous between “client” and “server” type processes: the server opens the FIFO for reading, and the client opens it for writing. Note that `mkfifo()` doesn’t open the FIFO — it just creates the rendezvous point.

### Syntax

```python
os.mkfifo(path, mode=0o666, *, dir_fd=None)
```