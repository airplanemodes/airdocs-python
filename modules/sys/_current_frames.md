# sys._current_frames()

Return a dictionary mapping each thread’s identifier to the topmost stack frame currently active in that thread at the time the function is called. Note that functions in the [`traceback`](/modules/traceback/) module can build the call stack given such a frame.

This is most useful for debugging deadlock: this function does not require the deadlocked threads’ cooperation, and such threads’ call stacks are frozen for as long as they remain deadlocked. The frame returned for a non-deadlocked thread may bear no relationship to that thread’s current activity by the time calling code examines the frame.

This function should be used for internal and specialized purposes only.

Raises an auditing event `sys._current_frames` with no arguments.

### Syntax

```python
sys._current_frames()
```