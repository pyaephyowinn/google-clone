const RapidAPI_URL = "https://google-search3.p.rapidapi.com/api/v1/";

export const fetchResults = async (query, type, safe, lang) => {
  // let url = RapidAPI_URL + type + "/q=" + query + "&num=100" + "&lr=" + lang;
  let url = `${RapidAPI_URL}${type}/q=${query}&num=100&lr=${lang}&hl=$en`

  if (safe === "active") {
    url += "&safe=active";
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Key": "ac15cb696bmsh2020639ff50a834p1d299fjsn5d6cd994d1dd",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "cannot get fetch search reults");
  }

  return data;
};
