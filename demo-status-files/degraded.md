status: degraded
title: Degraded Performance
date: 2024-01-13T14:30:00Z

# 🟡 Degraded Performance

We're experiencing slower than normal response times across some services.

## Affected Services

| Service | Status | Impact | Response Time |
|---------|--------|--------|---------------|
| Website | ⚠️ Degraded | Slow loading | 450ms |
| API | ⚠️ Degraded | Increased latency | 380ms |
| Database | ✅ Operational | Normal | 52ms |
| Authentication | ✅ Operational | Normal | 85ms |

## Current Issues

- **High Database Load**: Increased query times affecting API responses
- **CDN Cache Misses**: Higher origin server load
- **API Timeout Errors**: Some requests taking longer than 2 seconds

## What We're Doing

- 🔧 Optimizing database queries
- 🔧 Increasing CDN cache TTL
- 🔧 Adding more API instances
- 🔧 Monitoring performance closely

## User Impact

- Some pages may load slower than usual
- API responses may be delayed
- Occasional timeouts possible

**Expected Resolution**: Within the next 2 hours
**Next Update**: 15:30 UTC