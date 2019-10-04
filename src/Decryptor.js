const libsodium = require('libsodium-wrappers');
let key = null;

async function setKey(key1)
{
    key = key1;
}

async function decrypt(msg, nonce)
{
    if(key == null)
    {
        throw 'no key';
    }
    else
    {
        return libsodium.crypto_secretbox_open_easy(msg, nonce, key);
    }
}

module.exports.setKey = setKey;
module.exports.decrypt = decrypt;
