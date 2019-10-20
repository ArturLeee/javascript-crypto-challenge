const libsodium = require('libsodium-wrappers');
let serverPublicKey, clientPublicKey, serverPrivateKey;
let rx, tx;

async function init()
{
    await libsodium.ready;

    const keypair = libsodium.crypto_kx_keypair();

    serverPrivateKey = keypair.privateKey;
    serverPublicKey = keypair.publicKey;
}

async function serverPublicKey()
{
    await init();
    return serverPublicKey;
}
module.exports.serverPublicKey = serverPublicKey;

function setClientPublicKey(publickey)
{
    if(publickey != null && (typeof(clientPublicKey) == 'undefined') || clientPublicKey == null || clientPublicKey == publickey)
    {
        clientPublicKey = publickey;
    } else
    throw "client public key already set";
}
module.exports.setClientPublicKey = setClientPublicKey;

