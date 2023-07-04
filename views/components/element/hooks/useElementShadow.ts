import { useMemo } from 'react'

interface PPTElementShadow {
  h: number
  v: number
  blur: number
  color: string
}

export default function useShadowStyle(shadow: PPTElementShadow | undefined) {
  const shadowStyle = useMemo(() => {
    if (shadow) {
      const { h, v, blur, color } = shadow
      return `${h}px ${v}px ${blur}px ${color}`
    }
    return ''
  }, [shadow])

  return {
    shadowStyle,
  }
}
