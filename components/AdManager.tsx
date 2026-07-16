'use client';
import { useEffect } from 'react';

interface AdManagerProps {
  networkCode: string;
  chassisCode: string;
  floorAtf?: number;
  floorMr?: number;
  floorBtf?: number;
}

export default function AdManager({ networkCode, chassisCode, floorAtf = 2.00, floorMr = 1.50, floorBtf = 0.75 }: AdManagerProps) {
  useEffect(() => {
    if (!networkCode || networkCode === 'PLACEHOLDER') return;

    window.googletag = window.googletag || { cmd: [] };
    window.pbjs = window.pbjs || { que: [] };

    const pbjs = window.pbjs;

    pbjs.que.push(() => {
      pbjs.setConfig({
        priceGranularity: 'medium',
        bidderTimeout: 1500,
        enableSendAllBids: false,
        userSync: { syncEnabled: true, filterSettings: { all: { bidders: '*', filter: 'include' } } },
        currency: { adServerCurrency: 'USD' },
        floors: {
          enforcement: { floorDeals: true },
          data: {
            currency: 'USD',
            schema: { fields: ['gptSlot'] },
            values: {
              [`/${networkCode}/SternBaureihe/${chassisCode}/atf_leaderboard`]: floorAtf,
              [`/${networkCode}/SternBaureihe/${chassisCode}/content_rectangle_1`]: floorMr,
              [`/${networkCode}/SternBaureihe/${chassisCode}/content_rectangle_2`]: floorMr,
              [`/${networkCode}/SternBaureihe/${chassisCode}/btf_skyscraper`]: floorBtf,
            }
          }
        }
      });

      pbjs.addAdUnits([
        {
          code: `sb-${chassisCode}-atf`,
          mediaTypes: { banner: { sizes: [[728, 90], [320, 50]] } },
          bids: [
            { bidder: 'criteo', params: { networkId: 0 } },
            { bidder: 'pubmatic', params: { publisherId: '0', adSlot: `SternBaureihe_ATF` } },
            { bidder: 'openx', params: { unit: '0', delDomain: 'sternbaureihe-d.openx.net' } },
            { bidder: 'ix', params: { siteId: '0', size: [728, 90] } },
            { bidder: 'triplelift', params: { inventoryCode: 'SternBaureihe_ATF' } },
            { bidder: 'sovrn', params: { tagid: '0' } },
            { bidder: 'rubicon', params: { accountId: '0', siteId: '0', zoneId: '0' } },
          ]
        },
        {
          code: `sb-${chassisCode}-mr1`,
          mediaTypes: { banner: { sizes: [[300, 250]] } },
          bids: [
            { bidder: 'criteo', params: { networkId: 0 } },
            { bidder: 'pubmatic', params: { publisherId: '0', adSlot: 'SternBaureihe_MR1' } },
            { bidder: 'openx', params: { unit: '0', delDomain: 'sternbaureihe-d.openx.net' } },
            { bidder: 'ix', params: { siteId: '0', size: [300, 250] } },
            { bidder: 'triplelift', params: { inventoryCode: 'SternBaureihe_MR1' } },
            { bidder: 'sovrn', params: { tagid: '0' } },
            { bidder: 'rubicon', params: { accountId: '0', siteId: '0', zoneId: '0' } },
          ]
        },
        {
          code: `sb-${chassisCode}-mr2`,
          mediaTypes: { banner: { sizes: [[300, 250]] } },
          bids: [
            { bidder: 'criteo', params: { networkId: 0 } },
            { bidder: 'pubmatic', params: { publisherId: '0', adSlot: 'SternBaureihe_MR2' } },
            { bidder: 'openx', params: { unit: '0', delDomain: 'sternbaureihe-d.openx.net' } },
            { bidder: 'ix', params: { siteId: '0', size: [300, 250] } },
            { bidder: 'triplelift', params: { inventoryCode: 'SternBaureihe_MR2' } },
            { bidder: 'sovrn', params: { tagid: '0' } },
            { bidder: 'rubicon', params: { accountId: '0', siteId: '0', zoneId: '0' } },
          ]
        },
        {
          code: `sb-${chassisCode}-btf`,
          mediaTypes: { banner: { sizes: [[160, 600], [300, 250]] } },
          bids: [
            { bidder: 'criteo', params: { networkId: 0 } },
            { bidder: 'pubmatic', params: { publisherId: '0', adSlot: 'SternBaureihe_BTF' } },
            { bidder: 'openx', params: { unit: '0', delDomain: 'sternbaureihe-d.openx.net' } },
            { bidder: 'ix', params: { siteId: '0', size: [160, 600] } },
            { bidder: 'triplelift', params: { inventoryCode: 'SternBaureihe_BTF' } },
            { bidder: 'sovrn', params: { tagid: '0' } },
            { bidder: 'rubicon', params: { accountId: '0', siteId: '0', zoneId: '0' } },
          ]
        }
      ]);

      window.googletag.cmd.push(() => {
        window.googletag.pubads().setTargeting('chassis', chassisCode);
        window.googletag.pubads().setTargeting('iab_cat', ['IAB2', 'IAB2-1']);
        window.googletag.pubads().setTargeting('content_type', 'editorial');
        window.googletag.pubads().setTargeting('brand_safety', 'automotive_enthusiast');
      });
    });
  }, [networkCode, chassisCode, floorAtf, floorMr, floorBtf]);

  return null;
}
