const { Gateway, Wallets } = require('fabric-network');
const path = require('path');
const fs = require('fs');

const connectToNetwork = async () => {
    const ccpPath = path.resolve(__dirname, '..', 'fabric', 'connection.json');
    const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = await Wallets.newFileSystemWallet(walletPath);

    const identity = 'admin';

    const gateway = new Gateway();
    await gateway.connect(ccp, {
        wallet,
        identity,
        discovery: { enabled: true, asLocalhost: true },
    });

    const network = await gateway.getNetwork('mychannel');
    const contract = network.getContract('fishchain');

    return contract;
};

module.exports = connectToNetwork;
