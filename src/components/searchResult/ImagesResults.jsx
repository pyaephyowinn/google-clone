const ImagesResults = ({ data }) => {

  return (
    <div className="lg:px-4 col-span-12 custom-container-1">
      {data.image_results.map((result, index) => (
        <div className="w-fit" key={index}>
          <img
            className="h-32 md:h-44 pb-2 hover:shadow"
            src={result.image.src}
            alt={result.link.title}
            loading="lazy"
          />
          <a
            className="hover:underline"
            href={result.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm leading-3 block md:mt-2">{result.link.title.split("   ")[0]}</span>
            <span className="text-xs leading-3 text-gray-600 dark:text-gray-400">{result.link.title.split("   ")[1]}</span>
          </a>
        </div>
      ))}
    </div>
  );
};
export default ImagesResults;
