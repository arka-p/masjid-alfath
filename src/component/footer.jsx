import { SocialMedia } from "./socmed"

export const Footer = () => {
  return (
    <div className="w-full bg-neutral-700 text-white py-8 px-96 flex justify-between text-sm">
    <div>© Copyright 2023 | Media Masjid Al-Fath | Prasetya</div>
        <div>
          <SocialMedia />
        </div>
    </div> 
  )
}
