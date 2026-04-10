import type {
  Campaign,
  CampaignDetail,
  CampaignStats,
  CreateCampaignPayload,
  BatchCampaignPayload,
  SendBulkPayload,
  ApiResponse,
  PaginatedResponse,
  BatchResponse,
  SendBulkResponse,
} from '@/types/campaign';

const BASE_URL = 'https://www.support.maxillaris.pe/api6';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.message || `Error HTTP ${res.status}`;
    throw new ApiError(res.status, message);
  }

  return data as T;
}

export const campaignApi = {
  list(page = 1, limit = 20) {
    return apiFetch<PaginatedResponse<Campaign>>(
      `/campaigns?page=${page}&limit=${limit}`
    );
  },

  getById(id: string) {
    return apiFetch<ApiResponse<CampaignDetail>>(`/campaigns/${id}`);
  },

  getStats(id: string) {
    return apiFetch<ApiResponse<CampaignStats>>(`/campaigns/${id}/stats`);
  },

  create(payload: CreateCampaignPayload) {
    return apiFetch<ApiResponse<Campaign>>('/campaigns', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  createBatch(payload: BatchCampaignPayload) {
    return apiFetch<ApiResponse<BatchResponse>>('/campaigns/batch', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  cancel(id: string) {
    return apiFetch<ApiResponse<null>>(`/campaigns/${id}/cancel`, {
      method: 'PUT',
    });
  },

  delete(id: string) {
    return apiFetch<ApiResponse<null>>(`/campaigns/${id}`, {
      method: 'DELETE',
    });
  },

  sendBulk(payload: SendBulkPayload) {
    return apiFetch<SendBulkResponse>('/send-bulk', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};
