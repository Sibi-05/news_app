const api_key = process.env.REACT_APP_NEWS_API_KEY;
export const fetchNews = async (category) => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api_key}`
    );
    const data = await res.json();
    console.log(api_key);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching news sources:", error);
    return [];
  }
};
