# 💰 Loan Calculator App

A modern and responsive web application that allows users to calculate loan payments and view amortization schedules. It also fetches real-time exchange rates to support multi-currency loan comparison.

## 🚀 Features

- 💸 Loan EMI and amortization schedule calculator
- 🌐 Real-time currency exchange rates (via external API)
- 📊 Visual display of amortization table
- ⚠️ Error handling for form and API failures
- 🧠 React Context for state management
- ♻️ Custom React Hooks for API and logic separation
- 🌗 Themed UI for consistent design

## 🛠️ Technologies Used

- [React.js](https://reactjs.org/)
- [Vite.js](https://vitejs.dev/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Exchange Rate API](https://www.exchangerate-api.com/)
- [Context API](https://reactjs.org/docs/context.html)

## 🧾 Project Structure

loan-calculator-app/
│
├── public/ # Static assets
├── src/
│ ├── api/ # API services (exchangeRateService.js)
│ ├── components/ # Reusable UI components
│ ├── context/ # AppContext for global state
│ ├── hooks/ # Custom React Hooks
│ ├── pages/ # Page-level components
│ ├── theme/ # Theme setup
│ ├── utils/ # Utility functions
│ ├── App.jsx # Main app component
│ ├── main.jsx # ReactDOM entry point
│ ├── index.css # Global styles
├── .env # Environment variables (do not commit)
├── vite.config.js # Vite configuration
├── README.md # Project documentation
├── package.json # NPM dependencies



## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/loan-calculator-app.git
cd loan-calculator-app


2. Install dependencies

npm install


3. Configure environment variables

Create a .env file in the root directory and add your API key: VITE_EXCHANGERATE_API_KEY=your_api_key_here

You can get your API key from https://www.exchangerate-api.com.


4. Start the development server

npm run dev

🙅‍♂️ Important

Do not share your .env or API keys in public repositories.
Ensure .env is listed in your .gitignore.


Made with ❤️ by Aditya