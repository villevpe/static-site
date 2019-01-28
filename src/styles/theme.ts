
export const color = {
  white: '#FFFFFF',
  black: '#000000',
  green: '#93FFA9',
  footer: '#F3F3F3',
  navbar: '#f3f3f3',
  background: '#F1F1F1',
  section: '#F1F1F1',
  text: '#2B2B2B',
  alternateSection: '#a1ce57',
  alternateText: '#000000',
}

export const font = {
  header: 'Arial',
  body: 'Arial'
}

export default interface ThemeInterface {
  color: {
    white: string,
    green: string,
    black: string,
    footer: string,
    navbar: string,
    background: string,
    text: string,
    alternateText: string
    section: string
    alternateSection: string
  }
  font: {
    header: string,
    body: string
  },
  icon: {
    size: {
      S: { width: number, height: number },
      M: { width: number, height: number },
      L: { width: number, height: number },
    }
  }
}

export const theme: ThemeInterface = {
  color,
  font,
  icon: {
    size: {
      S: { width: 24, height: 24 },
      M: { width: 32, height: 32 },
      L: { width: 64, height: 64 },
    }
  }
}