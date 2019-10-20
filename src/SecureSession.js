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

