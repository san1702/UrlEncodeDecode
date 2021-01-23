function urlEncode(url) {
  return encodeURIComponent(url);
}

function urlDecode(url) {
  return decodeURIComponent(url);
}


const readLineSync = require('readline-sync');

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1. urlEncode\n2. urlDecode\n'));

if(selectedUtilityOption === 1)
{
  const urlToEncode = readLineSync.question('Please enter the url to be encoded\n');
    const encodedURL = urlEncode(urlToEncode);
    console.log(encodedURL);
}
else if(selectedUtilityOption === 2)
{
   const urlToDecode = readLineSync.question('Please enter the url to be decoded\n');
    const decodedURL = urlDecode(urlToDecode);
    console.log(decodedURL);
}
else {
  console.log(`Please select the correct option.`)
}

