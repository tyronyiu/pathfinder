import { ReactNode } from "react"

import { Button } from "./button"

type SocialButtonProps = {
  children: ReactNode
}
export function SocialButton({ children }: SocialButtonProps) {
  return (
    <Button
      variant="outline"
      className="flex h-14 w-10/12 justify-start border-[#86704d] hover:bg-[#86704d] hover:text-white md:w-2/4 md:justify-center"
    >
      {children}
    </Button>
  )
}
