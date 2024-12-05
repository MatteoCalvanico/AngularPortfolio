## This script gets the repositories of a GitHub user and saves them in a JSON file.
#  First experiment for automate the process of updating the projects section of my portfolio.

import os
import requests             # Import the requests library to make HTTP requests
import json                 # Import the json library to parse JSON responses
from github import Github   # Import the Github API

from ProjectScraper import ProjectScraper # Import the ProjectScraper class


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

    # Initialize the ProjectScraper objects and get the repositories names
    psUni = ProjectScraper('https://github.com/stars/MatteoCalvanico/lists/uni-projects')
    psPersonal = ProjectScraper('https://github.com/stars/MatteoCalvanico/lists/personal-projects')
    repo_names = psUni.get_repo_names()
    repo_names += psPersonal.get_repo_names()

    print("Repositories names: ")
    for name in repo_names:
        print("- ", name)
    print("-"*100)
    print()


    # Get the repositories of the user
    username = 'MatteoCalvanico'
    print("Searching repos' info...")
    try:
        repos = get_user_repos(username)
    except Exception as e:
        print(f"An error occurred: {e}")
        repos = []
    print("Done!")
    print("-"*100)
    print()


    # Create the output directory if it doesn't exist
    os.makedirs('output', exist_ok=True)
    
    # Save the repositories in a JSON file
    print("Saving repos' info in output/repo.json...")
    repo_list = []
    for repo in repos:
        if repo.full_name in repo_names: # Take only what I want
            language = list(repo.get_languages().keys()) # Get all the languages used in the repository
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
    print()
    print()
    

    # Print the information about the repositories
    print('Printing information about the repositories...')
    for repo in repos:
        if repo.full_name in repo_names: # Take only what I want
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