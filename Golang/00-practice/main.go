package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	
	// take user input 
	reader := bufio.NewReader(os.Stdin);
	fmt.Println("Enter your favourite number:")
	input, _ := reader.ReadString('\n')
	fmt.Println(input)
}