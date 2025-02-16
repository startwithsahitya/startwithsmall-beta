from duckduckgo_search import DDGS
import googleapiclient.discovery

# Your YouTube API Key
YOUTUBE_API_KEY = "AIzaSyApqgUCrne92r0T4JbqDl_I6skzzMsxCQo"

def search_duckduckgo(query, num_results=3):
    with DDGS() as ddgs:
        results = list(ddgs.text(query, max_results=num_results))
    
    search_results = []
    for result in results:
        search_results.append({
            "title": result["title"],
            "link": result["href"]
        })
    
    return search_results

def search_youtube(query, num_results=3):
    youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=YOUTUBE_API_KEY)

    request = youtube.search().list(
        q=query,
        part="snippet",
        type="video",
        maxResults=num_results
    )

    response = request.execute()
    video_results = []

    for item in response["items"]:
        title = item["snippet"]["title"]
        video_id = item["id"]["videoId"]
        video_link = f"https://www.youtube.com/watch?v={video_id}"
        

        video_results.append({
            "title": title,
            "video_id": video_id,
            "video_link": video_link,
           
        })
    
    return video_results

def search_coursera(query, num_results=2):
    search_query = f"{query} site:coursera.org"
    
    with DDGS() as ddgs:
        results = list(ddgs.text(search_query, max_results=num_results))

    course_results = []
    for result in results:
        course_results.append({
            "title": result["title"],
            "link": result["href"]
        })

    return course_results

def generate_html(query, google_results, youtube_results, coursera_results):
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Search Results for {query}</title>
        <link rel="stylesheet" href="style.css">  <!-- Link to external CSS -->
    </head>
    <body>
        <div class="container">
            <h1>Search Results for "{query}"</h1>

            <!-- Google Search Results -->
            <div class="section">
                <h2>🔍 Top Google Search Results</h2>
    """
    
    if google_results:
        for result in google_results:
            html_content += f'<div class="search-item"><a href="{result["link"]}" target="_blank">{result["title"]}</a></div>'
    else:
        html_content += "<p>No results found.</p>"

    html_content += """
            </div>

            <!-- YouTube Videos -->
            <div class="section">
                <h2>🎥 Top YouTube Videos</h2>
                <div class="video-container">
    """
    
    if youtube_results:
        for video in youtube_results:
            html_content += f"""
            <div class="video-item">
                <a href="{video['video_link']}" target="_blank">
                </a>
                <p>{video['title']}</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/{video['video_id']}?controls=1" frameborder="0" allowfullscreen></iframe>
            </div>
            """
    else:
        html_content += "<p>No videos found.</p>"

    html_content += """
                </div>
            </div>

            <!-- Coursera Courses -->
            <div class="section">
                <h2>📚 Top Coursera Courses</h2>
    """
    
    if coursera_results:
        for course in coursera_results:
            html_content += f'<div class="search-item"><a href="{course["link"]}" target="_blank">{course["title"]}</a></div>'
    else:
        html_content += "<p>No courses found.</p>"

    html_content += """
            </div>
        </div>
    </body>
    </html>
    """

    with open("search_results.html", "w", encoding="utf-8") as file:
        file.write(html_content)

    print("\n✅ HTML file saved! Open 'search_results.html' in a browser.")

def main():
    query = input("Enter your search query: ").strip()

    google_results = search_duckduckgo(query)
    youtube_results = search_youtube(query)
    coursera_results = search_coursera(query)

    generate_html(query, google_results, youtube_results, coursera_results)

if __name__ == "__main__":
    main()
