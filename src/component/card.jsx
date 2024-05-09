import Image from "next/image"

export const Card = ( {image, title, description} ) => {
  return (
    <div className="w-full bg-white shadow-md">
        <div>
          <Image src={image} width={1000} height={0} />
        </div>
        <div className="pb-12 pt-6 px-6 border">
        <div className="text-center font-medium text-2xl">{title}</div>
        <div className="pt-2 text-center leading-normal">{description}</div>
        </div>
    </div>
  )
}
