import Image from "next/image";
import styles from "@/app/ui/Home.module.css";

export function InformationSection() {
  return (
    <div>
      <h2 className="sm:text-left md:text-center text-3xl p-10">
        <strong className="text-[#ff894c]">GLOBETROTTERGRAM</strong> is your
        ultimate travel journaling companion, allowing you to capture and share
        your adventures anytime, anywhere.
      </h2>
      <div className="flex flex-wrap p-1">
        <div>
          <h2 className="sm:text-left md:text-center text-2xl">
            Digitalise your travels
          </h2>
          <p
            className={`${styles.mainDescription} sm:text-left md:text-center max-w-2xl`}
          >
            <strong className="text-[#ff894c]">GLOBETROTTERGRAM</strong> is your
            online travel companion for when you want to digitalise your travels
            - on the go and during downtime.
          </p>
          <div className="flex sm:justify-start md:justify-center">
            <Image
              alt="digitalise your journal"
              src={"/woman-journal.jpg"}
              width={350}
              height={350}
              className="mt-2.5 rounded-2xl"
            />
          </div>
        </div>
        <div className="align-center">
          <h2 className="sm:text-left md:text-center text-2xl">
            Write everywhere
          </h2>
          <p
            className={`${styles.mainDescription} sm:text-left md:text-center max-w-xl`}
          >
            We&apos;ve taken the liberty of making journaling easier. No need
            for pen and paper - with a few clicks of your phone you have your
            journal at hand.
          </p>
          <div className="flex sm:justify-start md:justify-center">
            <Image
              alt="digitalise your journal"
              src={"/hiking-journal.jpg"}
              width={350}
              height={350}
              className="mt-2.5 rounded-xl"
            />
          </div>
        </div>
        <div className="align-center">
          <h2 className="sm:text-left md:text-center text-2xl">
            Better with friends
          </h2>
          <p
            className={`${styles.mainDescription} sm:text-left md:text-center max-w-2xl`}
          >
            Share your adventures with your friends and family! And follow along
            on their travels.
          </p>
          <div className="flex sm:justify-start md:justify-center">
            <Image
              alt="digitalise your journal"
              src={"/friends-journal.jpg"}
              width={350}
              height={350}
              className="mt-9 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
