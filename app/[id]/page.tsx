import { ReactElement, ReactNode } from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { LucideIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { SocialButton } from "@/components/ui/SocialButton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type socialButton = {
  id: number
  link: string
  title: string
  icon: LucideIcon
}
type Image = {
  link: string
  altText: string
}

type employeeData = {
  name: string
  image: Image
  description?: string
  buttons: socialButton[]
  impressum: string
}

export default function EmployeePage({ params }: { params: { id: string } }) {
  console.log(params.id)
  const employeeData: employeeData | undefined = siteConfig.employees.find(
    (employee) => employee.id === params.id
  )
  if (!employeeData) redirect("/")
  if (employeeData)
    return (
      <section className="flex flex-col items-center justify-center gap-2 p-4 pt-0 text-center md:py-10">
        <Avatar className="m-auto h-[150px] w-[200px]">
          <AvatarImage src={employeeData.image.link} />
          <AvatarFallback>{employeeData.image.altText}</AvatarFallback>
        </Avatar>
        {employeeData && employeeData.name != "" && (
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {employeeData.name}
          </h4>
        )}
        {employeeData.description && employeeData.description !== "" && (
          <p className="text-sm leading-7 mb-4">{employeeData.description}</p>
        )}

        <section className="flex w-full flex-col items-center justify-center gap-4 pb-4">
          {employeeData.buttons
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
        <Link
          href={employeeData.impressum}
          className="contents"
          target="_blank"
        >
          <p className="text-sm text-muted-foreground">Legal</p>
        </Link>
      </section>
    )
}
