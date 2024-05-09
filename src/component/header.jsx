import { ImageLogo } from "./imageLogo";
import { TextLink } from "./textLink";
import { Button } from "./button";

export const Header = () => {
  return (
    <div className="flex w-full flex justify-start bg-white py-5 px-96 shadow-md sticky top-0">

      <div className="w-1/4 self-center">
        <ImageLogo />
      </div>

      <div className="w-1/2 flex justify-center self-center gap-10">
        <TextLink url="/" name="Home" />
        <TextLink url="/event" name="Event" />
        <TextLink url="/blogpost" name="Blog Post" />
        <TextLink url="/kontak" name="Kontak" />
        <TextLink url="/baitulquran" name="Baitul Quran" />
      </div>

      <div className="w-1/4 flex justify-end self-center">
        <Button name="Ziswaf" url="/ziswaf" />
      </div>

    </div>
  );
};
