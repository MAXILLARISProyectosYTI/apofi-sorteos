'use client';

import type { CampaignStatus } from '@/types/campaign';
import { STATUS_CONFIG } from '@/lib/utils';

export default function StatusBadge({ status }: { status: CampaignStatus }) {
  const config = STATUS_CONFIG[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${config.bg} ${config.color}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}
