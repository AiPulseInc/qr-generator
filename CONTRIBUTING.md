# Contributing to QRGenerator

Thank you for your interest in contributing to QRGenerator! This document provides guidelines and best practices for contributing to the project.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development Setup](#development-setup)
3. [Project Structure](#project-structure)
4. [Coding Standards](#coding-standards)
5. [Component Guidelines](#component-guidelines)
6. [State Management Guidelines](#state-management-guidelines)
7. [Styling Guidelines](#styling-guidelines)
8. [TypeScript Guidelines](#typescript-guidelines)
9. [Testing Guidelines](#testing-guidelines)
10. [Git Workflow](#git-workflow)
11. [Pull Request Process](#pull-request-process)
12. [Adding New Features](#adding-new-features)
13. [Performance Guidelines](#performance-guidelines)
14. [Documentation](#documentation)

---

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** ≥ 20
- **npm** or **yarn**
- **React Native development environment** set up
- **iOS:** Xcode, CocoaPods, Ruby
- **Android:** Android Studio, JDK 11+
- **Git** for version control

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/QRGenerator.git
   cd QRGenerator
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/original-repo/QRGenerator.git
   ```

---

## Development Setup

### Installation

```bash
# Install JavaScript dependencies
npm install

# iOS: Install Ruby bundler and CocoaPods
bundle install
bundle exec pod install --project-directory=ios
```

### Running the App

```bash
# Start Metro bundler
npm start

# Run on iOS (in another terminal)
npm run ios

# Run on Android (in another terminal)
npm run android
```

### Development Tools

```bash
# Run linter
npm run lint

# Run tests
npm test

# Type check
npx tsc --noEmit
```

---

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── forms/           # QR type-specific forms
│   ├── QRCodeDisplay.tsx
│   └── QRGeneratorScreen.tsx
├── contexts/            # React Context providers
├── hooks/               # Custom React hooks
├── types/               # TypeScript definitions
└── utils/               # Utility functions
```

### File Naming Conventions

- **Components:** PascalCase (e.g., `FormInput.tsx`)
- **Hooks:** camelCase with 'use' prefix (e.g., `useQRGenerator.ts`)
- **Utils:** camelCase (e.g., `qrPayloads.ts`)
- **Types:** PascalCase for interfaces/types
- **Constants:** UPPER_SNAKE_CASE

---

## Coding Standards

### General Principles

1. **DRY (Don't Repeat Yourself)** - Avoid code duplication
2. **KISS (Keep It Simple, Stupid)** - Prefer simplicity over complexity
3. **YAGNI (You Aren't Gonna Need It)** - Don't add unnecessary features
4. **Separation of Concerns** - Keep business logic separate from UI

### Code Style

- **Linter:** ESLint with React Native config
- **Formatter:** Prettier
- **Line Length:** Max 80-100 characters
- **Indentation:** 2 spaces
- **Quotes:** Single quotes for strings
- **Semicolons:** Required

### ESLint and Prettier

Run before committing:

```bash
npm run lint
npx prettier --write "src/**/*.{ts,tsx}"
```

---

## Component Guidelines

### Functional Components Only

Use functional components with hooks (no class components).

```typescript
// ✅ Good
const MyComponent: React.FC<Props> = ({ title }) => {
  return <Text>{title}</Text>;
};

// ❌ Bad
class MyComponent extends React.Component {
  render() {
    return <Text>{this.props.title}</Text>;
  }
}
```

### Component Structure

```typescript
// 1. Imports
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts';

// 2. Types/Interfaces
interface MyComponentProps {
  title: string;
  onPress: () => void;
}

// 3. Component
const MyComponent: React.FC<MyComponentProps> = ({ title, onPress }) => {
  // 3a. Hooks
  const { colors } = useTheme();
  const [count, setCount] = useState(0);

  // 3b. Effects
  useEffect(() => {
    // Side effects
  }, []);

  // 3c. Event handlers
  const handlePress = () => {
    onPress();
    setCount(count + 1);
  };

  // 3d. Render
  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text style={{ color: colors.text }}>{title}</Text>
    </View>
  );
};

// 4. Styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
  },
});

// 5. Export
export default MyComponent;
```

### Props Best Practices

1. **Always define prop types** with TypeScript interfaces
2. **Use destructuring** for props
3. **Provide default values** when appropriate
4. **Keep prop lists manageable** (max 5-7 props)

```typescript
// ✅ Good
interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;  // Optional with ?
  multiline?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder = '',  // Default value
  multiline = false,
}) => {
  // Component implementation
};
```

---

## State Management Guidelines

### Local State vs. Shared State

- **Local State (useState):** UI-specific state (modal visibility, input focus)
- **Shared State (Custom Hooks):** Business logic shared across components
- **Global State (Context):** App-wide state (theme, auth)

### Custom Hooks

Create custom hooks for reusable logic:

```typescript
// useQRGenerator.ts
export const useQRGenerator = () => {
  const [qrType, setQRType] = useState<QRType>('url');
  const [urlData, setUrlData] = useState<URLData>({ url: '' });

  const qrPayload = useMemo(() => {
    return generateURLPayload(urlData);
  }, [urlData]);

  return {
    qrType,
    setQRType,
    urlData,
    setUrlData,
    qrPayload,
  };
};
```

### Memoization

Use `useMemo` and `useCallback` to optimize performance:

```typescript
// ✅ Good - Memoize expensive computations
const qrPayload = useMemo(() => {
  return generatePayload(data);
}, [data]);

const handlePress = useCallback(() => {
  doSomething();
}, [dependencies]);

// ❌ Bad - Recreates on every render
const qrPayload = generatePayload(data);
const handlePress = () => doSomething();
```

---

## Styling Guidelines

### Theme-Aware Styling

Always use theme colors from context:

```typescript
// ✅ Good
const { colors } = useTheme();

<View style={{ backgroundColor: colors.surface }}>
  <Text style={{ color: colors.text }}>Hello</Text>
</View>

// ❌ Bad - Hardcoded colors
<View style={{ backgroundColor: '#001437' }}>
  <Text style={{ color: '#ffffff' }}>Hello</Text>
</View>
```

### StyleSheet.create

Use `StyleSheet.create` for static styles:

```typescript
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
```

### Dynamic Styles

Combine static and dynamic styles:

```typescript
<View style={[styles.container, { backgroundColor: colors.surface }]} />
```

### Design System Adherence

Follow the 321 GROW brand book:

- **Colors:** Use `colors` from `useTheme()`
- **Spacing:** Multiples of 4 or 8 (4, 8, 12, 16, 24, 32)
- **Border Radius:** 8px for cards, 20px for pills
- **Font Weights:** 500, 600, 700

---

## TypeScript Guidelines

### Strict Typing

Always provide explicit types:

```typescript
// ✅ Good
const [count, setCount] = useState<number>(0);
const handleChange = (value: string): void => {
  // Implementation
};

// ❌ Bad - Relying on inference where it's unclear
const [count, setCount] = useState(0);
```

### Interfaces vs. Types

- **Use `interface`** for component props and object shapes
- **Use `type`** for unions, intersections, and primitives

```typescript
// Interface for object shape
interface FormInputProps {
  label: string;
  value: string;
}

// Type for union
type QRType = 'url' | 'wifi' | 'calendar' | 'sms' | 'email';
```

### Avoid `any`

Never use `any` unless absolutely necessary:

```typescript
// ✅ Good
const handleData = (data: URLData) => {
  // Type-safe
};

// ❌ Bad
const handleData = (data: any) => {
  // Type unsafe
};
```

### Type Exports

Export types from the same file or from `src/types/index.ts`:

```typescript
// MyComponent.tsx
export interface MyComponentProps {
  title: string;
}

// Or in src/types/index.ts
export interface URLData {
  url: string;
}
```

---

## Testing Guidelines

### Test Structure

```typescript
// MyComponent.test.tsx
import { render, fireEvent } from '@testing-library/react-native';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<MyComponent title="Test" />);
    expect(getByText('Test')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <MyComponent title="Test" onPress={onPress} />
    );

    fireEvent.press(getByText('Test'));
    expect(onPress).toHaveBeenCalled();
  });
});
```

### Testing Hooks

```typescript
import { renderHook, act } from '@testing-library/react-hooks';
import { useQRGenerator } from '../useQRGenerator';

test('updates URL data', () => {
  const { result } = renderHook(() => useQRGenerator());

  act(() => {
    result.current.setUrlData({ url: 'https://test.com' });
  });

  expect(result.current.urlData.url).toBe('https://test.com');
});
```

### Test Coverage

Aim for:
- **Components:** Rendering, props, user interactions
- **Hooks:** State updates, computed values, side effects
- **Utils:** Input/output validation

---

## Git Workflow

### Branch Naming

- **Feature:** `feature/add-qr-scanning`
- **Bug Fix:** `fix/wifi-password-escaping`
- **Refactor:** `refactor/update-theme-system`
- **Docs:** `docs/update-readme`

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting, not CSS)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**

```
feat(forms): add vCard QR code form

Implement vCard form component with fields for name, phone, email, and address.

Closes #42
```

```
fix(utils): escape special characters in WiFi SSID

WiFi SSIDs with semicolons were breaking QR code generation.
Added escaping for ; : \ , characters.

Fixes #38
```

### Keeping Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Merge into your main branch
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

---

## Pull Request Process

### Before Submitting

1. **Test your changes:**
   ```bash
   npm test
   npm run lint
   npm run ios  # Test on iOS
   npm run android  # Test on Android
   ```

2. **Update documentation** if needed

3. **Add tests** for new features

4. **Ensure commits follow guidelines**

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on iOS
- [ ] Tested on Android
- [ ] Unit tests added/updated
- [ ] All tests passing

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
```

### Review Process

1. Maintainer will review within 3-5 business days
2. Address feedback with new commits
3. Once approved, maintainer will merge

---

## Adding New Features

### Adding a New QR Code Type

Example: Adding vCard support

1. **Add type definition** (`src/types/index.ts`):
   ```typescript
   export interface VCardData {
     name: string;
     phone: string;
     email: string;
   }

   export type QRType = 'url' | 'wifi' | 'calendar' | 'sms' | 'email' | 'vcard';
   ```

2. **Create payload generator** (`src/utils/qrPayloads.ts`):
   ```typescript
   export const generateVCardPayload = (data: VCardData): string => {
     return `BEGIN:VCARD\nVERSION:3.0\nFN:${data.name}\nTEL:${data.phone}\nEMAIL:${data.email}\nEND:VCARD`;
   };
   ```

3. **Create form component** (`src/components/forms/VCardForm.tsx`):
   ```typescript
   interface VCardFormProps {
     data: VCardData;
     onChange: (data: VCardData) => void;
   }

   export const VCardForm: React.FC<VCardFormProps> = ({ data, onChange }) => {
     // Form implementation
   };
   ```

4. **Update useQRGenerator hook** (`src/hooks/useQRGenerator.ts`):
   ```typescript
   const [vcardData, setVCardData] = useState<VCardData>({
     name: '',
     phone: '',
     email: '',
   });

   const qrPayload = useMemo(() => {
     switch (qrType) {
       case 'vcard': return generateVCardPayload(vcardData);
       // ...other cases
     }
   }, [qrType, vcardData, /* ... */]);

   return {
     // ...existing returns
     vcardData,
     setVCardData,
   };
   ```

5. **Update QRGeneratorScreen** to render VCardForm

6. **Add to constants** (`src/utils/constants.ts`):
   ```typescript
   export const QR_TYPES = [
     // ...existing types
     { id: 'vcard', label: 'vCard' },
   ] as const;
   ```

7. **Write tests** for VCardForm and payload generator

8. **Update documentation** (README.md, API_DOCUMENTATION.md)

---

## Performance Guidelines

### Optimization Checklist

- [ ] Use `useMemo` for expensive computations
- [ ] Use `useCallback` for event handlers passed as props
- [ ] Avoid anonymous functions in render
- [ ] Use `React.memo` for pure components (if needed)
- [ ] Minimize re-renders with proper dependency arrays
- [ ] Lazy load heavy components if applicable

### Example Optimizations

```typescript
// ✅ Good - Memoized
const ExpensiveComponent = React.memo<Props>(({ data }) => {
  const result = useMemo(() => heavyComputation(data), [data]);
  return <Text>{result}</Text>;
});

// ❌ Bad - Recomputes on every render
const ExpensiveComponent: React.FC<Props> = ({ data }) => {
  const result = heavyComputation(data);
  return <Text>{result}</Text>;
};
```

---

## Documentation

### Code Comments

```typescript
// ✅ Good - Comment WHY, not WHAT
// Escape special characters to comply with WiFi QR standard
const escapedSSID = escapeSpecialChars(ssid);

// ❌ Bad - States the obvious
// Set the SSID variable
const escapedSSID = escapeSpecialChars(ssid);
```

### JSDoc for Complex Functions

```typescript
/**
 * Generates a WiFi QR code payload string.
 *
 * Escapes special characters (; : \ ,) in SSID and password
 * according to the WiFi QR code standard.
 *
 * @param data - WiFi network configuration
 * @returns WiFi QR code payload string (WIFI:T:...;;)
 *
 * @example
 * generateWiFiPayload({
 *   ssid: 'My Network',
 *   password: 'secret',
 *   security: 'WPA',
 *   hidden: false
 * })
 * // Returns: 'WIFI:T:WPA;S:My Network;P:secret;H:false;;'
 */
export const generateWiFiPayload = (data: WiFiData): string => {
  // Implementation
};
```

### Update Documentation Files

When making significant changes, update:

- **README.md** - User-facing documentation
- **API_DOCUMENTATION.md** - Component/hook API reference
- **ARCHITECTURE.md** - Technical architecture details
- **CONTRIBUTING.md** - This file

---

## Code Review Checklist

### For Reviewers

- [ ] Code follows project style guidelines
- [ ] Changes are well-documented
- [ ] Tests are included and passing
- [ ] No unnecessary complexity
- [ ] Performance considerations addressed
- [ ] TypeScript types are correct
- [ ] No console.log or debugging code
- [ ] Accessible and user-friendly

### For Contributors

Before requesting review:

- [ ] Self-reviewed code
- [ ] Ran linter and formatter
- [ ] All tests pass
- [ ] Tested on iOS and Android
- [ ] Updated documentation
- [ ] Commit messages follow guidelines
- [ ] PR description is clear

---

## Questions or Issues?

If you have questions:

1. Check existing [documentation](./README.md)
2. Search [GitHub Issues](https://github.com/repo/issues)
3. Open a new issue with the `question` label
4. Contact the development team

---

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

## Thank You!

Your contributions help make QRGenerator better for everyone. We appreciate your time and effort!

**Built with ❤️ by 321 Tech Lab**
