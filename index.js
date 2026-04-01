require('dotenv').config();
const TronWeb = require('tronweb');

const tronWeb = new TronWeb({
  fullHost: process.env.TRON_RPC || 'https://api.trongrid.io',
  privateKey: process.env.PRIVATE_KEY
});

async function checkBalance() {
  const balance = await tronWeb.trx.getBalance(process.env.WALLET_ADDRESS);
  console.log(`TRX Balance: ${balance / 1e6}`);
  
  const contract = await tronWeb.contract().at(process.env.USDT_CONTRACT);
  const usdt = await contract.balanceOf(process.env.WALLET_ADDRESS).call();
  console.log(`USDT Balance: ${usdt / 1e6}`);
}

checkBalance().catch(console.error);
