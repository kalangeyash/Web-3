let UInt8Arr = new Uint8Array([0,255,127,128])
console.log("Before Changing "+UInt8Arr[1])

UInt8Arr[1] = 256;
console.log("After Changing "+UInt8Arr[1])


