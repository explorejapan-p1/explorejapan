/**
 * Website offer engine (held / no-send).
 *
 * Traffic does not exist yet. Zero emails until CoS names the STOP
 * exception after meaningful traffic. OFFER_ARMED is true so drafts can
 * be evaluated; OFFER_SEND stays false so nothing leaves this machine.
 *
 * Never fetch mailto, never call email APIs, never SMTP, never AgentMail.
 */

export const OFFER_ARMED = true;
export const OFFER_SEND = false;

export type OfferDecision = {
  armed: boolean;
  wouldSend: false;
  reason: string;
};

export function evaluateListing(row: {id: string; name_ja?: string}): OfferDecision {
  return {
    armed: OFFER_ARMED,
    wouldSend: false,
    reason: `held: no traffic; listing ${row.id} not emailed until CoS STOP exception`
  };
}

export function logHeld(offer: OfferDecision & {id?: string}): void {
  const line = JSON.stringify({
    at: new Date().toISOString(),
    send: OFFER_SEND,
    ...offer
  });
  // Console only. No network, no mailto, no mailbox write.
  console.info('[website-offer:held]', line);
}

if (OFFER_SEND) {
  throw new Error('OFFER_SEND must stay false until CoS names the STOP exception');
}
