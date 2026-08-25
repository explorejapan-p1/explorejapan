import {COUNTS, FACILITIES, JIS, TOTAL} from "@/lib/mima-facilities";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export function GET() {
  const accessed = FACILITIES[0] ? FACILITIES[0].accessed : "";
  return Response.json(
    {
      jis: JIS,
      accessed,
      total: TOTAL,
      counts: COUNTS,
      facilities: FACILITIES
    },
    {
      headers: {
        "Cache-Control": "private"
      }
    }
  );
}
