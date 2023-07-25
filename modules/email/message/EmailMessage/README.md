# email.message.EmailMessage()

If **policy** is specified use the rules it specifies to update and serialize the representation of the message. If **policy** is not set, use the [`default`](/modules/email/policy/default.md) policy, which follows the rules of the email RFCs except for line endings (instead of the RFC mandated `\r\n`, it uses the Python standard `\n` line endings). For more information see the [`policy`](/modules/email/policy/) documentation.

### Syntax

```python
email.message.EmailMessage(policy=default)
```