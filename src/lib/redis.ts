import { Redis } from "@upstash/redis";

let _redis: Redis | null = null;

export function getRedis(): Redis {
  if (!_redis) {
    _redis = Redis.fromEnv();
  }
  return _redis;
}

export interface DownloadToken {
  productBlobKey: string;
  orderId: string;
  email: string;
  expiresAt: number;
}

export interface OrderData {
  sessionId: string;
  email: string;
  tokens: string[];          // download token keys
  productTitles: string[];
  totalAmount: number;
  createdAt: number;
}

const TOKEN_TTL_SECONDS = 72 * 60 * 60; // 72 hours

export async function storeDownloadToken(
  token: string,
  data: DownloadToken
): Promise<void> {
  const redis = getRedis();
  await redis.set(`dl:${token}`, JSON.stringify(data), {
    ex: TOKEN_TTL_SECONDS,
  });
}

export async function getDownloadToken(
  token: string
): Promise<DownloadToken | null> {
  const redis = getRedis();
  const raw = await redis.get<string>(`dl:${token}`);
  if (!raw) return null;
  const data = typeof raw === "string" ? JSON.parse(raw) : raw;
  return data as DownloadToken;
}

export async function storeOrder(
  sessionId: string,
  data: OrderData
): Promise<void> {
  const redis = getRedis();
  await redis.set(`order:${sessionId}`, JSON.stringify(data), {
    ex: TOKEN_TTL_SECONDS,
  });
}

export async function getOrder(sessionId: string): Promise<OrderData | null> {
  const redis = getRedis();
  const raw = await redis.get<string>(`order:${sessionId}`);
  if (!raw) return null;
  const data = typeof raw === "string" ? JSON.parse(raw) : raw;
  return data as OrderData;
}
