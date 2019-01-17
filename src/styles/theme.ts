
export const color = {
  white: '#FFFFFF',
  black: '#000000',
  green: '#93FFA9'
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