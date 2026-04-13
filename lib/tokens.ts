export const brand = {
  indigo:          '#3D5A80',
  indigoLight:     '#5A7BA8',
  indigoDark:      '#2E4563',
  terracotta:      '#C4613A',
  terracottaLight: '#D4784F',
  terracottaDark:  '#9A4C2D',
  marigold:        '#D4943D',
  parchment:       '#FBF7F0',
  parchmentWarm:   '#FDF8F2',
  parchmentDark:   '#EDE8DF',
  cream:           '#F5F0E6',
  creamDark:       '#DDD6CA',
  creamMuted:      '#C4B9A8',
  ink:             '#2D2A26',
  pencil:          '#9B9088',
  success:         '#5A7353',
  successDark:     '#3F5239',
} as const

export type BrandColor = keyof typeof brand
