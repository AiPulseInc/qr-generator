# 321 GROW — Rozszerzony Brand Book

## 1. Brand Fundamentals
**Brand Name:**
321 GROW

**Alternatywne oznaczenia:**
- 3₂1 GROW (z indeksem dolnym)
- 321 TECH LAB (dla powiązanych projektów technologicznych)

**Slogan:**
We make sales in companies stop being a matter of luck.

**Brand Description:**
321 GROW jest firmą konsultingową i szkoleniową, która pomaga organizacjom osiągać ponadprzeciętne wyniki sprzedażowe. Nasze mocne strony to doświadczenie, skuteczność i partnerskie podejście do klienta.

## 2. Mission & Values
- **Professionalizm** – Tylko doświadczeni eksperci.
- **Efektywność** – Koncentracja na mierzalnych rezultatach.
- **Współpraca** – Praca ramię w ramię z klientem.
- **Innowacja** – Wykorzystanie nowoczesnych narzędzi i wiedzy.
- **Niezawodność** – Dotrzymujemy obietnic.
- **Transformacja** – "Zmieniamy pomysły na działanie." (zgodnie z tekstem w języku polskim: "Zmieniamy pomysły na działanie.")

## 3. Brand Colors
| Kolor | HEX | Tailwind | Zastosowanie |
|-------|-----|----------|--------------|
| Navy | #0e1c36 | navy | Tło nagłówków, stopek, tekst, przyciski nieaktywne |
| Yellow | #FFD600 | yellow | CTA, ikony, wyróżnienia, przyciski aktywne |
| White | #FFFFFF | white | Tła, tekst na ciemnym tle |
| Green accent | #79C143 | green-accent | Linie, małe akcenty, element trójkolorowego paska |
| Blue accent | #0047BB | blue-accent | Linie, małe akcenty, element trójkolorowego paska |
| Light Gray | #f3f4f6 | gray-100 | Tło przycisków nieaktywnych, tło pól formularza |
| Border Gray | #e5e7eb | gray-200 | Obramowania, separatory |
| Border Dark | #d1d5db | gray-300 | Obramowania aktywnych pól formularza |

**Zastosowanie:**
- Navy dominuje w nagłówkach, stopkach, nieaktywnych przyciskach, tekście.
- Yellow stosowany dla CTA, aktywnych przycisków, akcentów, elementów które powinny przyciągać uwagę.
- Green i Blue jako element charakterystycznego trójkolorowego paska dekoracyjnego.
- Odcienie szarości dla elementów interfejsu o niższym priorytecie.

## 4. Typography
**Primary Font:** Montserrat (Google Fonts)

**Alternaty:** Lato, Open Sans

**Style tekstowe:**
- **Nagłówki H1:** 32-48px (2rem-3rem), Montserrat Bold, Navy
- **Nagłówki H2:** 24-32px (1.5rem-2rem), Montserrat Bold, Navy
- **Nagłówki H3:** 20-24px (1.25rem-1.5rem), Montserrat Bold/SemiBold, Navy
- **Tekst podstawowy:** 16px (1rem), Montserrat Regular, Navy
- **Tekst przycisków:** 16px (1rem), Montserrat Medium/SemiBold
- **Etykiety formularzy:** 14-16px (0.875rem-1rem), Montserrat Medium
- **Tekst pomocniczy:** 14px (0.875rem), Montserrat Regular

**Tailwind CSS:**
- Używaj klas `font-montserrat` dla wszystkich tekstów
- Używaj klas `font-bold` dla nagłówków, `font-medium` dla przycisków i etykiet, `font-normal` dla tekstu podstawowego

## 5. Graphic Elements & Icons
- **Ikony:** Wykorzystanie biblioteki Lucide dla spójnego stylu ikon (monitor, tablet, smartphone, rotate)
- **Styl ikon:** Prosty, liniowy, jednokolorowy (navy na jasnym tle, biały na ciemnym tle lub yellow dla wyróżnień)
- **Akcent kolorowy:** Charakterystyczny trójkolorowy pasek (yellow, green-accent, blue-accent) stosowany jako:
  - Akcent ograniczony do 25% szerokości, wyrównany do lewej lub wyśrodkowany
  - Element dekoracyjny oddzielający sekcje
  - Dolna krawędź kart lub kontenerów

