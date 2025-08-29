# Next.js Shadcn Dashboard Clone 🚀

A feature-rich clone of the [shadcn/ui dashboard](https://ui.shadcn.com/examples/dashboard) built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. This project demonstrates a modern web application setup, including internationalization with `next-international` and theme switching with `next-themes`.

**Preview:** 
<img width="1903" height="945" alt="image" src="https://github.com/user-attachments/assets/751cee33-db0b-47b4-a4a1-3ae263fc425c" />
<img width="1905" height="873" alt="image" src="https://github.com/user-attachments/assets/e623615a-8084-419b-9ba7-d8aacc00db53" />
<img width="1787" height="757" alt="image" src="https://github.com/user-attachments/assets/f7b0fdde-8f93-4040-98a5-9b8bd067bfa2" />
<img width="1913" height="920" alt="image" src="https://github.com/user-attachments/assets/0a9d78b4-6a56-4387-b92f-020c78ef82a6" />
<img width="1919" height="878" alt="image" src="https://github.com/user-attachments/assets/eff3ca89-eb0d-4aa7-8c3f-6588b94e8a3c" />




-----

## Features ✨

  * **Modern Framework**: Built with **Next.js 15** using the App Router.
  * **UI Components**: Beautifully crafted components from **shadcn/ui**.
  * **Styling**: Styled with **Tailwind CSS** for a utility-first approach.
  * **Type Safety**: Fully written in **TypeScript**.
  * **Internationalization (i18n)**: Multi-language support powered by `next-international`.
  * **Theme Switching**: Light and Dark mode support using `next-themes`.
  * **State Persistence**: User's selected language and theme are saved to **Local Storage** and persist across sessions.
  * **Responsive Design**: Looks great on all screen sizes, from mobile to desktop.

-----

## Tech Stack 🛠️

  * **Framework**: [Next.js](https://nextjs.org/)
  * **Language**: [TypeScript](https://www.typescriptlang.org/)
  * **Styling**: [Tailwind CSS](https://tailwindcss.com/)
  * **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
  * **Internationalization**: [next-international](https://www.google.com/search?q=https://github.com/i18next/next-international)
  * **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
  * **Icons**: [Lucide React](https://lucide.dev/)

-----

## Getting Started 🏁

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

  * [Node.js](https://nodejs.org/en/) (v18.x or later)

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/rachmi00/shadcn-clone.git
    cd dashboard-clone
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```


3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application should now be running on [http://localhost:3000].

-----

## Internationalization (i18n) 🌐

This project uses `next-international` for handling translations.

  * **Adding a New Language**:

    1.  Create a new JSON file in the `i18n/locales/` directory (e.g., `es.json` for Spanish).
    2.  Copy the key-value pairs from `en.json` and translate the values.
    3.  Update the `i18n/index.ts` configuration file to include the new locale.

  * **Using Translations**:
    You can use the `useI18n` hook on the client side or `getI18n` on the server side to access your translation strings.

    ```tsx
    // Example in a client component
    'use client';
    import { useI18n } from '@/i18n/client';

    export function Greeting() {
      const { t } = useI18n();
      return <h1>{t('dashboard.title')}</h1>;
    }
    ```


## Acknowledgements 🙏

  * A huge thank you to [shadcn](https://github.com/shadcn) for creating the incredible `shadcn/ui` component library.
  * The Next.js and Vercel teams for their amazing work on the framework.
