const crypto  = require('crypto')

function toFind(prefix)
 {
    let input = 0
    while(true){
        let inputStr = "100xdevs" + input.toString()
        const hash  =  crypto.createHash('sha256').update(inputStr).digest('hex')

        if(hash.startsWith(prefix))
        {
            return{
                input : inputStr,
                hash : hash
            }
        }
        input++
    }
 }

 const result = toFind('00000')
 console.log(`input str of the hash :  ${result.hash} is:  ${result.input}`)