# HiFi Website

Welcome to the HiFi Website project! This project is designed to provide an engaging and informative platform for users interested in high-fidelity audio equipment and services.

## Project Structure

The project is organized as follows:

- **src/**: Contains all the source code for the application.
  - **main.tsx**: The entry point of the application.
  - **App.tsx**: The main application component.
  - **pages/**: Contains the different pages of the website.
    - **Home.tsx**: The homepage of the website.
    - **About.tsx**: Information about the HiFi services.
    - **Contact.tsx**: Contact information and form.
  - **components/**: Reusable components used throughout the application.
    - **Header.tsx**: The header component with navigation.
    - **Footer.tsx**: The footer component.
    - **Hero.tsx**: The hero section component.
    - **Services.tsx**: Component displaying services offered.
    - **Testimonials.tsx**: Component for customer testimonials.
  - **layouts/**: Layout components for structuring pages.
    - **DefaultLayout.tsx**: The default layout for pages.
  - **hooks/**: Custom hooks for the application.
    - **useWindowSize.ts**: Hook to get the current window size.
  - **lib/**: Library functions and API calls.
    - **api.ts**: API functions for data fetching.
  - **styles/**: CSS files for styling the application.
    - **globals.css**: Global styles.
    - **components.css**: Component-specific styles.
  - **types/**: TypeScript type definitions.
    - **index.ts**: Common types used in the application.

- **public/**: Contains public assets.
  - **robots.txt**: Instructions for web crawlers.

- **package.json**: Project metadata and dependencies.

- **tsconfig.json**: TypeScript configuration.

- **vite.config.ts**: Configuration for Vite.

- **.gitignore**: Files and directories to ignore in version control.

## Getting Started

To get started with the HiFi Website project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd hifi-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.