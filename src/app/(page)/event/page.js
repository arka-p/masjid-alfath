import { EventData } from "@/component/eventData";
import Image from "next/image";
import { Button } from "@/component/button";

const EventsMasjid = () => {
  const events = EventData

  return (
    <div className="py-20 px-96 space-y-24 ">
      {events
        .slice(0)
        .reverse()
        .map((event, index) => (
          <div key={index}>
            <div className="text-4xl font-bold pb-4">{event.judul}</div>
            <div className="flex gap-10">
              <Image src={event.image} width={350} height={350} quality={80} />
              <div className="leading-normal space-y-4">
                <div className="text-2xl font-bold">
                  Tanggal: {event.tanggal}
                </div>
                <div className="text-justify">{event.deskripsiAwal}</div>
                <div className="text-justify">{event.deskripsiTengah}</div>
                <div>
                  <Button name={event.buttonName} url={event.registrasi} />
                </div>
              </div>
            </div>
            <div class="pb-14 border-b-2 border-neutral-300"></div>
          </div>
        ))}
    </div>
  );
};

export default EventsMasjid;
