import type { PPTElementOutline } from '@/types/slides'

export function useElementOutline(outline: PPTElementOutline | undefined) {
  const outlineWidth = outline?.width ?? 0
  const outlineStyle = outline?.style || 'solid'
  const outlineColor = outline?.color || '#d14424'

  return {
    outlineWidth,
    outlineStyle,
    outlineColor,
  }
}
