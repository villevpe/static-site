
export const color = {
  white: '#FFFFFF',
  black: '#000000',
  green: '#93FFA9',
  footer: '#F3F3F3',
  navbar: '#f3f3f3'
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
    navbar: string
  }
  font: {
    header: string,
    body: string
  }
}

export const theme: ThemeInterface = {
  color,
  font
}