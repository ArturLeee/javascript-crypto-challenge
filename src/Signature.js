const libsodium = require('libsodium-wrappers');
let keypair = null;
let libsodiumLoad = async () => await libsodium.ready;

(async () => {
    await libsodiumLoad();
    keypair = libsodium.crypto_sign_keypair();
}
)();

async function verifyingKey()
{
    await libsodiumLoad();

    return keypair.publicKey;
}

async function sign(msg)
{
    return libsodium.crypto_sign(msg,keypair.privateKey);
}

module.exports.verifyingKey = verifyingKey;
module.exports.sign = sign;