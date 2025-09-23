const crypto = require('crypto');

// 1. Generate a random byte sequence
const randomValue = crypto.randomBytes(16);
console.log('Random Bytes:', randomValue.toString('hex'));

// 2. Create a SHA-256 hash of a string
const hash = crypto.createHash('sha256').update('Hello, World!').digest('hex');
console.log('SHA-256 Hash:', hash);