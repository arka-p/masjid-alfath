import Link from "next/link"

export const TextLink = ( {url, name} ) => {
  return (
    <Link href={url}>
    <div className="text-neutral-700 hover:text-orange-500 text-base">{name}</div>
    </Link>
  )
}
