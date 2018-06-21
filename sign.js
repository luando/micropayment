/*  Requirements
    - sender call approve function of token contract which indicate RaidenMicroTransferChannels contract address as spender
    - sender call createChannel function of RaidenMicroTransferChannels with necessary input information
*/


// - For sender
// create proof of balance message by calling keccak5 function => then sign this message with private key => proof of balance signature 
// if using old contract RaidenMicroTransferChannels which does not include geth prefix => call addprefix function

// var balance_proof_signature = web3.eth.sign(web3.eth.accounts[0], 'proof of balance')
// console.log('Signature:', balance_proof_signature);

// for receiver
// create proof of closing channel message by calling keccak4 function => then sign this message with private key =>  => proof of closing signature
// if using old contract RaidenMicroTransferChannels which does not include geth prefix => call addprefix function

// var closing_signature = web3.eth.sign(web3.eth.accounts[0], 'closing proof')
// console.log('Signature:', closing_signature);


/* cooperativeClosing channel
    - sender have enough infomation for closing channel
    - sender call cooperativeClose function with signatures
*/


var msg = "abc"
var hash = web3.sha3(msg);

console.log(hash); // "0xed973b234cf2238052c9ac87072c71bcf33abc1bbd721018e0cca448ef79b379"
console.log(web3.eth.accounts[0])
console.log('sign')
// var signature = web3.eth.sign(web3.eth.accounts[0],"0x855e691be6c8ba19e6fa5d6231db17bfa613ce786ed3afcf93bd0f0054612b2b")// balance signature
// var signature = web3.eth.sign(web3.eth.accounts[0],"0x199fe195ca67a7ac4ccbe92805a9574e17a28109bd495c65c9361bdfbc4d0581")// closing signature

var signature = web3.eth.sign(web3.eth.accounts[0], '0x3c1b4b1e9c974084411d04b3f255241b36c5a1a6b751e2de39e7616e4d61ab7f')
console.log('Signature:', signature);
signature = signature.substr(2);
r = '0x' + signature.substr(0, 64);
s = '0x' + signature.substr(64, 64);
v = '0x' + signature.substr(128, 2)

console.log('        r:', r)
console.log('        s:', s)
console.log('        v:', v)
console.log();