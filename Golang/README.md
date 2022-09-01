# Golang Notes

- Golang is a compiled language
- Executlables are different for different OS
- Almost everything in Go is Type

`go mod init variables`

## Variables in Golang

**Variable declaration:**

`var variable_name variable_type = value;`

- If you declare a variable and not use it, golang will throw error.
- If no value is initailized to a integer type variable, `0` is assigned as a default value, and for string type variable, an empty string is assigned.
- Variable type cannot be changed after a value has been assigned. E.g., String type variable cannot be re-assigned with integer type value.