# os.posix_spawn()

> **Availability:** Unix, not Emscripten, not WASI.

Wraps the posix_spawn() C library API for use from Python.

Most users should use [`subprocess.run()`](/modules/subprocess/) instead of `posix_spawn()`.

The positional-only arguments **path**, **args**, and **env** are similar to [`execve()`](/modules/os/execve.md).

The **path** parameter is the path to the executable file. The **path** should contain a directory. Use [`posix_spawnp()`](/modules/os/posix_spawnp.md) to pass an executable file without directory.

The **file_actions** argument may be a sequence of tuples describing actions to take on specific file descriptors in the child process between the C library implementation’s fork() and exec() steps. The first item in each tuple must be one of the three type indicator listed below describing the remaining tuple elements:

* os.POSIX_SPAWN_OPEN  
(`os.POSIX_SPAWN_OPEN`, **fd**, **path**, **flags**, **mode**)  
    - Performs `os.dup2(os.open(path, flags, mode), fd)`.
* os.POSIX_SPAWN_CLOSE  
(`os.POSIX_SPAWN_CLOSE`, **fd**)  
    - Performs `os.close(fd)`.
* os.POSIX_SPAWN_DUP2  
(`os.POSIX_SPAWN_DUP2`, **fd**, **new_fd**)  
    - Performs `os.dup2(fd, new_fd)`.

These tuples correspond to the C library posix_spawn_file_actions_addopen(), posix_spawn_file_actions_addclose(), and posix_spawn_file_actions_adddup2() API calls used to prepare for the posix_spawn() call itself.

The **setpgroup** argument will set the process group of the child to the value specified. If the value specified is 0, the child’s process group ID will be made the same as its process ID. If the value of **setpgroup** is not set, the child will inherit the parent’s process group ID. This argument corresponds to the C library POSIX_SPAWN_SETPGROUP flag.

If the **resetids** argument is `True` it will reset the effective UID and GID of the child to the real UID and GID of the parent process. If the argument is `False`, then the child retains the effective UID and GID of the parent. In either case, if the set-user-ID and set-group-ID permission bits are enabled on the executable file, their effect will override the setting of the effective UID and GID. This argument corresponds to the C library POSIX_SPAWN_RESETIDS flag.

If the **setsid** argument is True, it will create a new session ID for posix_spawn. **setsid** requires POSIX_SPAWN_SETSID or POSIX_SPAWN_SETSID_NP flag. Otherwise, [`NotImplementedError`](/exceptions/NotImplementedError.md) is raised.

The **setsigmask** argument will set the signal mask to the signal set specified. If the parameter is not used, then the child inherits the parent’s signal mask. This argument corresponds to the C library POSIX_SPAWN_SETSIGMASK flag.

The **sigdef** argument will reset the disposition of all signals in the set specified. This argument corresponds to the C library POSIX_SPAWN_SETSIGDEF flag.

The **scheduler** argument must be a tuple containing the (optional) scheduler policy and an instance of sched_param with the scheduler parameters. A value of `None` in the place of the scheduler policy indicates that is not being provided. This argument is a combination of the C library POSIX_SPAWN_SETSCHEDPARAM and POSIX_SPAWN_SETSCHEDULER flags.

Raises an auditing event `os.posix_spawn` with arguments `path`, `argv`, `env`.

### Syntax

```python
os.posix_spawn(path, argv, env, *, file_actions=None, setpgroup=None, resetids=False, setsid=False, setsigmask=(), setsigdef=(), scheduler=None)
```