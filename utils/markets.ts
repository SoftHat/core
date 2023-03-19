import { BigNumber } from 'ethers'
import {
  arbitrum,
  arbitrumGoerli,
  mainnet,
  polygon,
  zkSyncTestnet,
} from '@wagmi/chains'

import { CLOBER_ADMIN, MARKET_TYPE, TOKEN } from './constant'

type MarketConfig = {
  name: string
  host: string
  type: number
  quoteToken: string
  baseToken: string
  quoteUnit: BigNumber
  makeFee: number
  takeFee: number
  address?: string
}

export type VolatileMarketConfig = MarketConfig & {
  a: BigNumber
  r: BigNumber
}

export type StableMarketConfig = MarketConfig & {
  a: BigNumber
  d: BigNumber
}

type MarketConfigs = {
  [network: string]: (StableMarketConfig | VolatileMarketConfig)[]
}

export const marketConfigs: MarketConfigs = {
  // TODO: use `@wagmi/chain`
  [1442]: [
    {
      name: 'DAI/cUSD-stable',
      host: '0x5F79EE8f8fA862E98201120d83c4eC39D9468D49',
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[1442].CUSD, // cUSD
      baseToken: TOKEN[1442].DAI, // DAI
      quoteUnit: BigNumber.from('1'),
      makeFee: -40,
      takeFee: 60,
      a: BigNumber.from(10).pow(14),
      d: BigNumber.from(10).pow(14),
      address: '0xA91326B66cc05A31Ad2097A94CB76455BC5aA20b',
    },
    {
      name: 'CLOB/cUSD-volatile',
      host: '0x5F79EE8f8fA862E98201120d83c4eC39D9468D49',
      type: MARKET_TYPE.VOLATILE,
      quoteToken: TOKEN[1442].CUSD, // cUSD
      baseToken: TOKEN[1442].CLOB, // CLOB
      quoteUnit: BigNumber.from('1'),
      makeFee: -200,
      takeFee: 400,
      a: BigNumber.from(10).pow(10),
      r: BigNumber.from(1001).mul(BigNumber.from(10).pow(15)),
      address: '0x88A62426fE0D591BC647184FD6388b8668733ad2',
    },
  ],
  [zkSyncTestnet.id]: [
    {
      name: 'WETH/USDC',
      host: '0x5F79EE8f8fA862E98201120d83c4eC39D9468D49',
      type: MARKET_TYPE.VOLATILE,
      quoteToken: TOKEN[zkSyncTestnet.id].USDC,
      baseToken: TOKEN[zkSyncTestnet.id].WETH,
      quoteUnit: BigNumber.from('1'),
      makeFee: -100,
      takeFee: 500,
      a: BigNumber.from(10).pow(10),
      r: BigNumber.from(1001).mul(BigNumber.from(10).pow(15)),
      address: '0x536790CcB1FA5ee19645031570C1642Be2Bdd1c8',
    },
    {
      name: 'DAI/USDC',
      host: '0x5F79EE8f8fA862E98201120d83c4eC39D9468D49',
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[zkSyncTestnet.id].USDC,
      baseToken: TOKEN[zkSyncTestnet.id].DAI,
      quoteUnit: BigNumber.from('1'),
      makeFee: -10,
      takeFee: 90,
      a: BigNumber.from(10).pow(14),
      d: BigNumber.from(10).pow(14),
      address: '0xDcB91c6ec7c4Ac3cFBcEf6Df198407F32C621A3A',
    },
  ],
  [mainnet.id]: [
    {
      name: 'WETH/USDC',
      host: CLOBER_ADMIN[mainnet.id],
      type: MARKET_TYPE.VOLATILE,
      quoteToken: TOKEN[mainnet.id].USDC,
      baseToken: TOKEN[mainnet.id].WETH,
      quoteUnit: BigNumber.from('1'),
      makeFee: -100,
      takeFee: 500,
      a: BigNumber.from(10).pow(10),
      r: BigNumber.from(1001).mul(BigNumber.from(10).pow(15)),
      address: '0xFBfd6eA54C50cb48ecAD02dB2Cf167daFdC81355',
    },
    {
      name: 'DAI/USDC',
      host: CLOBER_ADMIN[mainnet.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[mainnet.id].USDC,
      baseToken: TOKEN[mainnet.id].DAI,
      quoteUnit: BigNumber.from('1'),
      makeFee: -10,
      takeFee: 90,
      a: BigNumber.from(10).pow(14),
      d: BigNumber.from(10).pow(14),
      address: '0x1c230Df6364af81d1585C3B3e6aC5aaD2daD9bD9',
    },
    {
      name: 'USDC/USDT',
      host: CLOBER_ADMIN[mainnet.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[mainnet.id].USDT,
      baseToken: TOKEN[mainnet.id].USDC,
      quoteUnit: BigNumber.from('1'),
      makeFee: -10,
      takeFee: 90,
      a: BigNumber.from(10).pow(14),
      d: BigNumber.from(10).pow(14),
      address: '0xb853dB46f47FEBC24E1493573f2d7A195635CCf8',
    },
  ],
  [polygon.id]: [
    {
      name: 'WETH/USDC',
      host: CLOBER_ADMIN[polygon.id],
      type: MARKET_TYPE.VOLATILE,
      quoteToken: TOKEN[polygon.id].USDC,
      baseToken: TOKEN[polygon.id].WETH,
      quoteUnit: BigNumber.from('1'),
      makeFee: -100,
      takeFee: 500,
      a: BigNumber.from(10).pow(10),
      r: BigNumber.from(1001).mul(BigNumber.from(10).pow(15)),
      address: '0x6EF4dBa10BE9A64fC8A4BD74d613999787488666',
    },
    {
      name: 'WMATIC/USDC',
      host: CLOBER_ADMIN[polygon.id],
      type: MARKET_TYPE.VOLATILE,
      quoteToken: TOKEN[polygon.id].USDC,
      baseToken: TOKEN[polygon.id].WMATIC,
      quoteUnit: BigNumber.from('1'),
      makeFee: -100,
      takeFee: 500,
      a: BigNumber.from(10).pow(10),
      r: BigNumber.from(1001).mul(BigNumber.from(10).pow(15)),
      address: '0x410b33f656EE634B977BB1334E827d81d25E0Cb6',
    },
    {
      name: 'DAI/USDC',
      host: CLOBER_ADMIN[polygon.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[polygon.id].USDC,
      baseToken: TOKEN[polygon.id].DAI,
      quoteUnit: BigNumber.from('1'),
      makeFee: -10,
      takeFee: 90,
      a: BigNumber.from(10).pow(14),
      d: BigNumber.from(10).pow(14),
      address: '0x4457d03FE38a8CE83591bc09eF5B4085b9c38117',
    },

    {
      name: 'USDC/USDT',
      host: CLOBER_ADMIN[polygon.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[polygon.id].USDT,
      baseToken: TOKEN[polygon.id].USDC,
      quoteUnit: BigNumber.from('1'),
      makeFee: -10,
      takeFee: 90,
      a: BigNumber.from(10).pow(14),
      d: BigNumber.from(10).pow(14),
      address: '0x8be0921EaE1C60AE2a9f6c198b87F6E28AA4cdb9',
    },
  ],
  [arbitrum.id]: [
    {
      name: 'ARB$0_5PUT/USDC',
      host: CLOBER_ADMIN[arbitrum.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[arbitrum.id].USDC,
      baseToken: TOKEN[arbitrum.id].Arbitrum$0_5PutOption,
      quoteUnit: BigNumber.from('1'),
      makeFee: 0,
      takeFee: 1000,
      a: BigNumber.from(10).pow(16),
      d: BigNumber.from(10).pow(16),
      address: '0xDD4faa66E88f8EB52138FD7135d5b90EEeF42ca6',
    },
    {
      name: 'ARB$1PUT/USDC',
      host: CLOBER_ADMIN[arbitrum.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[arbitrum.id].USDC,
      baseToken: TOKEN[arbitrum.id].Arbitrum$1PutOption,
      quoteUnit: BigNumber.from('1'),
      makeFee: 0,
      takeFee: 1000,
      a: BigNumber.from(10).pow(16),
      d: BigNumber.from(10).pow(16),
      address: '0x9f7d97c2A6faf67172FD953e5300Af2d812c2ADD',
    },
    {
      name: 'ARB$2PUT/USDC',
      host: CLOBER_ADMIN[arbitrum.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[arbitrum.id].USDC,
      baseToken: TOKEN[arbitrum.id].Arbitrum$2PutOption,
      quoteUnit: BigNumber.from('1'),
      makeFee: 0,
      takeFee: 1000,
      a: BigNumber.from(10).pow(16).mul(2),
      d: BigNumber.from(10).pow(16).mul(2),
      address: '0xe10a215D29E0DEC9eF8eAB4ad0c40aE89E1a0569',
    },
    {
      name: 'ARB$4PUT/USDC',
      host: CLOBER_ADMIN[arbitrum.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[arbitrum.id].USDC,
      baseToken: TOKEN[arbitrum.id].Arbitrum$4PutOption,
      quoteUnit: BigNumber.from('1'),
      makeFee: 0,
      takeFee: 1000,
      a: BigNumber.from(10).pow(16).mul(4),
      d: BigNumber.from(10).pow(16).mul(4),
      address: '0x31953016364543d12FEFbc1418810Ded511044a0',
    },
    {
      name: 'ARB$8PUT/USDC',
      host: CLOBER_ADMIN[arbitrum.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[arbitrum.id].USDC,
      baseToken: TOKEN[arbitrum.id].Arbitrum$8PutOption,
      quoteUnit: BigNumber.from('1'),
      makeFee: 0,
      takeFee: 1000,
      a: BigNumber.from(10).pow(16).mul(8),
      d: BigNumber.from(10).pow(16).mul(8),
      address: '0x5A2d06949057Ce3a3d85fb6Bd53ebe8936609D3D',
    },
    {
      name: 'ARB$16PUT/USDC',
      host: CLOBER_ADMIN[arbitrum.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[arbitrum.id].USDC,
      baseToken: TOKEN[arbitrum.id].Arbitrum$16PutOption,
      quoteUnit: BigNumber.from('1'),
      makeFee: 0,
      takeFee: 1000,
      a: BigNumber.from(10).pow(16).mul(16),
      d: BigNumber.from(10).pow(16).mul(16),
      address: '0x0071a75f81Fd939f65c09cC15E90f3c140FC591a',
    },
    {
      name: 'WETH/USDC',
      host: CLOBER_ADMIN[arbitrum.id],
      type: MARKET_TYPE.VOLATILE,
      quoteToken: TOKEN[arbitrum.id].USDC,
      baseToken: TOKEN[arbitrum.id].WETH,
      quoteUnit: BigNumber.from('1'),
      makeFee: -100,
      takeFee: 500,
      a: BigNumber.from(10).pow(10),
      r: BigNumber.from(1001).mul(BigNumber.from(10).pow(15)),
      address: '0xC3c5316AE6f1e522E65074b70608C1Df01F93AE0',
    },
    {
      name: 'DAI/USDC',
      host: CLOBER_ADMIN[arbitrum.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[arbitrum.id].USDC,
      baseToken: TOKEN[arbitrum.id].DAI,
      quoteUnit: BigNumber.from('1'),
      makeFee: -10,
      takeFee: 90,
      a: BigNumber.from(10).pow(14),
      d: BigNumber.from(10).pow(14),
      address: '0x02F4DC911919AcB274ceA42DfEb3481C88E4D330',
    },
    {
      name: 'USDC/USDT',
      host: CLOBER_ADMIN[arbitrum.id],
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[arbitrum.id].USDT,
      baseToken: TOKEN[arbitrum.id].USDC,
      quoteUnit: BigNumber.from('1'),
      makeFee: -10,
      takeFee: 90,
      a: BigNumber.from(10).pow(14),
      d: BigNumber.from(10).pow(14),
      address: '0x2639a9b9C2627c0B65a0E7AC26a197FdbAE26e26',
    },
  ],
  [arbitrumGoerli.id]: [
    {
      name: 'WETH/USDC-volatile',
      host: '0x5F79EE8f8fA862E98201120d83c4eC39D9468D49',
      type: MARKET_TYPE.VOLATILE,
      quoteToken: TOKEN[arbitrumGoerli.id].CUSD,
      baseToken: TOKEN[arbitrumGoerli.id].WETH,
      quoteUnit: BigNumber.from('1'),
      makeFee: -200,
      takeFee: 400,
      a: BigNumber.from(10).pow(10),
      r: BigNumber.from(1001).mul(BigNumber.from(10).pow(15)),
      address: '0x96439d7A5Af93546A2955DC25DD0C439cc79d80c',
    },
    {
      name: 'DAI/cUSD-stable',
      host: '0x5F79EE8f8fA862E98201120d83c4eC39D9468D49',
      type: MARKET_TYPE.STABLE,
      quoteToken: TOKEN[arbitrumGoerli.id].CUSD,
      baseToken: TOKEN[arbitrumGoerli.id].DAI,
      quoteUnit: BigNumber.from('1'),
      makeFee: -40,
      takeFee: 60,
      a: BigNumber.from(10).pow(14),
      d: BigNumber.from(10).pow(14),
      address: '0x7AEE813c627CBA5E3A2728F6F7F43E2A028d083F',
    },
    {
      name: 'CLOB/cUSD-volatile',
      host: '0x5F79EE8f8fA862E98201120d83c4eC39D9468D49',
      type: MARKET_TYPE.VOLATILE,
      quoteToken: TOKEN[arbitrumGoerli.id].CUSD,
      baseToken: TOKEN[arbitrumGoerli.id].CLOB,
      quoteUnit: BigNumber.from('1'),
      makeFee: -200,
      takeFee: 400,
      a: BigNumber.from(10).pow(10),
      r: BigNumber.from(1001).mul(BigNumber.from(10).pow(15)),
      address: '0xfCf0b6D6153Ad9f25995c64c28b497ab27Be7FEd',
    },
  ],
}

export const initialRegisteredQuoteTokens: { [network: string]: string[] } = {
  [mainnet.id]: [
    TOKEN[mainnet.id].USDC,
    TOKEN[mainnet.id].DAI,
    TOKEN[mainnet.id].USDT,
  ],
  [polygon.id]: [
    TOKEN[polygon.id].USDC,
    TOKEN[polygon.id].DAI,
    TOKEN[polygon.id].USDT,
  ],
  [arbitrum.id]: [
    TOKEN[arbitrum.id].USDC,
    TOKEN[arbitrum.id].DAI,
    TOKEN[arbitrum.id].USDT,
  ],
}
