import Image from "next/image";
import Link from "next/link";

export const SocialMedia = () => {
  return (
    <div className="flex gap-1">
      <Link href="https://web.facebook.com/MasjidAlFathOfficial">
        <Image src="/social/facebook.png" height={23} width={23} />
      </Link>
      <Link href="https://instagram.com/masjidalfathofficial">
        <Image src="/social/instagram.png" height={23} width={23} />
      </Link>
      <Link href="https://t.me/masjidalfathofficial">
        <Image src="/social/telegram.png" height={23} width={23} />
      </Link>
      <Link href="https://www.youtube.com/c/MasjidAlFathOfficial/">
        <Image src="/social/youtube.png" height={23} width={23} />
      </Link>
      <div className="text-white">@masjidalfathofficial</div>
    </div>
  );
};
