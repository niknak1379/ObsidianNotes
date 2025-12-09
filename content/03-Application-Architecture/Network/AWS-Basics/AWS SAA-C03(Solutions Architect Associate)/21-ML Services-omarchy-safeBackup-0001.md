---
creation date: 2025-12-01 14:13
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Intro

<< ---------------------------------------------------------------- >>

## Amazon CodeGuru
machine learning code analysis service. CodeGuru performs code-reviews and will suggest changes to improve the quality of code. It can show visual code profiles.

Has 3 services:
1. code security analytics scan
2. code quality analytics scan
3. secrets detection scan

## Amazon Comprehend
find relationships between texts to produce insights, like look at data such as customer eamils, support ticktes, social media and makes predictions. it is a serverless service. 

## Amazon Forecast
Is a time-series forecastin gservice. Forecasts business outcomes such as product demand, resource needs or financial performance. 

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





