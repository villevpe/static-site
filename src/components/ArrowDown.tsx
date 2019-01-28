import React from 'react'

interface Props {
    width: number
    height: number
    strokeWidth: string
    color: string
}

export const ArrowDown: React.SFC<Props> = ({ width, height, color, strokeWidth = 2 }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="4" x2="12" y2="20" />
        <polyline points="18 14 12 20 6 14" />
    </svg>
)