This project highlights the (most) often encountered memory leaks in JS. This example uses class components, but the idea still applies for functional components. Just replace the componentWillUnmount lifecycle method with an useEffect (in the return body)

## Usual memory leak causes:

1. event listeners
2. timeouts/intervals
3. promises.

Inside leaks.txt you can find some code snippets. Just copy paste them inside the body of the LeaksEverywhere.js componentDidMount lifecycle method.

### How to prove the existence of memory leaks

From Chrome devtools, memory tab, make a heapsnapshot. Inside the snapshot look for the LeaksEverywhere component and see what is actually holding a reference to it.

### How to fix the memory leaks

1. For event listeners don't forget to remove them once no longer needed (i.e. component is about to be destroyed).
2. For timeouts/intervals don't forget to clear them.
3. Promises...are a bit more tricky. One would need to create a wrapper on the initial promise and cancel the wrapper. promiseHelper.js provides a wrapper that allows one to create a cancelable promise. Finally, just cancel this promise in the return body of the useEffect or componentWillUnmount.
