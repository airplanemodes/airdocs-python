# KeyboardInterrupt

Raised when the user hits the interrupt key (normally `Control-C` or `Delete`). During execution, a check for interrupts is made regularly. The exception inherits from [`BaseException`](/exceptions/BaseException.md) so as to not be accidentally caught by code that catches [`Exception`](/exceptions/Exception.md) and thus prevent the interpreter from exiting.

?> Catching a `KeyboardInterrupt` requires special consideration. Because it can be raised at unpredictable points, it may, in some circumstances, leave the running program in an inconsistent state. It is generally best to allow `KeyboardInterrupt` to end the program as quickly as possible or avoid raising it entirely.
