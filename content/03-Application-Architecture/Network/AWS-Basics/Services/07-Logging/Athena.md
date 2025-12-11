---
creation date: 2025-12-10 19:44
---
#03-Application-Architecture 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Amazon Athena

interactive query service that lets you analyze data directly from s3. It is based on Apache Presto

It is serverless and is compatible with the following services:
- cloudFormation
- CloudFront
- CloudTrail
- DataZone
- ELB
- EMR
- AWS Glue Data Catalog
- IAM
- QuickSight
- S3 inventory
- Step Functions
- Systems Manager Inventory
- VPC

You can create the tables either manually or through AWS Glue Wizard.
The AWS Glue crawler can crawl the data and create them automatically. 

Athena tables are Glue Data Catalog tables and so they will exist in both services when creaing an Athena table. 

### SerDe
serialization and deserializtion libraries for parsing dadta from different fromates such as csv, json, parquet andn orc for Athena. 

## AWS Glue
serverless data integration service that makes it easy for analytics users to discover, prepare, move and integrate data from multiple sources. 

Used for analytics, ML, application development

You can run search and query for data catalogues using Athena, EMR, Redshift spectrum. 

It can do 
- data discovery
- modernt ETL or ELT
- cleansing
- transforming
- centralized cataloging

### AWS Glue Jobs
you can use 
1. python shell engine
2. ray job
3. spark job

can be created in Visual ELT(AWS Glue Studio), Jupyter notebooks, script editor.

Are charged based on the number of data processing units. which is determined by a comnination of work type and number of workers. 

### Glue Studio
Visually build ETL pipeline.  

## Glue Data Catalog
is a fully managed Apache Hive Metastore-compatible catalog service, that makes it easy for customers to store, annotate, and share metadata about their data. 

### Glue Data Crawler
took that is used to analyze a targeted data source to determine its schema and generate Glue Data Tables. 

## Data Lakes
Centralized data repository for unstructure and semi-structured data.

Generally use object(blob) or files as its storage medium. 

They pull from various data sources and then transform, distribute or publish the data.

## Lake Formation
Data lake to centrally govern ,secure and globally share data for analytics and Machine Learning.

same integrations as glue






  









