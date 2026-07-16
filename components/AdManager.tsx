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

    const w = window as any;
    w.googletag = w.googletag || { cmd: [] };
    w.pbjs = w.pbjs || { que: [] };
    const pbjs = w.pbjs;
    const nc = networkCode;
    const cc = chassisCode;

    pbjs.que.push(() => {
      pbjs.setConfig({
        priceGranularity: 'medium',
        bidderTimeout: 1500,
        enableSendAllBids: false,
        userSync: { syncEnabled: true, filterSettings: { all: { bidders: '*', filter: 'include' } } },
        currency: { adServerCurrency: 'USD' },
        schain: {
          validation: 'relaxed',
          config: {
            ver: '1.0',
            complete: 1,
            nodes: [{ asi: 'sternbaureihe.com', sid: '1', hp: 1 }]
          }
        },
        floors: {
          enforcement: { floorDeals: true },
          data: {
            currency: 'USD',
            schema: { fields: ['gptSlot'] },
            values: {
              ['/' + nc + '/SternBaureihe/' + cc + '/atf_leaderboard']: floorAtf,
              ['/' + nc + '/SternBaureihe/' + cc + '/content_rectangle_1']: floorMr,
              ['/' + nc + '/SternBaureihe/' + cc + '/content_rectangle_2']: floorMr,
              ['/' + nc + '/SternBaureihe/' + cc + '/btf_skyscraper']: floorBtf,
            }
          }
        }
      });

      const makeBids = (slot: string, size: string) => [
        { bidder: 'criteo', params: { networkId: parseInt(process.env.NEXT_PUBLIC_CRITEO_NETWORK_ID || '0') } },
        { bidder: 'pubmatic', params: { publisherId: process.env.NEXT_PUBLIC_PUBMATIC_PUBLISHER_ID || '0', adSlot: 'SternBaureihe_' + slot } },
        { bidder: 'openx', params: { unit: process.env.NEXT_PUBLIC_OPENX_UNIT || '0', delDomain: 'sternbaureihe-d.openx.net' } },
        { bidder: 'ix', params: { siteId: process.env.NEXT_PUBLIC_IX_SITE_ID || '0', size: size === '728x90' ? [728,90] : size === '300x250' ? [300,250] : [160,600] } },
        { bidder: 'triplelift', params: { inventoryCode: 'SternBaureihe_' + slot } },
        { bidder: 'sovrn', params: { tagid: process.env.NEXT_PUBLIC_SOVRN_TAGID || '0' } },
        { bidder: 'rubicon', params: { accountId: process.env.NEXT_PUBLIC_RUBICON_ACCOUNT_ID || '0', siteId: process.env.NEXT_PUBLIC_RUBICON_SITE_ID || '0', zoneId: process.env.NEXT_PUBLIC_RUBICON_ZONE_ID || '0' } },
        { bidder: 'appnexus', params: { placementId: parseInt(process.env.NEXT_PUBLIC_APPNEXUS_PLACEMENT_ID || '0') } },
        { bidder: 'magnite', params: { accountId: parseInt(process.env.NEXT_PUBLIC_MAGNITE_ACCOUNT_ID || '0') } },
        { bidder: 'teads', params: { pageId: parseInt(process.env.NEXT_PUBLIC_TEADS_PAGE_ID || '0'), placementId: parseInt(process.env.NEXT_PUBLIC_TEADS_PLACEMENT_ID || '0') } },
        { bidder: 'sharethrough', params: { pkey: process.env.NEXT_PUBLIC_SHARETHROUGH_PKEY || '0' } },
        { bidder: 'gumgum', params: { zone: process.env.NEXT_PUBLIC_GUMGUM_ZONE || '0' } },
        { bidder: 'kargo', params: { placementId: process.env.NEXT_PUBLIC_KARGO_PLACEMENT_ID || '0' } },
        { bidder: '33across', params: { siteId: process.env.NEXT_PUBLIC_33ACROSS_SITE_ID || '0', productId: 'siab' } },
        { bidder: 'yieldmo', params: { placementId: process.env.NEXT_PUBLIC_YIELDMO_PLACEMENT_ID || '0' } },
        { bidder: 'seedtag', params: { publisherId: process.env.NEXT_PUBLIC_SEEDTAG_PUBLISHER_ID || '0', adUnitId: process.env.NEXT_PUBLIC_SEEDTAG_AD_UNIT_ID || '0', placement: 'inBanner' } },
        { bidder: 'undertone', params: { publisherId: process.env.NEXT_PUBLIC_UNDERTONE_PUBLISHER_ID || '0' } },
        { bidder: 'freestar', params: { placementName: 'sternbaureihe_' + slot.toLowerCase() } },
        { bidder: 'emtv', params: { tagid: process.env.NEXT_PUBLIC_NEXXEN_TAG_ID || '0' } },
        { bidder: 'inmobi', params: { accountId: process.env.NEXT_PUBLIC_INMOBI_ACCOUNT_ID || '0' } },
        { bidder: 'smaato', params: { publisherId: process.env.NEXT_PUBLIC_SMAATO_PUBLISHER_ID || '0', adSpaceId: process.env.NEXT_PUBLIC_SMAATO_ADSPACE_ID || '0' } },
        { bidder: 'adform', params: { mid: parseInt(process.env.NEXT_PUBLIC_ADFORM_MID || '0') } },
        { bidder: 'smartadserver', params: { siteId: parseInt(process.env.NEXT_PUBLIC_SMARTADSERVER_SITE_ID || '0'), pageId: parseInt(process.env.NEXT_PUBLIC_SMARTADSERVER_PAGE_ID || '0'), formatId: parseInt(process.env.NEXT_PUBLIC_SMARTADSERVER_FORMAT_ID || '0') } },
        { bidder: 'geniee', params: { zoneId: process.env.NEXT_PUBLIC_GENIEE_ZONE_ID || '0' } },
        { bidder: 'connectad', params: { networkId: parseInt(process.env.NEXT_PUBLIC_CONNECTAD_NETWORK_ID || '0'), siteId: parseInt(process.env.NEXT_PUBLIC_CONNECTAD_SITE_ID || '0') } },
        { bidder: 'setupad', params: { placement_id: process.env.NEXT_PUBLIC_SETUPAD_PLACEMENT_ID || '0' } },
        { bidder: 'vistarMedia', params: { unit: process.env.NEXT_PUBLIC_VISTAR_UNIT || '0', pubId: process.env.NEXT_PUBLIC_VISTAR_PUB_ID || '0' } },
        { bidder: 'medianet', params: { cid: process.env.NEXT_PUBLIC_MEDIANET_CID || '0', crid: process.env.NEXT_PUBLIC_MEDIANET_CRID || '0' } },
        { bidder: 'xandr', params: { placementId: parseInt(process.env.NEXT_PUBLIC_XANDR_PLACEMENT_ID || '0') } },
      ];

      pbjs.addAdUnits([
        {
          code: 'sb-' + cc + '-atf',
          mediaTypes: { banner: { sizes: [[728,90],[320,50],[970,90],[970,250]] } },
          bids: makeBids('ATF', '728x90')
        },
        {
          code: 'sb-' + cc + '-mr1',
          mediaTypes: { banner: { sizes: [[300,250],[300,600]] } },
          bids: makeBids('MR1', '300x250')
        },
        {
          code: 'sb-' + cc + '-mr2',
          mediaTypes: { banner: { sizes: [[300,250],[300,600]] } },
          bids: makeBids('MR2', '300x250')
        },
        {
          code: 'sb-' + cc + '-btf',
          mediaTypes: { banner: { sizes: [[160,600],[300,250],[300,600]] } },
          bids: makeBids('BTF', '160x600')
        }
      ]);

      w.googletag.cmd.push(() => {
        w.googletag.pubads().setTargeting('chassis', cc);
        w.googletag.pubads().setTargeting('iab_cat', ['IAB2','IAB2-1']);
        w.googletag.pubads().setTargeting('content_type', 'editorial');
        w.googletag.pubads().setTargeting('brand_safety', 'automotive_enthusiast');
        w.googletag.pubads().setTargeting('network', 'sternbaureihe');
      });

      pbjs.requestBids({
        bidsBackHandler: () => {
          w.googletag.cmd.push(() => {
            pbjs.setTargetingForGPTAsync();
            w.googletag.pubads().refresh();
          });
        },
        timeout: 1500
      });
    });
  }, [networkCode, chassisCode, floorAtf, floorMr, floorBtf]);

  return null;
}