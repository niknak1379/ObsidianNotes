---
creation date: 2025-12-10 19:51
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# AWS Managed Service for Prometheus

<< ---------------------------------------------------------------- >>

### Prometheus
open source systems monitoring and alreting toolkit
collects and stores it smetrics as time series data. 
it is a timeseries database

main features:
1. multi dimensional data model with time series data identified by metric name and key value pairs
2. promQL, a flixible query language to leverage this dimensionality
3. no reliance on distributed storage; single server nodes are autonomous
4. time series collection happens via a pull model over HTTP
5. pushing time series is supported via an intermediary gateway
6. targets are discovered via service discovery or static configuration
7. multiple modes of graphing and dashboarding support

### Amazon Managed Service for Prometheus
is a prometheus compatible monitoring service for container infrastructure and application metrics. 

### Grafana
open source analytics and interactive visualization library that works with prometheus

AWS also has its managed version

