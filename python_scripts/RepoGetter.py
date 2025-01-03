## This script gets the repositories of a GitHub user and saves them in a JSON file.
#  First experiment for automate the process of updating the projects section of my portfolio.

import base64
import os
import re
from bs4 import BeautifulSoup
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

# Get repo image URL from README.md
def get_repo_image(repo):
    url = f'{API_URL}/repos/{repo}/readme'
    response = requests.get(url).json()
    
    if 'content' in response and response['encoding'] == 'base64':
        readme_content = base64.b64decode(response['content']).decode('utf-8')
        
        # Parse the README content with BeautifulSoup
        soup = BeautifulSoup(readme_content, 'html.parser')
        
        # Find the first <img> tag
        img_tag = soup.find('img')
        if img_tag and 'src' in img_tag.attrs:
            img_url = img_tag['src']
            
            # If the img_url is relative, convert it to an absolute URL
            if not img_url.startswith('http'):
                return f'https://raw.githubusercontent.com/{repo}/master/{img_url}'
        
        # If no <img> tag is found, use regex to find markdown image syntax ![alt text](url)
        markdown_img = re.search(r'!\[.*?\]\((.*?)\)', readme_content)
        if markdown_img:
            img_url = markdown_img.group(1)
            
            # If the img_url is relative, convert it to an absolute URL
            if not img_url.startswith('http'):
                return f'https://raw.githubusercontent.com/{repo}/master/{img_url}'
        
        # If no markdown image is found, use regex to find markdown link syntax [nomeImg](url)
        markdown_link_img = re.search(r'\[.*?\]\((.*?)\)', readme_content)
        if markdown_link_img:
            img_url = markdown_link_img.group(1)
            
            # If the img_url is relative, convert it to an absolute URL
            if not img_url.startswith('http'):
                return f'https://raw.githubusercontent.com/{repo}/master/{img_url}'
    
    return None

# Add Framework and Tool based on used languages
def add_tech(lang: list):

    # If a project use GDScript then use Godot Engine
    if "GDScript" in lang:
        lang.append("Godot")
        lang.remove("GDScript")
    
    # If a project use Java/Kotlin then use Gradle...if use only Kotlin then use Android Studio
    if ("Java" in lang or "Kotlin" in lang) and "JavaScript" not in lang:
        lang.append("Gradle")
    if "Kotlin" in lang:
        lang.append("Android Studio")
    
    # If a project use Python/Notebook then use Pytorch, Pandas, OpenCV, Scikit-Learn
    if "Python" in lang and "Jupyter Notebook" in lang:
        lang.append("Pytorch")
        lang.append("Pandas")
        lang.append("OpenCV")
        lang.append("Scikit-Learn")
    
    # If a project use HTML/SCSS then use Bootstrap and Node...if use Vue but not C# then use Express...if use Java then use Sprint
    if ("HTML" in lang and "SCSS" in lang) and "C#" not in lang:
        lang.append("Bootstrap")
        lang.append("Node.js")
        if "Vue" in lang:
            lang.append("Express.js")
        if "Java" in lang:
            lang.append("Spring")
    
    # If a project use JavaScript/C# then use .NET
    if "C#" in lang and ("JavaScript" in lang or "TypeScript" in lang):
        lang.append("DotNet")


    # Rename some tech from GitHub Name to Portfolio Name
    if "Vue" in lang:
        lang.remove("Vue")
        lang.append("Vue.js")
    
    if "Jupyter Notebook" in lang:
        lang.remove("Jupyter Notebook")
        if "Python" not in lang:
            lang.append("Python")


    return lang



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
            language = add_tech(language)
            image = get_repo_image(repo.full_name)
            repo_info = {
                "name": repo.full_name.replace("MatteoCalvanico/", ""),               
                "description": repo.description,
                "githubUrl": repo.html_url,
                "otherUrls": [repo.homepage],
                "technologies": language,
                "image": image
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