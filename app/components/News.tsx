import Image from "next/image";
import React from "react";
const News = ({
  uuid,
  title,
  description,
  snippet,
  url,
  source,
  image_url,
  published_at,
}: any) => {
  return (
    <div className="border-2 w-96 shadow-lg rounded-xl relative p-4 my-2">
      <div key={uuid}>
        <div className="font-extrabold text-2xl line-clamp-2 ">{title}</div>
        <div className="line-clamp-3">{description}</div>
        <div className="italic text-right font-bold text-md bg-black w-fit text-white mr-0 ml-auto my-2">
          {"-"}
          {source}
        </div>

        {/* <div>{snippet}</div> */}
        <div>{}</div>
        <div className=" overflow-hidden h-[200px] box-content rounded-lg">
          {image_url ? (
            <Image
              width={400}
              height={300}
              src={image_url}
              alt={title}
              className="rounded-lg"
              priority={false}
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              No Image
            </div>
          )}
        </div>
        <div className="font-semibold text-xs text-zinc-500 italic text-right">
          {"Published at " +
            new Date(published_at).toLocaleString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "2-digit",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
        </div>
        <div className="m-auto w-fit my-4">
          <a
            className="bg-white text-black border-2 border-black font-semibold p-2 rounded-md hover:bg-black hover:text-white "
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
