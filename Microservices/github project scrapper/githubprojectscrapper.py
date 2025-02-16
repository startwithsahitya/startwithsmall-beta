import requests

def fetch_top_github_repos(topic, count=5):
    url = f"https://api.github.com/search/repositories?q={topic}&sort=stars&order=desc"
    headers = {"Accept": "application/vnd.github.v3+json"}
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        repos = response.json().get("items", [])[:count]
        for idx, repo in enumerate(repos, 1):
            print(f"{idx}. {repo['name']} - {repo['html_url']}")
            print(f"   📜 Description: {repo['description'] if repo['description'] else 'No description'}")
            print(f"   ⭐ {repo['stargazers_count']} | 🍴 {repo['forks_count']} | 👤 {repo['owner']['login']}\n")
    else:
        print("Error fetching data:", response.json())

# Example usage:
topic = input("Enter a GitHub topic: ")
fetch_top_github_repos(topic)
