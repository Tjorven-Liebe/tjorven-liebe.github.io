export type Locale = 'en' | 'de'

export const defaultLocale: Locale = 'en'
export const locales: Locale[] = ['en', 'de']

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
}

export interface Translations {
  // Meta
  siteTitle: string
  siteDescription: string

  // Welcome screen
  welcomeTitle: string
  welcomeDescription: string
  playPauseShortcut: string
  stepShortcut: string

  // Sidebar
  searchPlaceholder: string
  algorithmsCount: string // "{count} algorithms"
  algorithmCountLabel: string // "{count} algorithms" for screen readers
  expandSidebar: string
  collapseSidebar: string

  // Code panel
  tabCode: string
  tabAbout: string
  selectAlgorithmCode: string
  expandCodePanel: string
  collapseCodePanel: string
  variables: string
  codeLanguage: string

  // Controls
  speed: string
  skipToStart: string
  stepBackward: string
  playPause: string
  stepForward: string
  skipToEnd: string
  step: string // "Step {n}:"
  controlsLabel: string
  progressStep: string // "Step {current} of {total}"
  speedLevel: string // "Speed level {n} of 5"

  // Drag handles
  resizeSidebar: string
  resizeCodePanel: string

  // Mobile / aria labels
  sidebarAriaLabel: string
  codePanelAriaLabel: string
  visualizationLabel: string
  zoomControls: string
  zoomIn: string
  zoomOut: string
  resetZoom: string
  mobileMenuTitle: string
  openMenu: string
  closeMenu: string
  closePanel: string
  viewCode: string
  languageLabel: string

  // 404
  notFoundTitle: string
  notFoundDescription: string
  backToHome: string
  notFoundHint: string
  notFoundSearchLabel: string
  notFoundSearchPlaceholder: string
  notFoundDidYouMean: string
  notFoundPopular: string
  notFoundBrowseCategories: string
  notFoundNoResults: string
  notFoundViewAll: string

  // Graph visualizer
  queue: string
  stack: string
  empty: string
  distances: string

  // Categories
  categories: Record<string, string>
}

