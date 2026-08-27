'use client';

import {useEffect} from 'react';
import {recordFirstPartyTraffic} from '@/lib/traffic-log';

export function FirstPartyTrafficLog() {
  useEffect(() => {
    recordFirstPartyTraffic(window.location.pathname + window.location.search);
  }, []);
  return null;
}
