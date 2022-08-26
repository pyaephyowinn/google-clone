const ResultCard = ({ data }) => {
  const styledLink =
    data.link.slice(0, 8) + data.link.slice("8").replaceAll("/", " ‣ ");
  return (
    <div className="mb-8">
      <p className="text-sm mb-1 max-w-[45ch] whitespace-nowrap overflow-hidden text-ellipsis text-gray-700 dark:text-gray-300">
        {styledLink}
      </p>
      <a
        href={data.link}
        className="text-xl text-blue-600 hover:underline dark:text-blue-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.title}
      </a>
      <p className="text-sm mt-1 max-w-[60ch] text-gray-600 dark:text-gray-400">
        {data.description}
      </p>
    </div>
  );
};
export default ResultCard;
