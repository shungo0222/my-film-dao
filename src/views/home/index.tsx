// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          My Film DAO
        </h1>
        <h2 className="md:w-full text-2xl text-center text-slate-300 my-2">
          This DAO will give you the power to express your imagination easily.
          You have an idea? Now it's the time to shape it!! Not just watching!!
        </h2>
        {/* <div className="max-w-md mx-auto mockup-code bg-primary p-6 my-2">
          <pre data-prefix=">">
            <code className="truncate">Start building on Solana  </code>
          </pre>
        </div>         */}
        <div className="text-center">
          {/* <RequestAirdrop /> */}
          {/* {wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>} */}
          {wallet && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>}
        </div>
        <h3 className="text-5xl">
          How to use
        </h3>
        <h4 className="text-2xl">
          1. Choose what you want to do
        </h4>
        If you want to MAKE a movie : MINT A NEW NFT AS YOUR MOVIE<br />
        If you want to support a movie : PICK A MOVIE YOU WANT TO SUPPORT
        <h4 className="text-2xl">
          2. Make a movie / Stake
        </h4>
        <h4 className="text-2xl">
          3. Supporters can get tokens as a reward according to how much they staked
        </h4>
        <h1 className="text-5xl text-red-600">
          Let's connect your wallet first!!
        </h1>
      </div>
    </div>
  );
};
