---
creation date: 2025-12-01 14:13
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Intro

<< ---------------------------------------------------------------- >>
## Quick round

1. Amazon SageMaker is a fully managed service to build, train, and deploy machine learning models at scale.
	1. it has multiple frameworks: Apache MXNet, TensorFLow, PyTorch

2. Amazon SageMaker Ground Truth is data-labeling service. Humans label a dataset that will be used to train machine learning models.

3. Amazon Augmented AI: Human intervention review service. When SageMaker's uses machine learning to make a prediction is not confient it has the right answer queue up the predication for human review.
4. Amazon CodeGuru: code analysis service
5. Amazon Lex: conversion interface service -> you can build text and voice chatbots
6. amazon personalize: a real time recommendations service.
7. amazon Polly: text to speach service
8. Amazon Rekognition: image and video recognition service
9. Amazon Transcribe: speach to text service
10. Amazon Textract and OCR(extract text from scanned documents)
11. Amazon Translate neural machine learning translation service
12. Amazon Comprehend: Natural Language Processor service. Find relatioships between text to produce insights. looks at data such as customer emails, support tickets, social media and make predictions.
13. Amazon Forecast: time-series forecasting service
14. AWS Deep Learning AMIs: EC2 instance with pyTorch MXNet etc...
15. AWS Deep Learning Containers: docker images instances pre insall with deel learning frameworks.
16. AWS DeepComposer: ML enabled musical keyboard
17. AWS DeepLens: video-camera that uses deep learning
18. AWS DeepRacer: a toy race car that can be powered with ML to perform autonomous driving
19. Amazon Elastic Inference: allows low cost GPU powered acceleration to EC2 for reduced cost deep learning
20. Amazon Fraud Detector: fully managed fraud detection service. 
21. Amazon Kendra Enterprise machine learning search engine service: use natural language to suggest answers to question instead of just simple keyword matching.


## Big Data and Analytics Services
Massive volumes of strucutred/unstructured data that is so large it is difficult to move and process using traditional DB and software techniques.

1. Amazon Athena is a serverless interactive query service. It can take a bunch of CSV or JSON files in a s3 bucket and laod them into temporary SQL tables to run SQL queries on.
2. Amazon CLoudSearch: fully managed full-text search service
3. Amazon Elasticsearch Service
4. Amazon Elastic MapReduce
5. Kiesis Data Streams
6. Kinesis Firehose: serverless and a simpler version of data streams, pay on demand 
7. Amazon Kinesis Data Analytics: run queries agaisnt the data through the stream
8. Amazon Kinesis Video Streams: allows you to analyze or apply processing on real-time streaming video.
9. Managed Kafka Service
10. Redshift: petabyte size big data warehouse.(vertical for online analytical processing - OLAP).
11. Amazon QuickSight: business intelligence Dashboard
12. AWS Data Pipeline automates the movement of data. reliabilty move data between compute and storage services
13. AWS Glue is an Extract, transform, Load service - similar to DMS(database migration service) but more robust
14. AWS Lake Formation is a centralized, curated and secured repository that stores all your data. A data lake is a storage repository that holds a vast amount of raw data in its native format until it is needed.
15. AWS Data Exchange is a catalogue of third-party datasets. You can download for free subscribe or purchase datasets.
16. Amazon Bedrock: LLM cloud service for text and image
17. Amazon CodeWhisper: Code generator
18. Amazon DevOps Guru: Use ML to analyze operational data and application metrics and events.
19. Amazon Lookout: use ML for quality control.
	1. For equipment
	2. For Metrics
	3. For vision
20. Amazon Monitron: uses ML models to predict unplanned equipment downtime with IoT sensors capture
21. AWS Neuron: SDK to run deep learning workloads on AWS




## Amazon CodeGuru
machine learning code analysis service. CodeGuru performs code-reviews and will suggest changes to improve the quality of code. It can show visual code profiles.

Has 3 services:
1. code security analytics scan
2. code quality analytics scan
3. secrets detection scan

## Amazon Comprehend
find relationships between texts to produce insights, like look at data such as customer eamils, support ticktes, social media and makes predictions. it is a serverless service. 

## Amazon Forecast
Is a time-series forecasting service. Forecasts business outcomes such as product demand, resource needs or financial performance. 

## Amazon Fraud Detector
fully managed fraud detection service to identify potentially fraudulent online activities such as online payment fraud. 
Can be used with Step Functions, Kinesis, Lambda and other aws integrations, you put the data into a S3 bucket and use that as the source.

## Amazon Kendra
enterprise machine learning search engine service. Uses natural language to suggest answers to question instead of just simple keyword matching. 

Can be used in tandem with Amazon Lex Chatbot. 

You can supply it with your own indexes and documents, etc... 

## Amazon Lex
conversation interface service. 
Natural language inderstanding, speech recognition

multiple bot tempelates for common industries as a starting point
Transcripts to create a new bot
uses gen AI to build a bot based on your description
you can choose a target language, from multiple AWS provided voices. 


## Amazon Personalize
real time recommendations service. Same technology use to make product recommendations to customers shopping on the platform. 

Create a data set group
upload data set to your data group: 
- user item itneraction data
- user data
- item data
Provide a json schema mapping for the CSV files
reference the dataset location from an s3
Have to create a Solutions and Recipes
- solutions helps generate recommendations
- recipe is the predefined AWS algorithm
Event Trackers
Filters
you can create campaigns. 

## Amazon Polly
Text to speach service
- standard
- long form
- neural(best sounding but also most expensive)

## Amazon Rekognition
Is image and video recognition service. Analyzes images and videos for 
- object detection
- face detection
- searching faces in connection
- people pathing
- detecting personal protective equipment
- recognizing celebrities
- moderating context
- detecting text

## Amazon Textract
OCR(extracts text from scanned document) service. You have paper forms and you want to digitally extract the data.   

## Amazon Translate
Nerual machine learning text translation service

## Amazon Q
is an AI chatbot using multiple LLM models via Amazon Bedrock.
- amazon Q buisness
- Q developer
- Q for amazon QuickSight
- Q for Amazon Connect
	- real time conversation with the customer along with relevant company content
- Q for AWS Supply Chain

## Amazon CodeWhisperer
AI coding companion that generates suggested code while youre writing code. 

in vscode, juptyer lab, jetbrains

