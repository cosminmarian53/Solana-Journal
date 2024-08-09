// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Cluster, PublicKey } from '@solana/web3.js';
import JournalIDL from '../target/idl/journal.json';
import type { Journal } from '../target/types/journal';

// Re-export the generated IDL and type
export { Journal, JournalIDL };

// This is a helper function to get the Counter Anchor program.
export const JOURNAL_PROGRAM_ID = new PublicKey(
  '2K12Sj4LaCKpC9W6kT87yKyKBLY79Ms5NKmtpjwMbazj'
);
// This is a helper function to get the Counter Anchor program.
export function getJournalProgram(provider: AnchorProvider) {
  return new Program(JournalIDL as Journal, provider);
}

// This is a helper function to get the program ID for the Journal program depending on the cluster.
export function getJournalProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
    case 'mainnet-beta':
    default:
      return JOURNAL_PROGRAM_ID;
  }
}
