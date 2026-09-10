import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Lazy initialization — only creates the client when first accessed
// This prevents crashes during module evaluation when DB is unreachable
function createPrismaClient() {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'production' ? ['error'] : ['error', 'warn'],
  })
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

// Handle connection errors gracefully
db.$connect().catch(() => {
  console.warn('Prisma: Database connection failed — running in fallback mode')
})
