import React from 'react';

type IconName =
  | 'home' | 'chart' | 'card' | 'brain' | 'book' | 'trending'
  | 'house' | 'food' | 'plane' | 'briefcase' | 'heart' | 'leaf' | 'computer' | 'hospital'
  | 'family' | 'palette' | 'bus' | 'cloud' | 'sun' | 'moon' | 'shirt' | 'dog' | 'bookOpen'
  | 'dumbbell' | 'clock' | 'phone' | 'graduation' | 'money' | 'music'
  | 'search' | 'speaker' | 'check' | 'x' | 'chevronDown' | 'chevronLeft' | 'chevronRight'
  | 'refresh' | 'trophy' | 'flame' | 'plus' | 'filter' | 'star' | 'bookmark'
  | 'sprout' | 'tree' | 'treeLarge' | 'target' | 'lightning' | 'eye'
  | 'mic' | 'play' | 'next' | 'prev' | 'close' | 'menu'
  | 'folder' | 'layers' | 'globe' | 'award' | 'users' | 'settings';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const icons: Record<IconName, React.ReactNode> = {
  home: <><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></>,
  chart: <><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></>,
  card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></>,
  brain: <><path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 011.32-4.24A2.5 2.5 0 019.5 2zM14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-1.32-4.24A2.5 2.5 0 0014.5 2z" /></>,
  book: <><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></>,
  trending: <><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></>,
  house: <><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></>,
  food: <><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></>,
  plane: <><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></>,
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></>,
  heart: <><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></>,
  leaf: <><path d="M6 19c0-7 5-13 13-13 0 8-6 13-13 13zM6 19L19 6" /></>,
  computer: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  hospital: <><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h2v2H9zM13 9h2v2h-2zM9 13h2v2H9zM13 13h2v2h-2z" /></>,
  family: <><circle cx="9" cy="7" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M17 13.5a3 3 0 013 3V21" /></>,
  palette: <><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /><circle cx="7.5" cy="10.5" r="1" /><circle cx="10.5" cy="7.5" r="1" /><circle cx="14.5" cy="7.5" r="1" /><circle cx="17" cy="10.5" r="1" /></>,
  bus: <><rect x="4" y="3" width="16" height="16" rx="2" /><path d="M4 11h16M8 19v2M16 19v2M7.5 15h.01M16.5 15h.01" /></>,
  cloud: <><path d="M7 18a5 5 0 010-10 7 7 0 0113.6-2A4.5 4.5 0 0121 14.5 4.5 4.5 0 0116.5 19H7z" /></>,
  sun: <><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></>,
  moon: <><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></>,
  shirt: <><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" /></>,
  dog: <><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.473 2.66-5 5.5-.264 1.457.17 3.248 1.5 4.5C4.834 14.918 7 16 7 18v3h4v-5c0-1.1-.9-2-2-2H7.5M14 5.172C14 3.782 15.577 2.679 17.5 3c2.823.47 4.473 2.66 5 5.5.264 1.457-.17 3.248-1.5 4.5C19.166 14.918 17 16 17 18v3h-4v-5c0-1.1.9-2 2-2h1.5" /></>,
  bookOpen: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>,
  dumbbell: <><path d="M6.5 6.5l11 11M21 21l-1-1M3 3l1 1M18 22l4-4M2 6l4-4M3 10l7-7M14 21l7-7" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  phone: <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></>,
  graduation: <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
  money: <><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></>,
  music: <><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></>,
  search: <><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></>,
  speaker: <><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" /></>,
  check: <><path d="M20 6L9 17l-5-5" /></>,
  x: <><path d="M18 6L6 18M6 6l12 12" /></>,
  chevronDown: <><path d="M6 9l6 6 6-6" /></>,
  chevronLeft: <><path d="M15 18l-6-6 6-6" /></>,
  chevronRight: <><path d="M9 18l6-6-6-6" /></>,
  refresh: <><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></>,
  trophy: <><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM17 4h3v3a3 3 0 01-3 3M7 4H4v3a3 3 0 003 3" /></>,
  flame: <><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  filter: <><path d="M3 4h18l-7 8v6l-4 2v-8z" /></>,
  star: <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></>,
  bookmark: <><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></>,
  sprout: <><path d="M12 22V12M7 12a5 5 0 015-5 5 5 0 015 5M7 12c-2 0-4-1-4-4 0-2 2-4 4-4M17 12c2 0 4-1 4-4 0-2-2-4-4-4" /></>,
  tree: <><path d="M12 22V8M7 8l5-6 5 6M5 14l7-6 7 6M4 20h16" /></>,
  treeLarge: <><path d="M12 22V12M6 12l6-8 6 8M4 18l8-6 8 6" /></>,
  target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
  lightning: <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></>,
  eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
  mic: <><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" /></>,
  play: <><path d="M5 3l14 9-14 9V3z" /></>,
  next: <><path d="M5 4l10 8-10 8V4zM19 5v14" /></>,
  prev: <><path d="M19 20L9 12l10-8v16zM5 19V5" /></>,
  close: <><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></>,
  menu: <><path d="M3 12h18M3 6h18M3 18h18" /></>,
  folder: <><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></>,
  layers: <><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>,
  award: <><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" /></>,
  users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" /></>,
};

export default function Icon({ name, size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name]}
    </svg>
  );
}
