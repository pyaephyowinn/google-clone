const Content = () => {
  const data = {
    link: "https://en.wikipedia.org/wiki/Elon_Musk",
    title: "Elon Musk - Wikipedia",
    description:
      "Signature. Elon Reeve Musk FRS (/'i:lɒn/; born June 28, 1971) is an engineer, industrial designer, technology entrepreneur and philanthropist.",
    answers: [
      "Is Myanmar a safe country?",
      "Is Myanmar safe for tourism?",
      "Why did Myanmar change its name?",
      "Is Myanmar Indian or Chinese?",
    ],
  };

  const link2 =
    data.link.slice(0, 8) + data.link.slice("8").replaceAll("/", " ‣ ");

  return (
    <main className="w-full grid grid-cols-12">
      <div className="col-span-12 md:col-start-3 md:col-span-10 lg:col-start-3 lg:col-span-8 flex justify-between">
        <div>
          <p className="text-sm mb-1">{link2}</p>
          <a href={data.link} className="text-xl text-blue-600 hover:underline">
            {data.title}
          </a>
          <p className="mt-1 max-w-[60ch]">{data.description}</p>
        </div>
        <div className="border-2 rounded-lg p-4 hidden sm:block">
          <span className="block my-2 text-xl font-medium">People also search</span>
          {data.answers.map((ans, index) => (
            <p key={index} className="py-2 border-t-2 hover:cursor-pointer">{ans}</p>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Content;
