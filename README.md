# Stock Market Charting App

## Overview

This application provides real-time and historical stock market data visualization through interactive charts. It consists of a Java-based backend API that fetches and serves stock data, and a React frontend that displays dynamic charts to users.

---

## Features

- Fetches real-time and historical stock price data
- Interactive charts with zoom, pan, and tooltip support
- Search and select stocks by ticker symbol
- Responsive and user-friendly UI
- Backend REST API built with Java (Spring Boot)
- Frontend built with React and popular charting libraries (e.g., Recharts or Chart.js)

---

## Tech Stack

- **Backend:** Java, Spring Boot, REST API
- **Frontend:** React, JavaScript, Chart.js / Recharts (or other charting library)
- **Data Source:** Public stock market APIs (e.g., Alpha Vantage, IEX Cloud)
- **Build Tools:** Maven (backend), npm/yarn (frontend)

---

## Getting Started

### Prerequisites

- Java 11+ installed
- Node.js and npm/yarn installed
- API key for stock market data provider (if required)

### Backend Setup

1. Clone the repository and navigate to the backend directory:

```bash
git clone https://github.com/your-repo/stock-market-charting-app.git
cd stock-market-charting-app/backend
Configure API keys and environment variables as needed (e.g., in application.properties or .env).

Build and run the backend server:

bash
Copy
Edit
mvn clean install
mvn spring-boot:run
The backend server will start on http://localhost:8080.

Frontend Setup
Navigate to the frontend directory:

bash
Copy
Edit
cd ../frontend
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn install
Start the frontend development server:

bash
Copy
Edit
npm start
# or
yarn start
The React app will open in your browser at http://localhost:3000.

Usage
Open the frontend URL.

Search for a stock symbol.

View real-time and historical price charts.

Interact with charts using zoom and pan.
