from duckduckgo_search import DDGS
import googleapiclient.discovery

YOUTUBE_API_KEY = "AIzaSyB34mpjG1koYAfguASh7VvkmUsz1niP_kk"

def search_duckduckgo(query, num_results=4):
    with DDGS() as ddgs:
        results = list(ddgs.text(query, max_results=num_results))

    print("\n🔹 Top Search Results from Google :\n")
    if not results:
        print("No results found.")
        return

    for i, result in enumerate(results, 1):
        print(f"{i}. {result['title']}")
        print(f"   {result['href']}\n")

def search_youtube(query, num_results=3):
    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=YOUTUBE_API_KEY)

    request = youtube.search().list(
        q=query,
        part="snippet",
        type="video",
        maxResults=num_results
    )

    response = request.execute()

    print("\n🔹 Top YouTube Videos:\n")
    for i, item in enumerate(response["items"], 1):
        title = item["snippet"]["title"]
        video_id = item["id"]["videoId"]
        link = f"https://www.youtube.com/watch?v={video_id}"
        print(f"{i}. {title}")
        print(f"   {link}\n")

def search_coursera(query, num_results=2):
    search_query = f"{query} site:coursera.org"
    
    with DDGS() as ddgs:
        results = list(ddgs.text(search_query, max_results=num_results))

    print("\n🔹 Top Coursera Courses:\n")
    if not results:
        print("No courses found.")
        print(f"🔹 Try searching manually: https://www.coursera.org/search?query={query.replace(' ', '%20')}\n")
        return

    for i, result in enumerate(results, 1):
        print(f"{i}. {result['title']}")
        print(f"   {result['href']}\n")

def main():
    query = input("Enter your search query: ").strip()

    search_duckduckgo(query)
    search_youtube(query)
    search_coursera(query)

if __name__ == "__main__":
    main()





