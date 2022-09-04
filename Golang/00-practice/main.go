package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {

	// take user input
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter your favourite number:")
	input, _ := reader.ReadString('\n')
	fmt.Println(input)
}

// Codewars Solution - Convert integer to string
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/go
func NumberToString(n int) string {
	return strconv.Itoa(n)
}

// Codewars Solution - Multiplying to numbers
// https://www.codewars.com/kata/523b66342d0c301ae400003b/train/go
func Multiply(num1 int, num2 int) int {
	result := num1 * num2
	fmt.Println(result)
	return result
}
