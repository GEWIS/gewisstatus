# Status File Examples

Here are examples of different status scenarios you can use:

## Example 1: Operational Status
```markdown
status: operational
title: All Systems Operational
date: 2024-01-13T12:00:00Z

# All Systems Operational

Everything is working perfectly! ✅

## System Health

- Website: Operational
- API: Operational  
- Database: Operational
- Authentication: Operational

## Performance Metrics

- Response time: < 100ms
- Uptime: 99.99%
- Error rate: 0.01%
```

## Example 2: Degraded Performance
```markdown
status: degraded
title: Degraded Performance
date: 2024-01-13T14:30:00Z

# Degraded Performance

We're experiencing slower than normal response times. ✅

## Affected Services

- Website: Degraded performance
- API: Degraded performance
- Database: Operational
- Authentication: Operational

## Details

Some users may experience slower loading times. We're investigating the issue.

**Expected resolution**: Within 2 hours
```

## Example 3: Service Outage
```markdown
status: outage
title: Major Service Outage
date: 2024-01-13T16:45:00Z

# Service Outage

We're currently experiencing a major outage. ❌

## Affected Services

- Website: Down
- API: Down
- Database: Operational
- Authentication: Operational

## Details

Our website and API services are currently unavailable. We're working to restore service as quickly as possible.

**Estimated time to resolution**: Unknown
**Next update**: Within 30 minutes
```

## Example 4: Scheduled Maintenance
```markdown
status: maintenance
title: Scheduled Maintenance
date: 2024-01-14T02:00:00Z

# Scheduled Maintenance

We're performing scheduled maintenance. 🔧

## Maintenance Window

- **Start**: January 14, 2024, 02:00 UTC
- **End**: January 14, 2024, 04:00 UTC
- **Duration**: 2 hours

## Affected Services

- Database: Maintenance (read-only mode)
- API: Degraded performance
- Website: Operational (with cached data)

## Details

We're performing database optimizations and updates. Some features may be temporarily unavailable.

**Expected impact**: Brief service interruptions during the maintenance window.
```

## Example 5: Partial Outage
```markdown
status: degraded
title: Partial Service Outage
date: 2024-01-13T18:20:00Z

# Partial Service Outage

Some services are experiencing issues. ⚠️

## Service Status

| Service | Status | Details |
|---------|--------|---------|
| Website | Operational | Working normally |
| API | Degraded | Some endpoints failing |
| Database | Operational | Working normally |
| Authentication | Outage | Login not working |

## Workaround

If you're unable to log in, please try:
1. Clearing your browser cache
2. Using an incognito/private window
3. Contacting support if issues persist

**Next update**: Within 1 hour
```