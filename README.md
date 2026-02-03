This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Feature
Next 16 vs Taiwindcss
- create login page
- crate proxy.ts as require login for all pages
- create navigation: logo, navi and button login/logout
- store logged in in with cookie and display 
- redux state management
- redux-persist to store username at localStorage
## Backend
https://dev.to/leapcell/implementing-jwt-middleware-in-nextjs-a-complete-guide-to-auth-1b2d
jLogin
└── create JWT
└── set httpOnly cookie

Page request
└── middleware check cookie

API request
└── cookie auto sent
└── api verify JWT


## logic login
[Login]
User enter username/password
↓
API /login
→ create JWT token
→ Set httpOnly cookie auth
↓
Redux dispatch setUser(dataFromAPI) -> save user info, NOT Save token
↓
[Reload Page]
Middleware check cookie → redirect page indeed
Frontend call /api/...
→ Server verify cookie
→ return user info
Redux dispatch setUser(dataFromAPI) // populate lại state

[Code folder]
api for API GET POST
    - auth for login
    - jwt : JWT TOKEN, Create new and Verify
    - Orders: returns data orders
/styles: style for each page
providers.tsx: wrap element
/lib/store.ts = declare store
/lib features: declare Slices

## Nav
Animation for Header: https://www.npmjs.com/package/framer-motion
add Topbar, add dark light button with next-themes
topbar : css:   --topbar-bg: #FF2A41;, in html : bg-[var(--topbar-bg)]

or variable in taiwind.config.js
## Github
how to push code in IntelliJ
Open Terminal in IntelliJ, run:
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/reactnative


Test:
ssh -T git@github.com

👉 OK → git push oki