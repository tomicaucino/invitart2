import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const reviews = [
    {
      img: "./images/couple.jpg",
    },
    {
      img: "./images/couple2.jpg",
    },
    {
      img: "./images/couple3.jpg",
    },
    {
      img: "./images/couple4.jpg",
    },
    {
      img: "./images/couple5.jpg",
    },
    {
      img: "./images/married.jpg",
    },
    {
      img: "./images/married4.jpg",
    },
  ];
  
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
   
  const ReviewCard = ({
    img,
  }: {
    img: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative cursor-pointer overflow-hidden"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className=""  width="200" height="100" alt="" src={img} />
        </div>
      </figure>
    );
  };

export const FotosSection = () => {


    return (
        <section className="bg-gray-200 py-8 w-screen">
        <div className="mx-auto px-4 w-full md:max-w-6xl">
          <h2 className="text-2xl mb-8 text-center tracking-wider">NOSOTROS..</h2>
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                  {firstRow.map((review) => (
                    <ReviewCard key={review.img} {...review} />
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                  {secondRow.map((review) => (
                    <ReviewCard key={review.img} {...review} />
                  ))}
                </Marquee>

            </div>
        </div>
      </section>
        
    )
}