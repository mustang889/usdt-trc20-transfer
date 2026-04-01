const TronWeb = require('tronweb');

async function sendUSDT(to, amount) {
  const tronWeb = new TronWeb({
    fullHost: process.env.TRON_RPC,
    privateKey: process.env.PRIVATE_KEY
  });
  
  const contract = await tronWeb.contract().at(process.env.USDT_CONTRACT);
  const tx = await contract.transfer(to, amount * 1e6).send();
  return tx;
}

module.exports = { sendUSDT };
