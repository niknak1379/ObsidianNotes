---
creation date: 2025-11-21 19:06
---
#05-Project-Docs #Personal Website Docs #V-2.0

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Pipeline

<< ---------------------------------------------------------------- >>

## Backend
### API Gateway
git push -> github Actions -> build docker Image -> Upload to dockerHub -> ssh EC2 and pull -> stop prev Image -> run new image


SSH i can do with AWS SSM(sessions manager).
### Image Processing Lambda
[[05-Project-Docs/Personal Website Docs/V-3.0/Image Processing Lambda|Image Processing Lambda]] CI/CD Pipeline
## Frontend
Git Push -> auto deploy to vercel on push