export const translations: Record<Locale, Translations> = {
  en: {
    siteTitle: 'Algorithm Visualizer — Sorting, Graphs, DP & More',
    siteDescription:
      'Free interactive algorithm visualizer. Learn sorting, searching, graphs, dynamic programming, and data structures with step-by-step animations.',

    welcomeTitle: 'Algorithm Visualizer',
    welcomeDescription:
      'Learn algorithms through step-by-step visualizations — sorting, graphs, dynamic programming, data structures, and more. Pick one from the sidebar to begin.',
    playPauseShortcut: 'Play / Pause',
    stepShortcut: 'Step',

    searchPlaceholder: 'Search algorithms...',
    algorithmsCount: '{count} algorithms',
    algorithmCountLabel: '{count} algorithms',
    expandSidebar: 'Expand sidebar',
    collapseSidebar: 'Collapse sidebar',

    tabCode: 'Code',
    tabAbout: 'Explanation',
    selectAlgorithmCode: 'Select an algorithm to view its code',
    expandCodePanel: 'Expand code panel',
    collapseCodePanel: 'Collapse code panel',
    variables: 'Variables',
    codeLanguage: 'Programming language',

    speed: 'Speed',
    skipToStart: 'Skip to start',
    stepBackward: 'Step backward (←)',
    playPause: 'Play/Pause (Space)',
    stepForward: 'Step forward (→)',
    skipToEnd: 'Skip to end',
    step: 'Step {n}:',
    controlsLabel: 'Playback controls',
    progressStep: 'Step {current} of {total}',
    speedLevel: 'Speed level {n} of 5',

    resizeSidebar: 'Resize sidebar',
    resizeCodePanel: 'Resize code panel',

    sidebarAriaLabel: 'Algorithm categories',
    codePanelAriaLabel: 'Code and details panel',
    visualizationLabel: 'Algorithm visualization',
    zoomControls: 'Visualization zoom',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    resetZoom: 'Reset zoom',
    mobileMenuTitle: 'Algorithms',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    closePanel: 'Close panel',
    viewCode: 'View code',
    languageLabel: 'Language',

    notFoundTitle: 'Page not found',
    notFoundDescription:
      "That URL didn't match any algorithm or page. Search below or jump to a popular visualization.",
    backToHome: 'Back to home',
    notFoundHint: 'No match · O(1) not found',
    notFoundSearchLabel: 'Search algorithms',
    notFoundSearchPlaceholder: 'Try bubble sort, dijkstra, binary search…',
    notFoundDidYouMean: 'Did you mean?',
    notFoundPopular: 'Popular visualizations',
    notFoundBrowseCategories: 'Browse by category',
    notFoundNoResults: 'No algorithms match that search.',
    notFoundViewAll: 'View all algorithms',

    queue: 'Queue',
    stack: 'Stack',
    empty: 'empty',
    distances: 'Distances',

    categories: {
      Concepts: 'Concepts',
      'Data Structures': 'Data Structures',
      Sorting: 'Sorting',
      Searching: 'Searching',
      Graphs: 'Graphs',
      'Dynamic Programming': 'Dynamic Programming',
      Backtracking: 'Backtracking',
      'Divide and Conquer': 'Divide and Conquer',
      Math: 'Math',
      Compression: 'Compression',
    },
  },

  de: {
    siteTitle: 'Algorithmen-Visualisierer — Sortieren, Graphen, DP & mehr',
    siteDescription:
      'Kostenloser interaktiver Algorithmen-Visualisierer. Lerne Sortieralgorithmen, Suche, Graphen, dynamische Programmierung und Datenstrukturen mit Schritt-für-Schritt-Animationen.',

    welcomeTitle: 'Algorithmen-Visualisierer',
    welcomeDescription:
      'Lerne Algorithmen durch schrittweise Visualisierungen — Sortieren, Graphen, dynamische Programmierung, Datenstrukturen und mehr. Wähle einen aus der Seitenleiste aus, um zu beginnen.',
    playPauseShortcut: 'Abspielen / Pause',
    stepShortcut: 'Schritt',

    searchPlaceholder: 'Algorithmen suchen...',
    algorithmsCount: '{count} Algorithmen',
    algorithmCountLabel: '{count} Algorithmen',
    expandSidebar: 'Seitenleiste ausklappen',
    collapseSidebar: 'Seitenleiste einklappen',

    tabCode: 'Code',
    tabAbout: 'Erklärung',
    selectAlgorithmCode: 'Wähle einen Algorithmus, um seinen Code zu sehen',
    expandCodePanel: 'Code-Panel ausklappen',
    collapseCodePanel: 'Code-Panel einklappen',
    variables: 'Variablen',
    codeLanguage: 'Programmiersprache',

    speed: 'Geschwindigkeit',
    skipToStart: 'Zum Anfang',
    stepBackward: 'Schritt zurück (←)',
    playPause: 'Abspielen/Pause (Leertaste)',
    stepForward: 'Schritt vorwärts (→)',
    skipToEnd: 'Zum Ende',
    step: 'Schritt {n}:',
    controlsLabel: 'Wiedergabesteuerung',
    progressStep: 'Schritt {current} von {total}',
    speedLevel: 'Geschwindigkeitsstufe {n} von 5',

    resizeSidebar: 'Seitenleiste anpassen',
    resizeCodePanel: 'Code-Panel anpassen',

    sidebarAriaLabel: 'Algorithmen-Kategorien',
    codePanelAriaLabel: 'Code- und Detail-Panel',
    visualizationLabel: 'Algorithmen-Visualisierung',
    zoomControls: 'Zoom-Steuerung',
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    resetZoom: 'Zoom zurücksetzen',
    mobileMenuTitle: 'Algorithmen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    closePanel: 'Panel schließen',
    viewCode: 'Code ansehen',
    languageLabel: 'Sprache',

    notFoundTitle: 'Seite nicht gefunden',
    notFoundDescription:
      'Diese URL passt zu keinem Algorithmus oder keiner Seite. Suche unten oder gehe zu einer beliebten Visualisierung.',
    backToHome: 'Zurück zur Startseite',
    notFoundHint: 'Keine Treffer · O(1) nicht gefunden',
    notFoundSearchLabel: 'Algorithmen suchen',
    notFoundSearchPlaceholder: 'Versuche Bubble Sort, Dijkstra, Binäre Suche…',
    notFoundDidYouMean: 'Meintest du?',
    notFoundPopular: 'Beliebte Visualisierungen',
    notFoundBrowseCategories: 'Nach Kategorie durchsuchen',
    notFoundNoResults: 'Keine Algorithmen passen zu dieser Suche.',
    notFoundViewAll: 'Alle Algorithmen ansehen',

    queue: 'Warteschlange',
    stack: 'Stapel',
    empty: 'leer',
    distances: 'Distanzen',

    categories: {
      Concepts: 'Konzepte',
      'Data Structures': 'Datenstrukturen',
      Sorting: 'Sortieren',
      Searching: 'Suchen',
      Graphs: 'Graphen',
      'Dynamic Programming': 'Dynamische Programmierung',
      Backtracking: 'Backtracking',
      'Divide and Conquer': 'Teile und herrsche',
      Math: 'Mathematik',
      Compression: 'Kompression',
    },
  },
}

export function t(locale: Locale, key: keyof Translations): string {
  return translations[locale][key] as string
}

export function getCategoryName(locale: Locale, categoryKey: string): string {
  return translations[locale].categories[categoryKey] || categoryKey
}
