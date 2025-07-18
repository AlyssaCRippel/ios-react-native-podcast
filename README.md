# 🎧 iOS React Native Podcast App

A modern React Native application that displays the **Top 10 Most Popular Podcasts** using the Taddy API. Built with React Native, TanStack Query (React Query), TypeScript, and styled with NativeWind (Tailwind CSS).

## 📱 Features

- Browse the top 10 most popular podcasts
- View detailed podcast information and episodes
- Modern, responsive UI with Tailwind CSS styling
- GraphQL integration with Taddy API
- TypeScript support for better development experience
- Navigation with React Navigation
- Cross-platform support (iOS & Android)

## 🛠 Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **TanStack Query** for efficient data fetching and caching
- **GraphQL** with graphql-request client
- **NativeWind** for Tailwind CSS styling
- **React Navigation** for navigation
- **Taddy API** for podcast data

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- For iOS: Xcode and iOS Simulator
- For Android: Android Studio and Android Emulator

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ios-react-native-podcast
   ```

2. **Navigate to the app directory**
   ```bash
   cd ios-podcast-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the `ios-podcast-app` folder with the following variables:
   ```env
   API_URL=https://api.taddy.org
   X_USER_ID=your_user_id_from_taddy_api
   X_API_KEY=your_api_key_from_taddy_api
   ```
   
   > **Note:** You'll need to sign up at [Taddy.org](https://taddy.org/developers) to get your API credentials.

## 📱 Running the App

### iOS (Simulator)

1. **Start the development server**
   ```bash
   npm start
   ```

2. **Run on iOS Simulator**
   ```bash
   npm run ios
   ```
   
   Or press `i` in the terminal after running `npm start`

3. **Run on physical iOS device**
   - Install the Expo Go app from the App Store
   - Scan the QR code displayed in the terminal or browser

### Android (Emulator)

1. **Check available emulators**
   ```bash
   emulator -list-avds
   ```

2. **Start an emulator** (replace with your emulator name)
   ```bash
   emulator -avd Pixel_3a_API_33_2
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on Android**
   ```bash
   npm run android
   ```
   
   Or press `a` in the terminal after running `npm start`

### Web (Development)

```bash
npm run web
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📂 Project Structure

```
ios-podcast-app/
├── components/           # Reusable UI components
│   ├── episode_component.tsx
│   ├── featured_podcast_component.tsx
│   ├── podcast_component.tsx
│   └── ...
├── screens/             # Screen components
│   ├── podcast_details_screen.tsx
│   └── popular_podcasts_screen.tsx
├── data/                # Data fetching and types
│   ├── queries.ts
│   ├── types.ts
│   └── ...
├── clients/             # API clients
│   └── graphql_client.ts
├── navigation/          # Navigation configuration
└── __tests__/          # Test files
```

## 🔧 Available Scripts

- `npm start` - Start the Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser
- `npm test` - Run tests

## 🌐 API Integration

This app uses the [Taddy API](https://taddy.org/developers/podcast-api/most-popular-podcasts) to fetch podcast data. The API provides:

- Most popular podcasts
- Podcast details and metadata
- Episode information
- Search functionality

## 🎨 Styling

The app uses **NativeWind** for styling, which brings Tailwind CSS to React Native. This allows for:

- Utility-first CSS approach
- Responsive design
- Consistent design system
- Fast development workflow

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Notes

- **Code Generation**: ChatGPT was used for styling assistance and bug resolution and readme formatting
- **Environment Setup**: Ensure all environment variables are properly configured
- **Testing**: Run tests before submitting any changes
- **TypeScript**: Maintain type safety throughout the codebase

## 📄 License

This project is for educational purposes as part of coursework.

## 🔗 Useful Links

- [Taddy API Documentation](https://taddy.org/developers)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [NativeWind Documentation](https://www.nativewind.dev/)