## 6. Layout & Composition
- **Kontener główny:** Flex layout z kierunkiem kolumnowym (`flex flex-col h-screen`)
- **Białe przestrzenie:** Stosuj klasy `p-4`, `py-2 px-4`, `gap-2`, `gap-4` dla konsekwentnych odstępów
- **Modułowość:** Treść podzielona na wyraźne bloki z użyciem kart (`rounded shadow-xl`)
- **Responsywność:** 
  - Desktop: 1366x768px
  - Tablet: 768x1024px (portrait), 1024x768px (landscape)
  - Mobile: 375x667px (portrait), 667x375px (landscape)
- **Hierachia:** Wykorzystanie kolorów (yellow dla aktywnych, navy dla nieaktywnych) do wyróżniania elementów
- **Obramowania:** Zaokrąglone narożniki (`rounded`), cienie (`shadow-xl`) dla elementów wymagających wyróżnienia

## 7. Komponenty UI

### Nagłówek (Header)
```html
<div class="bg-navy text-white py-2 px-4 flex items-center justify-between">
  <!-- Logo 321 GROW po lewej -->
  <div class="font-bold text-2xl">3₂1 GROW</div>
  <!-- Nazwa produktu po prawej -->
  <div class="font-bold text-xl">321 TECH LAB</div>
</div>
```

### Przyciski (Buttons)
**Przycisk CTA (aktywny):**
```html
<button class="bg-yellow hover:bg-yellow/90 text-navy font-bold px-4 py-2 rounded whitespace-nowrap">
  Testuj
</button>
```

**Przycisk nieaktywny:**
```html
<button class="bg-navy text-white font-medium p-2 rounded">
  Tekst przycisku
</button>
```

**Przycisk z ikoną:**
```html
<button class="flex items-center gap-2 p-2 rounded bg-gray-100 hover:bg-gray-200 text-navy font-medium border border-gray-300">
  <span id="iconPlaceholder"></span>
  <span>Tekst przycisku</span>
</button>
```

### Pola formularza
```html
<input
  type="text"
  placeholder="Placeholder tekst"
  class="w-full p-2 rounded text-navy font-medium bg-white border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
/>
```

### Karty (Cards)
```html
<div class="border-4 border-navy rounded shadow-xl overflow-hidden bg-white relative">
  <!-- Treść karty -->
  
  <!-- Opcjonalny trójkolorowy akcent na dole -->
  <div class="absolute bottom-0 left-0 right-0 flex">
    <div class="w-1/3 h-1 bg-yellow"></div>
    <div class="w-1/3 h-1 bg-green-accent"></div>
    <div class="w-1/3 h-1 bg-blue-accent"></div>
  </div>
</div>
```

### Stopka (Footer)
```html
<div class="bg-navy text-white p-4 text-center relative">
  <!-- Trójkolorowy akcent w stopce ograniczony do 25% szerokości, wyśrodkowany -->
  <div class="color-accent-center absolute bottom-0 left-0 right-0">
    <div class="w-1/3 h-1 bg-yellow"></div>
    <div class="w-1/3 h-1 bg-green-accent"></div>
    <div class="w-1/3 h-1 bg-blue-accent"></div>
  </div>
  <p class="text-sm font-medium mb-2">
    Treść stopki
  </p>
</div>
```

## 8. Responsywność
- Używaj podejścia Mobile First
- Definiuj breakpointy zgodnie z Tailwind CSS:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px
- Kluczowe punkty responsywności dla różnych urządzeń:
  - Mobile: 375x667px
  - Tablet: 768x1024px
  - Desktop: 1366x768px
- Dla responsywnych kart w układzie siatki:
  ```html
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Karty -->
  </div>
  ```

## 9. Inicjalizacja ikon
```javascript
// Używaj biblioteki Lucide dla spójności
document.getElementById("iconPlaceholder").innerHTML = 
  lucide.icons.iconName.toSvg({
    width: 24,
    height: 24,
    color: "currentColor",
  });
```

## 10. Komunikaty o błędach
```html
<div class="bg-red-100 border-2 border-red-600 p-4 rounded-lg text-center max-w-[80%]">
  <h3 class="text-red-600 font-bold mb-2">Tytuł błędu</h3>
  <p>Opis błędu z wyjaśnieniem i możliwymi rozwiązaniami.</p>
</div>
```

## 11. Don'ts
- Nie używaj kolorów spoza palety marki
- Nie stosuj fontów szeryfowych
- Nie używaj gradientów, cieni tekstu lub nadmiernych dekoracji
- Nie twórz kompozycji o niskim kontraście
- Nie zmieniaj proporcji trójkolorowego akcentu (zawsze 1/3 każdego koloru)
- Nie używaj zaokrągleń większych niż `rounded-lg` (8px)
- Nie stosuj ciemnego tła dla głównej treści (tylko dla nagłówka i stopki)
