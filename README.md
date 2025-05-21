This project is a web application designed to calculate or determine a user's 'destiny' or 'state' based on their birth date, time, and gender.

The key technologies used in this project include:
* Next.js (with App Router)
* TypeScript
* Supabase (for the backend database)
* next-intl (for internationalization)

## Setup Instructions

### Prerequisites
*   Node.js (version 18.17.0 or higher)
*   Yarn (recommended) or npm

### Installation Steps
1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3.  Install dependencies:
    Using Yarn (recommended):
    ```bash
    yarn install
    ```
    Or using npm:
    ```bash
    npm install
    ```

### Environment Variables
A `.env` file is required at the root of the project for Supabase configuration. Create this file and add the following, replacing the placeholder values with your actual Supabase credentials:

```env
# .env example
SUPABASE_URL="your-supabase-url"
SUPABASE_ANON_KEY="your-supabase-anon-key"
```

### Database Seeding
To populate the database with initial data, run the seed script. This script typically uses `scripts/seed.js`.

Using Yarn:
```bash
yarn seed
```
Or using npm:
```bash
npm run seed
```

## Usage

### Running the Development Server
To start the development server, run the following command:

Using Yarn:
```bash
yarn dev
```
Or using npm:
```bash
npm run dev
```
The application will typically be accessible at `http://localhost:4000`.

### Building the Application
To create an optimized production build of the application, run:

Using Yarn:
```bash
yarn build
```
Or using npm:
```bash
npm run build
```

### Starting the Production Server
After building the application, you can start the production server with:

Using Yarn:
```bash
yarn start
```
Or using npm:
```bash
npm run start
```

### Application Flow
Users can input their birth date, time, and gender through a form. The application then processes this information and displays a personalized statement or 'destiny' result.

## Project Structure
Here's a brief overview of the key directories in this project:

*   `app/`: Contains the core application logic, utilizing the Next.js App Router. This includes pages, layouts, and API route handlers.
*   `components/`: Houses reusable UI components that are used across various parts of the application.
*   `lib/`: Includes utility functions, data fetching logic, server-side action handlers, and custom type definitions (TypeScript interfaces/types).
*   `messages/`: Stores internationalization (i18n) files, such as `en.json` and `zh.json`, for multi-language support.
*   `public/`: Holds static assets like images, fonts, and other files that are served directly by the web server.
*   `scripts/`: Contains helper scripts for various development tasks, such as database seeding (`seed.js`).
*   `src/`: Contains additional source files, which might include more complex UI elements (e.g., `src/components/magicui`) or core configuration files (e.g., `src/i18n.ts`).

## Internationalization
This application supports internationalization (i18n) to provide a multilingual user experience. We use the `next-intl` library to manage translations and locale handling.

Currently, the application supports the following languages:
*   English
*   Chinese

Translation files for each supported language are located in the `messages/` directory (e.g., `messages/en.json`, `messages/zh.json`). To add support for new languages, you would create a new JSON file in this directory and update the application's i18n configuration.

## Contributing
We welcome contributions from the community! If you'd like to contribute to the project, please follow these general steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix (e.g., `git checkout -b feature/your-feature-name` or `git checkout -b fix/issue-number`).
3.  Make your changes and commit them with clear, descriptive messages.
4.  Please ensure your code adheres to the project's linting standards by running `yarn lint` (or `npm run lint`) before submitting a pull request.
5.  Push your changes to your forked repository.
6.  Submit a pull request to the main repository, detailing the changes you've made.

We appreciate your help in making this project better!

## License
This project does not currently have a license. Consider adding an open-source license like MIT if you intend for others to use, modify, or distribute this code.
If a `LICENSE` file were to be added in the future, this section could then refer to it (e.g., "This project is licensed under the MIT License - see the LICENSE.md file for details.").
