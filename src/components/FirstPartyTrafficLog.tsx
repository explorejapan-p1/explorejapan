'use client';

import {useEffect} from 'react';
import {recordFacilityView, recordFirstPartyTraffic} from '@/lib/traffic-log';

export function FirstPartyTrafficLog() {
  useEffect(() => {
    recordFirstPartyTraffic(window.location.pathname + window.location.search);
    const id = new URLSearchParams(window.location.search).get('id');
    if (id) recordFacilityView(id);
  }, []);
  return null;
}
