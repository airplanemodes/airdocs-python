# atexit

**Exit handlers.**

The `atexit` module defines functions to register and unregister cleanup functions. Functions thus registered are automatically executed upon normal interpreter termination. `atexit` runs these functions in the *reverse* order in which they were registered. If you register `A`, `B`, and `C`, at interpreter termination time they will be run in the order `C`, `B`, `A`.

?> The functions registered via this module are not called when the program is killed by a signal not handled by Python, when a Python fatal internal error is detected, or when [`os._exit()`](/modules/os/_exit.md) is called.

?> The effect of registering or unregistering functions from within a cleanup function is undefined.
