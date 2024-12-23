
# Next Scheduler

Next Scheduler is a modern event management and booking platform (Calendly Clone) built with Next.js, Clerk for authentication, Google Calendar integration for seamless scheduling, and Prisma for database management. Users can create and share event links, manage bookings, and generate Google Meet links automatically for events. Designed for ease of use and efficiency, it ensures a streamlined scheduling experience for hosts and attendees.



## Screenshots

![App Screenshot](https://res.cloudinary.com/dbdqc0uzq/image/upload/v1734941051/Screenshots/bbhzli7wsht61h95httd.png)

## Technologies used

- [Next Js](https://nextjs.org/docs) - React framwork for creating fullstack application.
- [shadcn/ui](https://ui.shadcn.com/docs) - Beautifully designed components that you can copy and paste into your apps.
- [Prisma](https://www.prisma.io/docs) -  A Node.js and TypeScript ORM with an intuitive data model, automated migrations, type-safety, and auto-completion.
- [Neon DB](https://www.neon.tech) - Neon offers a serverless Postgres database platform for developers.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [React hot toast](https://react-hot-toast.com/) - Toast notifications for React.

## Run Locally

Clone the project

```bash
  git clone https://github.com/rishabhraikwar98/next-scheduler
```

Go to the project directory

```bash
  cd next-scheduler
```

Install dependencies

```bash
  npm install
```
Genrating tables

```bash
  prisma genrate
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

`CLERK_SECRET_KEY`

`NEXT_PUBLIC_CLERK_SIGN_IN_URL`

`NEXT_PUBLIC_CLERK_SIGN_UP_URL`

`DATABASE_URL`
