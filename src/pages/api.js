const api_key = "884527771134448e91f839f12442934e";
export const fetchNews = async (category) => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api_key}`
    );
    const data = await res.json();
    console.log(api_key);
    return data;
  } catch (error) {
    console.error("Error fetching news sources:", error);
    return [];
  }
};
