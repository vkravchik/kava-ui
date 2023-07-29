export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--background-default': '#f4faff',
    '--background-secondary': '#a3b9cc',
    '--background-tertiary': '#5c7d99',
    '--background-light': '#ffffff',

    '--text-default': 'rgba(0, 0, 0, 0.87)',
    '--text-secondary': 'rgba(0, 0, 0, 0.6)',
    '--text-disabled': 'rgba(0, 0, 0, 0.38)',

    '--primary-default': '#2f56e2',
    '--primary-dark': 'rgb(32, 60, 158)',
    '--primary-light': 'rgb(88, 119, 231)',
    '--primary-contrast-text': '#fff',

    '--secondary-default': '#e22f56',
    '--secondary-dark': 'rgb(158, 32, 60)',
    '--secondary-light': 'rgb(231, 88, 119)',
    '--secondary-contrast-text': '#fff',

    '--error-default': '#f44336',
    '--error-dark': '#d32f2f',
    '--error-light': '#e57373',
    '--error-contrast-text': '#fff',

    '--warning-default': '#ffa726',
    '--warning-dark': '#f57c00',
    '--warning-light': '#ffb74d',
    '--warning-contrast-text': '#fff',

    '--info-default': '#0288d1',
    '--info-dark': '#01579b',
    '--info-light': '#03a9f4',
    '--info-contrast-text': '#fff',

    '--success-default': '#2e7d32',
    '--success-dark': '#1b5e20',
    '--success-light': '#4caf50',
    '--success-contrast-text': '#fff',

    '--divider': 'rgba(0, 0, 0, 0.12)'
  }
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--background-default': '#121212',
    '--background-secondary': '#41474d',
    '--background-tertiary': '#797c80',
    '--background-light': '#41474d',

    '--text-default': '#fff',
    '--text-secondary': 'rgba(255, 255, 255, 0.7)',
    '--text-disabled': 'rgba(255, 255, 255, 0.5)',

    '--primary-default': '#2f56e2',
    '--primary-dark': 'rgb(32, 60, 158)',
    '--primary-light': 'rgb(88, 119, 231)',
    '--primary-contrast-text': '#fff',

    '--secondary-default': '#e22f56',
    '--secondary-dark': 'rgb(158, 32, 60)',
    '--secondary-light': 'rgb(231, 88, 119)',
    '--secondary-contrast-text': '#fff',

    '--error-default': '#d32f2f',
    '--error-dark': '#c62828',
    '--error-light': '#ef5350',
    '--error-contrast-text': 'rgba(0, 0, 0, 0.87)',

    '--warning-default': '#ed6c02',
    '--warning-dark': '#e65100',
    '--warning-light': '#ff9800',
    '--warning-contrast-text': 'rgba(0, 0, 0, 0.87)',

    '--info-default': '#29b6f6',
    '--info-dark': '#0288d1',
    '--info-light': '#4fc3f7',
    '--info-contrast-text': 'rgba(0, 0, 0, 0.87)',

    '--success-default': '#66bb6a',
    '--success-dark': '#388e3c',
    '--success-light': '#81c784',
    '--success-contrast-text': 'rgba(0, 0, 0, 0.87)',

    '--divider': 'rgba(255, 255, 255, 0.12)'
  }
};
