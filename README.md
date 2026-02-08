# 📱 Getir Clone – React Native E-Commerce App

A modern mobile e-commerce application clone of Getir, built with **React Native (Expo)**.  
Features a complete shopping experience with product browsing, category filtering, cart management, and deep linking support.

---

## ✨ Features

- **🛍️ E-Commerce Functionality**
  - 🏠 Home screen with product categories and banners
  - 🔍 Category-based product filtering
  - 📦 Product details with image carousel
  - 🛒 Shopping cart with add/remove/clear operations
  - 💰 Real-time cart total calculation

- **🎨 Modern UI/UX**
  - 📱 **Responsive Design** – Adaptive layouts for all screen sizes
  - 🎯 Card-based product display
  - 🖼️ Image carousels for product galleries
  - 🎨 Consistent theming with design tokens
  - 📊 Custom tab bar with special center button

- **🧭 Navigation**
  - 📑 Bottom tab navigation (Home, Search, List, User, Gift)
  - 🔄 Stack navigation for nested screens
  - 🔗 **Deep Linking** support (`getir://cart`, `getir://search`)
  - 🎯 Custom headers with action buttons

- **⚙️ State Management**
  - 🔄 **Redux** for global state management
  - 🛒 Cart state with Redux Thunk
  - 📊 Redux DevTools integration

---

## 🛠️ Technologies

### **Frontend**
- **React Native** (Expo ~54.0.32)
- **React** 19.1.0
- **React Navigation**
  - `@react-navigation/native` ^7.1.28
  - `@react-navigation/bottom-tabs` ^7.10.1
  - `@react-navigation/stack` ^7.6.16
  - `@react-navigation/native-stack` ^7.11.0

### **State Management**
- **Redux** ^5.0.1
- **React Redux** ^9.2.0
- **Redux Thunk** ^3.1.0 (async actions)
- **Redux Logger** ^3.0.6 (development logging)
- **Redux DevTools Extension** ^2.13.9

### **Deep Linking**
- **Expo Linking** ~8.0.11
- Custom URL scheme: `getir://`

### **UI & Design**
- **Responsive Design** utilities (custom scaling functions)
- Design tokens (colors, spacing, typography)
- Custom components (banners, cards, filters)

### **Other**
- **Expo Status Bar** ~3.0.9
- **React Native Gesture Handler** ~2.28.0
- **React Native Safe Area Context** ^5.6.2
- **React Native Screens** ~4.16.0

---

## 💻 Quick Setup

### 1. Clone repository

```bash
git clone <repository-url>
cd getir_clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

Then run on:

- **Android**: Press `a` or use Expo Go
- **iOS**: Press `i` (simulator) or scan QR code with Camera / Expo Go
- **Web**: Press `w`

---

## 📁 Project Structure

```
getir_clone/
├── App.js                    # Root component with Redux Provider & Navigation
├── app.json                  # Expo configuration (scheme, icons, splash)
├── index.js                  # Entry point
├── package.json
└── src/
    ├── components/           # Reusable UI components
    │   ├── Banner/
    │   ├── CardButton/
    │   ├── CartItem/
    │   ├── CategoryFiltering/
    │   ├── CategoryItem.js/
    │   ├── CustomTabBarButton/
    │   ├── DetailBox/
    │   ├── DetailProperties/
    │   ├── HeaderMain/
    │   ├── ImageCarousel/
    │   ├── MainCategories/
    │   ├── ProductContainer/
    │   ├── ProductItem/
    │   └── TypeFiltering/
    │
    ├── const/                # Constants & configuration
    │   ├── design/
    │   │   └── theme.js      # Design tokens (colors, spacing)
    │   ├── screens.js        # Screen name constants
    │   ├── subCategories.js
    │   └── urls.js
    │
    ├── navigators/           # Navigation configuration
    │   ├── RootNavigator.js  # Bottom tab navigator
    │   └── HomeNavigator.js  # Stack navigator (nested)
    │
    ├── redux/                # Redux state management
    │   ├── actions/
    │   │   └── cartActions.js
    │   ├── reducers/
    │   │   └── cartItem.js
    │   ├── constants.js
    │   └── store.js          # Redux store configuration
    │
    ├── screens/              # Screen components
    │   ├── Cart/
    │   ├── CategoryFilter/
    │   ├── Home/
    │   └── ProductDetails/
    │
    └── utils/
        └── responsive.js     # Responsive design utilities
```

---

## 🔗 Deep Linking

The app supports deep linking for direct navigation to specific screens.

### **URL Scheme**
- **Development (Expo Go)**: `exp://<ip>:<port>/--/<path>`
- **Production**: `getir://<path>`

### **Available Routes**

- **Search page** (tab screen): `getir://search`
- **Cart screen** (nested in Home tab): `getir://cart`

### **Testing Deep Links**

#### **Android Emulator:**
```bash
npx uri-scheme open getir://cart --android
```

#### **iOS Simulator:**
```bash
npx uri-scheme open getir://cart --ios
```

#### **Expo Go (Development):**
```bash
npx uri-scheme open exp://127.0.0.1:8081/--/cart --android
```

---

## 📱 Responsive Design

The app uses a custom responsive utility system for consistent UI across different screen sizes.

### **Implementation**

Located in `src/utils/responsive.js`, the responsive system:

- Uses a base width of 375px (iPhone X/11/12 standard) for scaling calculations
- Provides functions for responsive font sizes, spacing, and dimensions
- Automatically scales UI elements based on device width
- Ensures consistent appearance across different screen sizes

### **Features**

- **Responsive Font Sizes** – Text scales proportionally with screen size
- **Responsive Spacing** – Padding and margins adapt to device dimensions
- **Device Dimensions** – Access to current device width and height
- **Proportional Scaling** – Maintains design ratios across all devices

---

## 🔄 Redux State Management

The app uses Redux for centralized state management, particularly for cart operations.

### **Store Structure**

The Redux store manages cart items with product data and related information. Each cart item contains product details and is used for calculating totals and managing the shopping experience.

### **Actions**

- **Add to Cart** – Adds products to the shopping cart
- **Remove from Cart** – Removes specific products from the cart
- **Clear Cart** – Empties the entire cart

### **Reducers**

- **Cart Items Reducer** – Manages cart state, handles add/remove operations, and calculates real-time cart totals

---

## 🎨 Design System

### **Theme Configuration**

Located in `src/const/design/theme.js`:

- Color palette (primary, secondary, backgrounds)
- Typography settings
- Spacing constants
- Component-specific styling

---

## 🚀 Building for Production

### **Using EAS Build**

1. **Install EAS CLI:**
   ```bash
   npm install -g eas-cli
   ```

2. **Login:**
   ```bash
   eas login
   ```

3. **Configure build:**
   ```bash
   eas build:configure
   ```

4. **Build for Android:**
   ```bash
   eas build --platform android --profile production
   ```

5. **Build for iOS:**
   ```bash
   eas build --platform ios --profile production
   ```

Deep linking will automatically work with `getir://` scheme in production builds.

---

## 📝 Notes

- This project is a **learning project** demonstrating React Native, Redux, Navigation, and Deep Linking concepts.
- Uses Expo for rapid development and easy deployment.
- Responsive design ensures consistent experience across devices.
- Redux provides centralized state management for cart operations.

---

## 🤝 Contributing

Suggestions, improvements, and contributions are welcome!

---

## 📄 License

This project is for educational purposes.

