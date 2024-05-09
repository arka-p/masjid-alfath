import Image from "next/image";

export const VisiMisi = () => {
  return (
    <div>
      <div className="flex w-full px-96 py-24 gap-10  bg-neutral-50">
        <div className="w-1/2 leading-normal">
          <div className="text-4xl font-bold pb-4">Visi & Misi Masjid Al-Fath</div>
          <div className="w-full">
             <div className="text-justify py-1 text-3xl">Visi :</div>
          </div>
          <div className="py-2">
            Masjid Al-Fath sebagai pusat dakwah Al-Quran dan Pemberdayaan Ummat
          </div>
          <div className="text-justify py-1 text-3xl">Misi :</div>

          <div className="flex gap-8 w-full">
            <div>
              <li>Sebagai pusat belajar Al-Quran</li>
              <li>Sebagai pusat dakwah & mencetak kader dakwah</li>
              <li>Sebagai pusat pemberdayaan ummat</li>
              <li>Menjadikan Masjid Makmur dengan berbagai kegiatan</li>
              <li>Sebagai tempat rekreasi rohani jamaah</li>
              <li>
                Sebagai pusat kegiatan masyarakat dan tempat rujukan persoalan
                masyarakat
              </li>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image src="/page/visiMisi.webp" width={1000} height={0} />
        </div>
      </div>
    </div>
  );
};
