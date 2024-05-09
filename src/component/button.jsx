import Link from "next/link"

export const Button = ( {name, url}) => {
  return (
    <Link href={url}>
    <button 
    className="bg-orange-500 text-white hover:bg-orange-600 rounded-lg py-1 px-4">
    {name}
    </button>
    </Link>
  )
}
