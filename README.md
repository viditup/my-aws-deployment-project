# 🚀 AWS Deployment: Flask Backend + Express Frontend

This project demonstrates deploying a full stack app using Flask (backend) and Express (frontend) with the following methods:

---

## ✅ Deployment Methods

### 1️⃣ Single EC2 Instance
- Both Flask and Express run in Docker containers on one EC2 instance.
- Ports:  
  - Express → `3000`  
  - Flask → `5000`

### 2️⃣ Separate EC2 Instances
- Flask runs on one EC2 instance (port 5000).
- Express runs on another EC2 instance (port 3000).
- Communication is over public/private IPs.

### 3️⃣ Docker + AWS ECR/ECS/VPC
- Docker images for both apps are pushed to ECR.
- ECS Fargate is used to deploy containers.
- VPC handles network configuration.
