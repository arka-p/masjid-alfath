import { FungsiMasjid } from "@/component/fungsiMasjid";
import { Header } from "@/component/header";
import { Card } from "@/component/card";
import { VisiMisi } from "@/component/visiMisi";
import { Footer } from "@/component/footer";

export default function Home() {
  return (
    <>
      <Header />
      <FungsiMasjid />
      <div className="grid grid-cols-2 gap-8 px-96 py-20">
        <Card
          image="/page/baitullah.webp"
          title="01. Baitullah"
          description="Masjid sebagai Baitullah, Menjadi Tempat kembalinya kaum muslimin kepada Allah, beribadah, menyembah dan menghambakan diri kepada Allah Subhanahu wa ta’ala"
        />

        <Card
          image="/page/baitulQuran​.webp"
          title="02. Baitul Quran"
          description="Masjid sebagai Baitul Quran, Menjadikan masjid sebagai pusat pembelajaran Al quran, mulai dari belajar membaca, menghafal, mentadabburi, mengamalkan, dan mendawahkan Al Quran"
        />

        <Card
          image="/page/baitulMal​.png"
          title="03. Baitul Mal"
          description="Masjid sebagai Baitul mal, Menjadikan masjid sebagai sarana berkumpulnya harta umat muslim melalui Zakat, Infaq, Sedekah, & Wakaf yang selanjutnya akan di distribusikan sesuai dengan ketenttuan syariat."
        />

        <Card
          image="/page/baitulMuamallah​.webp"
          title="04. Baitul Muamallah​"
          description="Masjid Sebagai Baitul muamalah, Menjadikan masjid sebagai pusat ekonomi umat, sehingga umat muslim bisa saling berinteraksi sosial untuk saling menebarkan manfaat dengan memberikan kontribusi terbaik untuk umat manusia."
        />
      
      </div>
      <VisiMisi />
      <Footer />
    </>
  );
}
