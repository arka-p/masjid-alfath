import Image from "next/image"
import Link from "next/link"

export const ImageLogo = () => {
  return (
    <Link href="/">
    <Image src="/logo.webp" width={130} height={0} />
    </Link>
  )
}
