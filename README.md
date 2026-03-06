# FinLingo

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini_API-2.5_Flash-4285F4?logo=google&logoColor=white)

FinLingo is a financial jargon explainer tool built for anyone who has ever stared blankly at a mortgage clause, credit card T&C, or bank statement. Paste a block of financial text or type a term, and get back a plain-English explanation plus three follow-up questions you could take straight to your financial expert.

> FinLingo is designed to eventually integrate into [Dascet](https://dascet.com) — a personal finance tool discovery platform — as a core utility for helping users understand financial products before they commit.

---

## Getting started

### 1. Clone and install

```bash
git clone https://github.com/your-username/finlingo.git
cd finlingo
npm install
```

### 2. Add your API key

Copy the example env file and add your Gemini API key:

```bash
cp .env.example .env.local
```

Then open `.env.local` and replace the placeholder:

```
VITE_GEMINI_API_KEY=your_key_here
```

Get a free key at [aistudio.google.com](https://aistudio.google.com) — no credit card required.

### 3. Run the app

```bash
npm run dev
```

---

## Running tests

```bash
npm run test
```

---

## Project structure

```
src/
  components/       # Presentational UI components
  hooks/            # useFinLingo — state, API call, loading, error
  lib/              # Gemini API function and prompt builder
  types/            # Shared TypeScript types
  App.tsx
  main.tsx
```

---

## Tech stack

- **React 19** + **TypeScript** — Vite scaffold
- **Tailwind CSS v4** — utility-first styling
- **Google Gemini API** (`gemini-2.5-flash`) — AI explanations
- **Vitest** + **React Testing Library** — unit tests
