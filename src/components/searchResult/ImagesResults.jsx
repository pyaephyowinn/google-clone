const ImagesResults = ({ data }) => {
  console.log(data.image_results);
  
  return (
    <div className="lg:px-4 col-span-12 custom-container-1">
      {data.image_results.map((result, index) => (
        <div className="w-fit" key={index}>
          <img
            className="h-48"
            src={result.image.src}
            alt={result.link.title}
          />
          <a className="hover:underline" href={result.link.href}>
            Lorem ipsum dolor sit amet.
          </a>
          {/* <a className="spacing" href={result.link.href}><div><p>a</p>b</div></a> */}
        </div>
      ))}
    </div>
  );
};
export default ImagesResults;
