## Python script to scrape the repositories from my GitHub account lists

import requests # Import the requests library to make HTTP requests
from bs4 import BeautifulSoup # Import the BeautifulSoup library to parse HTML

class ProjectScraper:

    def __init__(self, URL):
        self.URL = URL
        self.page = requests.get(URL).text

    # Return a list containing the names of the repositories in the GitHub list
    def get_repo_names(self):
        soup = BeautifulSoup(self.page, 'html.parser')

        # In the GitHub list, the repositories name are links - In my case, the links are in the format '/MatteoCalvanico/repo-name'
        repo_links = soup.find_all('a', href=True)
        repo_names = [link['href'][1:] for link in repo_links if link['href'].startswith('/MatteoCalvanico/')]
        repo_names = list(set(name for name in repo_names if not name.endswith('/stargazers'))) # Remove duplicates and the '/stargazers' link
        
        return repo_names



if __name__ == '__main__':
    URL = 'https://github.com/stars/MatteoCalvanico/lists/uni-projects'
    scraper = ProjectScraper(URL)
    repo_names = scraper.get_repo_names()
    print(repo_names)