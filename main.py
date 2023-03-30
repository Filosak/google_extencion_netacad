import json
import requests
from bs4 import BeautifulSoup

final_dictionary = {}

for i in range(2, 19):
    print(i)
    page = requests.get(f"https://examans.com/ndg-linux-essentials-2-0-1/linux-essentials-2-0-chapter-{i}-exam-answers/")
    soup = BeautifulSoup(page.content, 'html.parser')

    chapter = f"chapter{i}"
    final_dictionary[chapter] = {}

    for li in soup.find("ol").findChildren("li", recursive=False):
        header = li.find("h3").text.replace("\n", "").replace(" ", "").lower()
        correct_answers = []

        for x in li.find_all("span"):
            correct_answers.append(x.text)

        final_dictionary[chapter][header] = correct_answers

with open("data.json", "w") as outfile:
    json.dump(final_dictionary, outfile)