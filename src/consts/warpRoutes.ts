import { WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command

// export const token1 = {
//   symbol: 'SEP',
//   name: 'SEP',
//   decimals: 18,
//   standard: 'EvmHypCollateral' as any,
//   chainName: 'sepolia',
//   addressOrDenom: "0x1Fcfa6d9228c0571895197260F311cd35940444B",
//   collateralAddressOrDenom: "0xce14f9f2f66fbdf6fc2ce40f2ddab7cd04116b37",

//   connections: [
//     {
//       token: "ethereum|fuji|0x57B8B8b55e7D54b98b34DA69fB88FcB5F0EF7Ac3",
//       type: TokenConnectionType.Hyperlane as TokenConnectionType.Hyperlane
//     }
//   ]
// };

// export const token2 = {
//   symbol: 'SEP',
//   name: 'SEP',
//   decimals: 18,
//   standard: 'EvmHypSynthetic' as any,
//   chainName: 'fuji',
//   addressOrDenom: "0x57B8B8b55e7D54b98b34DA69fB88FcB5F0EF7Ac3",
//   connections: [
//     {
//       token: "ethereum|sepolia|0x1Fcfa6d9228c0571895197260F311cd35940444B",
//       type: TokenConnectionType.Hyperlane as TokenConnectionType.Hyperlane
//     }
//   ]

// };

// const token3 = {
//   symbol: 'OCTE',
//   name: 'OCTE',
//   decimals: 18,
//   standard: 'EvmHypCollateral' as any,
//   chainName: 'fuji',
//   addressOrDenom: "0x46B67e866970382F977Cd00365Aff64aAF3078b7",
//   collateralAddressOrDenom: "0xbc31695798e2aa366276a243f481a1be38d43239",

//   connections: [
//     {
//       token: "ethereum|sepolia|0x7397300088098C17B0Cc4eD8A7394792daA9bc9C",
//       type: TokenConnectionType.Hyperlane as TokenConnectionType.Hyperlane
//     }
//   ]
// };

// const token4 = {
//   symbol: 'OCTE',
//   name: 'OCTE',
//   decimals: 18,
//   standard: 'EvmHypSynthetic' as any,
//   chainName: 'sepolia',
//   addressOrDenom: "0x7397300088098C17B0Cc4eD8A7394792daA9bc9C",
//   connections: [
//     {
//       token: "ethereum|fuji|0x46B67e866970382F977Cd00365Aff64aAF3078b7",
//       type: TokenConnectionType.Hyperlane as TokenConnectionType.Hyperlane
//     }
//   ]

// };

// const token5 = {
//   symbol: 'OCTE',
//   name: 'OCTE',
//   decimals: 18,
//   standard: 'EvmHypCollateral' as any,
//   chainName: 'sepolia',
//   addressOrDenom: "0x3Cb5278499607099932e148a13E1E8E39b205D67",
//   collateralAddressOrDenom: "0x250e89a9bbd6ca2540ddb8c05132de66f9dfdfb1",

//   connections: [
//     {
//       token: "ethereum|fuji|0x7397300088098C17B0Cc4eD8A7394792daA9bc9C",
//       type: TokenConnectionType.Hyperlane as TokenConnectionType.Hyperlane
//     }
//   ]
// };

// const token6 = {
//   symbol: 'OCTE',
//   name: 'OCTE',
//   decimals: 18,
//   standard: 'EvmHypSynthetic' as any,
//   chainName: 'fuji',
//   addressOrDenom: "0x7397300088098C17B0Cc4eD8A7394792daA9bc9C",
//   connections: [
//     {
//       token: "ethereum|sepolia|0x3Cb5278499607099932e148a13E1E8E39b205D67",
//       type: TokenConnectionType.Hyperlane as TokenConnectionType.Hyperlane
//     }
//   ]

// };

// const token7 = {
//   symbol: 'SPTK3',
//   name: 'MyToken',
//   decimals: 18,
//   standard: 'EvmHypCollateral' as any,
//   chainName: 'sepolia',
//   addressOrDenom: "0xd28aD07769b792D3C37036f44aE1eBFC5aC52B47",
//   collateralAddressOrDenom: "0xb581c1F095e6e58124927578e3d5c052e44a778A",

//   connections: [
//     {
//       token: "ethereum|newfuji8|0x3b9C2443F05260143dc32A8C8440774732EFbce4",
//       type: TokenConnectionType.Hyperlane as TokenConnectionType.Hyperlane
//     }
//   ]
// };

// const token8 = {
//   symbol: 'SPTK3',
//   name: 'MyToken',
//   decimals: 18,
//   standard: 'EvmHypSynthetic' as any,
//   chainName: 'newfuji8',
//   addressOrDenom: "0x3b9C2443F05260143dc32A8C8440774732EFbce4",
//   connections: [
//     {
//       token: "ethereum|sepolia|0xd28aD07769b792D3C37036f44aE1eBFC5aC52B47",
//       type: TokenConnectionType.Hyperlane as TokenConnectionType.Hyperlane
//     }
//   ]

// };
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [],
  options: {},
};
