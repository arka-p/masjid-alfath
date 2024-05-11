const EventsMasjid = () => {
    const events = [
      {
        judul: "Fun Journey",
        deskripsiAwal: "Mabit (Malam Bina Iman & Taqwa) adalah kegiatan yang sudah tidak asing di telinga kita semuanya, Bermalam di Masjid Menjadi ciri kegiatan tersebut, Diisi dengan kegiatan edukatif yang mendekatkan diri kepada Allah Subhanahu wa ta’ala serta dihiasi acara HAVE FUN supaya kegiatan MABIT menjadi lebih menarik. Namun sayang kegiatan yang bermanfaat ini hanya bisa kita temukan di bulan-bulan tertentu saja seperti Ramadhan, Akhir tahun dan sebagainya",
        deskripsiTengah: "Kali ini MABIT bisa kita temukan di setiap bulan di pekan terakhir di MASJID AL-FATH dengan tema-tema yang unik, peserta dari berbagai kalangan seperti Mabit Anak-Anak Mabit Remaja dan Mabit Keluarga. Sebagai tempat HEALING KELUARGA Islami, Rekreasi rohani serta tempat untuk menambah wawasan dan menimba ilmu."
      }
    ];
  
    return (
      <div>
        {events.map((event, index) => (
          <div key={index}>
            <h2>{event.judul}</h2>
            <p>{event.deskripsiAwal}</p>
            <p>{event.deskripsiTengah}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default EventsMasjid;