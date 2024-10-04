import { PropsWithChildren } from "react"

type AuthPageHeaderProps = PropsWithChildren<{
  subtitle: string;
  mainTitle: string;
}>;

export default function AuthPageHeader({subtitle, mainTitle, children}: AuthPageHeaderProps) {
  return (
    <div className="mb-12">
      <p className="mb-1">{subtitle}</p>
      <h2 className="text-3xl">{mainTitle}</h2>
      {children}
    </div>
  )
}