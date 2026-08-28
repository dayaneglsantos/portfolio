import type { SVGProps } from 'react'

type BrandIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string
}

export function GitHubIcon({ size = 24, ...props }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 .7C5.7.7.6 5.8.6 12.1c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.8.4-1.3.8-1.6-2.5-.3-5.2-1.3-5.2-5.6 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.1 1.2a10.8 10.8 0 0 1 5.7 0C17 4.8 18 5.1 18 5.1c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.3-5.2 5.6.4.4.8 1.1.8 2.1v3.2c0 .3.2.7.8.6a11.4 11.4 0 0 0 7.8-10.8C23.4 5.8 18.3.7 12 .7Z" />
    </svg>
  )
}

export function LinkedInIcon({ size = 24, ...props }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.5 2H3.5A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9.5h3V19ZM6.5 8.2A1.75 1.75 0 1 1 6.5 4.7a1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.6c0-1.1 0-2.5-1.6-2.5s-1.8 1.2-1.8 2.5V19h-3V9.5h2.9v1.3h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.6 2 3.6 4.7V19H19Z" />
    </svg>
  )
}
