package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main()  {
	fmt.Println("Welcomme to pizza app")
	
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Please rate the pizza b/w 1 & 5")
	
	input, _ := reader.ReadString('\n')
	
	fmt.Println("Thanks for rating", input)

	//
	numRating, err := strconv.ParseFloat(strings.TrimSpace(input), 64)

	// error handling
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("Added 1 to rating: ", numRating + 1)
	}
}