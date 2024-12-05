## This script gets the repositories of a GitHub user and saves them in a JSON file.
#  First experiment for automate the process of updating the projects section of my portfolio.

import requests             # Import the requests library to make HTTP requests
import json                 # Import the json library to parse JSON responses
from github import Github   # Import the Github API


API_URL = 'https://api.github.com'

def get_user_repos(username):
    g = Github()
    user = g.get_user(username)
    repos = user.get_repos()
    return repos

    ## With requests module:
    # url = API_URL + '/users/' + username + '/repos'
    # response = requests.get(url).json()
    # return response





if __name__ == '__main__':
    username = 'MatteoCalvanico'
    filter = ['MatteoCalvanico/MatteoCalvanico', 'MatteoCalvanico/CV'] # Repositories to exclude

    repos = get_user_repos(username)
    
    print("Saving info in repo.json...")
    repo_list = []
    for repo in repos:
        if not repo.archived and repo.full_name not in filter: # Skip archived repositories and GitHub config repo
            language = repo.get_languages().keys() # Get all the languages used in the repository
            repo_info = {
                "full_name": repo.full_name,
                "description": repo.description,
                "language": language,
                "html_url": repo.html_url,
                "homepage": repo.homepage
            }
            repo_list.append(repo_info)
    
    with open('output/repo.json', 'w') as f:
        json.dump(repo_list, f, indent=4) # Save the repositories in a JSON
    print("Done!")
    print("-"*100)
    print()
    
    print('Printing information about the repositories...')
    for repo in repos:
        if not repo.archived and repo.full_name not in filter: # Skip archived repositories and GitHub config repo
            print("Full name: " + repo.full_name)
            if repo.description:
                print("Description: " + repo.description)
            print("Language(s): " + ', '.join(repo.get_languages().keys()))
            print()
            print("URLs: ")
            print("Repo: " + repo.html_url)
            if repo.homepage:
                print("Other: " + repo.homepage)
            print("="*100)
            print()
            print()