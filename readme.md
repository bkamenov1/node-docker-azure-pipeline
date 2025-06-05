# Node.js Docker Azure DevOps Pipeline 🚀

A simple Node.js Express web application that demonstrates how to containerize an app with Docker, push it to Azure Container Registry (ACR), and deploy it automatically to Azure Web App for Containers using Azure DevOps Pipelines.

---

## 🔧 Tech Stack

- **Node.js** + **Express** – Lightweight web server for the app
- **Docker** – Containerization for consistent deployment
- **Azure Container Registry (ACR)** – Private container registry for storing Docker images
- **Azure DevOps Pipelines** – CI/CD for automated build and deployment
- **Azure Web App for Containers** – App hosting on Azure using Docker images

---

## 📁 Project Structure
/node-docker-azure-pipeline
│
├── app/
│ ├── index.js # Main app logic
│ └── package.json # App dependencies and start script
│
├── Dockerfile # Instructions for building the image
├── azure-pipelines.yml # Azure DevOps CI/CD configuration
├── README.md # Project overview
