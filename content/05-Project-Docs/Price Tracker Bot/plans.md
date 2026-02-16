---
creation date: 2026-02-15 21:30
---
#05-Project-Docs #Price-Tracker-Bot

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# 

<< ---------------------------------------------------------------- >>

Based on the analysis, here's a prioritized implementation plan:
---
Priority 1: Critical Bugs

1.4 Replace panic(err) with proper error handling (database.go:564,707,713)
Impact: Bot crashes on transient MongoDB errors.
1.7 Fix nil pointer dereference in CrawlErrorAlert (response.go:113-166)
Impact: Bot panics when log files don't exist.

---
## Priority 3: Concurrency Safety
3.1 Add mutex protection to shared maps
- Tables, ChannelMap, GuildMap in Database/multiTableSupport.go
- ProxyIncidentCounterMap in Proxy/proxy.go
Impact: Data races under concurrent access from scheduler + discord handlers.
---
Priority 4: Code Quality
4.1 Extract bid time parsing into helper function
Remove ~90 lines of duplication in ebayCrawler.go.
4.2 Extract ExtractDomainName - remove duplicate in Charts
4.3 Extract attempt error formatting into helper
4.4 Clean up dead code (test functions in main.go, getCanonicalURL)
---
Priority 5: Security
5.1 Add Discord command permission checks (especially /restart)
5.2 Rotate committed secrets in .env
---
Priority 6: Features
6.1 Add /status command
6.2 Add configurable error thresholds via env vars
6.3 Add retry backoff for proxy rotation