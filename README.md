# Bundle Builder

A multi-step product bundle builder built as a frontend take-home project. Shoppers configure a security system through a 4-step accordion (cameras → plan → sensors → extra protection), while a live review panel keeps selected items, quantities, variants, and pricing in sync.

Built to closely match the provided [Figma design](https://www.figma.com/design/JYf61etQVqeseX7oY5alGz/Frontend-Test-Figma) with responsive layouts for desktop, tablet, and mobile.

## Live Features

- **4-step accordion builder** — Step 1 (Cameras) is open by default, with live "N selected" counters.
- **Product cards** — discount badges, color/variant chips, quantity steppers, descriptions, and compare-at pricing.
- **Independent variant quantities** — each variant maintains its own quantity. Switching variants never loses previously selected quantities.
- **Live review panel** — selected items are grouped by category and stay synchronized with the builder.
- **Dynamic pricing** — subtotal, savings, discounts, and total update as quantities change.
- **Data-driven UI** — products and steps are rendered from structured data rather than product-specific markup.
- **Persistence** — "Save my system for later" stores the configuration in `localStorage` and restores it on return.
- **Responsive design** — desktop, tablet, and mobile layouts based on the provided design.
- **REST API** — bundle and product data are served through a lightweight Express backend.

## Tech Stack

### Frontend

- React + TypeScript
- Vite
- Tailwind CSS
- TanStack Query
- Axios
- react-hot-toast
- Lucide React

### Backend

- Node.js + Express
- TypeScript
- REST API
- CORS

## Project Structure

```text
bundle-builder/
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # Global bundle state and reducer
│   ├── hooks/           # Custom React hooks
│   ├── types/           # Shared TypeScript types
│   ├── utils/           # Helper and utility functions
│   ├── services/        # API communication
│   └── assets/          # Static images and icons
│
├── server/
│   └── src/
│       ├── controllers/ # Request handling and API logic
│       ├── data/        # Bundle steps and product data
│       ├── routes/      # API endpoint definitions
│       └── index.ts     # Express server entry point
│
├── .env.example         # Environment variable template
├── .gitignore
└── package.json         # Frontend dependencies and scripts
```

### Frontend

- **`components/`** — Contains UI components such as the builder, product cards, step accordion, quantity stepper, and review panel.
- **`context/`** — Manages the shared bundle state using React Context and `useReducer`.
- **`hooks/`** — Contains reusable custom hooks for calculations, API queries, and product variant logic.
- **`types/`** — Contains shared TypeScript types and interfaces.
- **`utils/`** — Contains reusable helper functions such as localStorage handling and image URL utilities.
- **`services/`** — Handles communication with the backend API.
- **`assets/`** — Contains static images, icons, and other frontend assets.

### Backend

- **`controllers/`** — Handles API request logic and prepares responses.
- **`data/`** — Contains the structured bundle steps and product data used by the API.
- **`routes/`** — Defines the available API endpoints and connects them to the controllers.
- **`index.ts`** — Initializes the Express server, middleware, routes, and CORS configuration.

The frontend and backend are separate Node projects within the same repository, each with its own `package.json`.

## Getting Started

### Prerequisites

* Node.js 18+
* npm

### Clone

```bash
git clone https://github.com/cheetah-10/Bundle-builder.git
cd Bundle-builder
```

### Environment Variables

Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Default:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

No secrets or API keys are required.

### Backend

```bash
cd server
npm install
npm run dev
```

Runs on `http://localhost:5000`.

Health check:

`http://localhost:5000/health`

### Frontend

In a second terminal, from the project root:

```bash
npm install
npm run dev
```

Vite will provide the local development URL.

Both frontend and backend need to be running.

## API Endpoints

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| GET    | `/api/steps`         | Returns the 4 builder steps |
| GET    | `/api/products`      | Returns all products        |
| GET    | `/api/bundle-config` | Returns steps and products  |
| GET    | `/health`            | Health check                |

## Data Model

The application is fully data-driven. Products contain their configuration, pricing, images, categories, and optional variants.

```ts
{
  id: string;
  stepId: string;
  title: string;
  description?: string;
  learnMoreUrl?: string;
  price: number;
  compareAtPrice?: number;
  discount?: string;
  image: string;
  category: string;
  defaultQuantity?: number;
  variants?: Variant[];
}
```

Variant quantities are tracked independently using a product/variant key, allowing multiple variants of the same product to appear separately in the review panel.

## Design Decisions

* **Context + useReducer** — used for centralized bundle state and predictable quantity/variant updates without introducing Redux.
* **TanStack Query** — handles API fetching and caching while keeping data-fetching logic outside UI components.
* **Data-driven rendering** — product-specific markup is avoided so products can be changed through data.
* **Explicit persistence** — `localStorage` is updated when the user clicks "Save my system for later", matching the requested configure → save → return flow.
* **Lightweight API** — Express serves the bundle data without introducing an unnecessary database for this prototype.

## Future Improvements

* Add automated unit and interaction tests.
* Add a root-level command to run frontend and backend together.
* Expand accessibility and keyboard interaction testing.
* Add more comprehensive API error/loading states.

