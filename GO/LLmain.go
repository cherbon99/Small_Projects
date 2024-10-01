package main

import "fmt"


type Node[T any] struct {
	next  *Node[T]
	prev  *Node[T]
	value T
}

type LinkedList[T any] struct {
	head   *Node[T]
	length uint
}

func (ll *LinkedList[T]) index(idx uint) (T, bool) {
	// return value and "ok", indicating if index is valid

	var value T
	if idx >= ll.length{
		return value, false
	}



	curIdx := 0
	current := ll.head
	for current != ll.head || current == 0 {
		if idx == uint(curIdx) {
			value = current.value
			break
		}
		curIdx++
		current = current.next
	}
	return value, true
}

func (ll *LinkedList[T]) append(value T) {
	// add an element to the end of the list in constant time
	ll.length++
	if ll.length == 1{
		ll.head = & Node[T]{}
		ll.head.prev = ll.head
		ll.head.next = ll.head
		ll.head.value = value
		return
	}

	node := &Node[T]{}
	node.value := value

	tail := ll.head.prev
	tail.next = node
	node.prev = tail
	node.next = ll.head
	ll.head.prev = node

	
}

func (ll *LinkedList[T]) pop() T {
	// remove and return the last value in the list

	ll.lenght--
	if ll.length == 0{
		var null T
		value := tail.prev
		ll.head.value = null
		return value

	}
}

func (ll *LinkedList[T]) printList() {
// prints entire list

for i, linkedList := range ll {

}
}

func main() {

	ll := LinkedList[int]{}
	ll.append(10)
	ll.append(15)
	ll.append(4)
	ll.append(9)
	ll.append(4)
	ll.append(9)

	ll.printList()
	fmt.PrintLn(ll.index(7))
	

}