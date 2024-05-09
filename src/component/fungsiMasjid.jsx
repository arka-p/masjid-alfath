import Image from "next/image";

export const FungsiMasjid = () => {
  return (
    <div>
      <div className="flex w-full px-96 py-20 gap-10  bg-neutral-50">
        <div className="w-1/2">
          <Image src="/page/fotomasjid.webp" width={1000} height={0} />
        </div>
        <div className="w-1/2 leading-normal">
          <div className="text-4xl font-bold pb-4">4 Fungsi Masjid</div>
          <div className="text-justify py-1">
            <span className="italic">Allah Subhanahu Wa Ta’ala Berfirman </span>
            “Sesungguhnya orang-orang yang selalu membaca Kitab Allah
            (Al-Qur’an) dan melaksanakan sholat dan menginfakkan sebagian rezeki
            yang Kami anugerahkan kepadanya dengan diam-diam dan
            terang-terangan, mereka itu mengharapkan perdagangan yang tidak akan
            rugi” <span className="italic">(QS. Fatir 35: Ayat 29)</span>
          </div>
          <div className="py-2">
            Masjid Al-Fath Memulai Membangun peradaban dari masjid dengan menjadikan masjid
            sebagai:
          </div>
          <div className="flex gap-8 text-3xl">
            <div>
              <li>Baitullah</li>
              <li>Baitul Quran</li>
            </div>
            <div>
              <li>Baitul Mal</li>
              <li>Baitul Muamallah</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
