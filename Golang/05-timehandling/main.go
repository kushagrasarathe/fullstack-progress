package main

import (
	"fmt"
	"time"
)

func main()  {
	fmt.Println("Welcome!!!")

	presentTime := time.Now()
	fmt.Println(presentTime)
	fmt.Println(presentTime.Format("01-02-2006 15:04:05 Monday"))
	fmt.Println(presentTime.Format("01-02-2006"))
	fmt.Println(presentTime.Format("15:04:05"))
	fmt.Println(presentTime.Format("Monday"))
}