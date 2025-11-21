---
creation date: 2025-11-21 12:48
---
#AWS-Basics 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Lambda

<< ---------------------------------------------------------------- >>

Serverless Function as Service that lets you run code without provisioning or managing servers. 

No charge when your code is not running.

multiple runtimes

For example you could do thumnbnail processing -> upload it to aws and the lambda processes it

Or contact Email form: submits form data via API gateway endpoint, which triggers a lambda that validates the form data and, if valid, will save the submission in DynamoDB and send the Email via SNS

### Lambda Layers

Pull in additional code and content in the form of layers. 

A layer is a ZIP archive that contains libraries, custom runtime, or other dependencies. You can use libraries in you function without needing to include them in you deployment package. 

Can have upto 5 layers attached to each function. 
Cant exceed the unzipped deployment size limit of 250MB

### Instruction Sets
Supports both ARM64 and X86

### Deployment Package
Supports both ZIP and Docker Images. 

