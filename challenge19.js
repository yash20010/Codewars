// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!
//
// Examples:
//
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:
//
// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

function encrypt(text, n) {
  if(text){
    for(let i = n; i > 0; i--){
        let encrypt = ''
        encrypt += text.split('').filter((let,i) => i%2 === 1).join('')
        text = text.split('').filter((let,i) => i%2 === 0).join('')
        text = encrypt + text
      }
  }
  return text
}

function decrypt(encryptedText, n) {
  let decrypt = []
  let decryptedText = ''
  let newtext = encryptedText
  let i = 0
  if(n>0 && encryptedText){
    while(decryptedText !== encryptedText){
      decryptedText=encrypt(newtext, 1)
      decrypt.push(decryptedText)
      newtext = decryptedText
      i++
    }
    console.log(decrypt)
    if(i-n <= 0){
      while(i>n){
        n-=i
      }
      return decrypt[n-1]
    }else{
      return decrypt[i-n-1]
    }
  }else{
    return encryptedText
  }
}

// console.log(encrypt("This is a test!", 0))
// console.log(encrypt("This is a test!", 1))
// console.log(encrypt("This is a test!", 2))
// console.log(encrypt("This is a test!", 3))
// console.log(encrypt("This is a test!", 4))
// console.log(encrypt("This is a test!", -1))
// console.log(encrypt("This kata is very interesting!", 1))

// console.log(decrypt("This is a test!", 0))
// console.log(decrypt("AMA", 2))
// console.log(decrypt("hsi  etTi sats!", 1))
// console.log(decrypt("s eT ashi tist!", 2))
// console.log(decrypt(" Tah itse sits!", 3))
// console.log(decrypt("This is a test!", 4))
// console.log(decrypt("This is a test!", -1))
// console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1))

// console.log(encrypt(" ", 2))
// console.log(decrypt("", 1))
// console.log(encrypt('', 0))
// console.log(decrypt(' ', 0))
// console.log(encrypt(null, 2))
// console.log(decrypt(null, 2))
