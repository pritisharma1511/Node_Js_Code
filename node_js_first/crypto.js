const crypto = require('crypto');

// 1. Generate a random byte sequence
const randomValue = crypto.randomBytes(16);
console.log('Random Bytes:', randomValue.toString('hex'));