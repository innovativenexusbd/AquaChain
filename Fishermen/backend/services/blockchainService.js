const connectToNetwork = require('../config/fabric');

exports.registerFishermanOnBlockchain = async (fisherman) => {
    try {
        const contract = await connectToNetwork();
        await contract.submitTransaction('registerFisherman', JSON.stringify(fisherman));
        console.log('Fisherman registered on blockchain');
    } catch (err) {
        console.error(`Failed to register fisherman on blockchain: ${err}`);
    }
};
