import type { CampaignStatus } from '@/types/campaign';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-PE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-PE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatDateTimeInput(dateString: string): string {
  const date = new Date(dateString);
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function isFutureDate(dateString: string): boolean {
  return new Date(dateString) > new Date();
}

export function validatePhoneNumber(phone: string): boolean {
  return /^51\d{9}$/.test(phone.trim());
}

export function parsePhoneNumbers(input: string): string[] {
  return input
    .split(/[\n,;]+/)
    .map((n) => n.trim().replace(/\s+/g, ''))
    .filter(Boolean);
}

export const STATUS_CONFIG: Record<
  CampaignStatus,
  { label: string; color: string; bg: string; dot: string }
> = {
  scheduled: {
    label: 'Programada',
    color: 'text-blue-700',
    bg: 'bg-blue-50 border-blue-200',
    dot: 'bg-blue-500',
  },
  running: {
    label: 'Ejecutándose',
    color: 'text-yellow-700',
    bg: 'bg-yellow-50 border-yellow-200',
    dot: 'bg-yellow-500',
  },
  completed: {
    label: 'Completada',
    color: 'text-green-700',
    bg: 'bg-green-50 border-green-200',
    dot: 'bg-green-500',
  },
  failed: {
    label: 'Fallida',
    color: 'text-red-700',
    bg: 'bg-red-50 border-red-200',
    dot: 'bg-red-500',
  },
  cancelled: {
    label: 'Cancelada',
    color: 'text-gray-700',
    bg: 'bg-gray-50 border-gray-200',
    dot: 'bg-gray-400',
  },
};
