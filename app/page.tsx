import Link from "next/link"

import { siteConfig } from "@/config/site"
import { SocialButton } from "@/components/ui/SocialButton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function IndexPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 p-4 pt-0 text-center md:py-10">
      <Avatar className="m-auto h-[150px] w-[200px]">
        <AvatarImage src={siteConfig.image.link} />
        <AvatarFallback>{siteConfig.image.altText}</AvatarFallback>
      </Avatar>
      {siteConfig && siteConfig.name != "" && (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {siteConfig.name}
        </h4>
      )}
      {siteConfig && siteConfig.description != "" && (
        <p className="text-sm leading-7">{siteConfig.description}</p>
      )}

      <section className="flex w-full flex-col items-center justify-center gap-4 pb-4">
        {siteConfig.buttons
          .sort((button1, button2) => button1.id - button2.id)
          .map((button) => (
            <Link
              key={button.id}
              href={button.link}
              className="contents"
              target="_blank"
            >
              <SocialButton>
                <button.icon className="mr-2 h-4 w-4" /> {button.title}
              </SocialButton>
            </Link>
          ))}
      </section>

      <p className="text-sm leading-none">Pathfinder</p>
      <Link href={siteConfig.impressum} className="contents" target="_blank">
        <p className="text-sm text-muted-foreground">Legal</p>
      </Link>
    </section>
  )
}
