# Golang Notes

- Golang is a compiled language
- Executlables are different for different OS
- Almost everything in Go is Type
- Theres no `try catch` in golang

`go mod init variables`

## Variables in Golang

**Variable declaration:**

`var variable_name variable_type = value;`

- If you declare a variable and not use it, golang will throw error.
- If no value is initailized to a integer type variable, `0` is assigned as a default value, and for string type variable, an empty string is assigned.
- Variable type cannot be changed after a value has been assigned. E.g., String type variable cannot be re-assigned with integer type value.

## Time in Golang

To get the current time using Golang, we use the `time.Now()` method, this gives the current time in the following format:

```go
2022-09-02 21:34:30.719384 +0530 IST m=+0.000091918
```

To get the above data formatted we use the following format:

```go
time.Now().Format("01-02-2006 15:04:05 Monday")
```
> **_NOTE:_**
> Golang only takes these specific details to return formated date and time.
