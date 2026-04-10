export type CampaignStatus = 'scheduled' | 'running' | 'completed' | 'failed' | 'cancelled';

export interface Campaign {
  id: string;
  name: string;
  templateName: string;
  languageCode: string;
  status: CampaignStatus;
  scheduledAt: string;
  totalRecipients: number;
  sentCount: number;
  failedCount: number;
  createdAt: string;
  updatedAt?: string;
}

export interface CampaignRecipient {
  id: string;
  phoneNumber: string;
  status: 'sent' | 'failed' | 'pending' | 'blocked';
  sentAt?: string;
  errorMessage?: string;
}

export interface CampaignDetail extends Campaign {
  recipients: CampaignRecipient[];
}

export interface CampaignStats {
  total: number;
  sent: number;
  failed: number;
  pending: number;
  blocked: number;
}

export interface ComponentParameter {
  type: 'video' | 'image' | 'text';
  video?: { link: string };
  image?: { link: string };
  text?: string;
}

export interface TemplateComponent {
  type: 'header' | 'body';
  parameters: ComponentParameter[];
}

export interface CreateCampaignPayload {
  name: string;
  phoneNumbers: string[];
  templateName: string;
  languageCode: string;
  scheduledAt: string;
  timezone?: string;
  blockedNumbers?: string[];
  components?: TemplateComponent[];
}

export interface BatchCampaignPayload {
  phoneNumbers: string[];
  blockedNumbers?: string[];
  campaigns: Omit<CreateCampaignPayload, 'phoneNumbers' | 'blockedNumbers'>[];
}

export interface SendBulkPayload {
  phoneNumbers: string[];
  templateName: string;
  languageCode: string;
  components?: TemplateComponent[];
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface BatchResponse {
  campaigns: Campaign[];
  totalCreated: number;
  totalFailed: number;
  errors: string[];
}

export interface SendBulkResponse {
  success: number;
  failed: number;
  errors: string[];
}
