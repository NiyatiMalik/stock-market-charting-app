# Stock Market Charting App

## Overview

This web application allows users to explore and analyze stock market data, manage companies and exchanges, and view IPO details. It is built with a **Java Spring Boot backend** and a **React frontend**. The app includes features like user authentication, data import, company and exchange management, and interactive charts for stock performance.

---

## 🔑 Menu & Features

### 🔐 Login
- User authentication to access application features

### 📤 Import Data
- Upload and import bulk stock price data via Excel or CSV

### 🏢 Manage Companies
- Add, update, view, and delete company details
- Associate companies with exchanges

### 🏦 Manage Exchanges
- Maintain stock exchange information (e.g., NSE, BSE)

### 🏙️ Sector
- Categorize companies into sectors for better analysis

### 📅 IPO Details
- View and manage Initial Public Offering (IPO) information

---

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript
- **Backend:** Java, Spring Boot, REST APIs
- **Database:** MySQL
- **Authentication:** JWT 

---

## Getting Started

### Prerequisites

- Java installed
- Node.js and npm/yarn installed

### Backend Setup

1. Clone the repository and navigate to the backend directory:

```bash
git clone https://github.com/your-repo/stock-market-charting-app.git
cd stock-market-charting-app/backend
```
Configure API keys and environment variables as needed (e.g., in application.properties or .env).

2. Build and run the backend server:

```bash
mvn clean install
mvn spring-boot:run
```
The backend server will start on http://localhost:8080.

### Frontend Setup

1. Navigate to the frontend directory:
   
```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm start
```
The React app will open in your browser at http://localhost:3000.

### Usage
1. Login using valid credentials.

2. Navigate through:

- Manage Companies to add/view companies

- Manage Exchanges to edit exchange info

- Sectors to classify companies

- IPO Details to add/view IPO records


