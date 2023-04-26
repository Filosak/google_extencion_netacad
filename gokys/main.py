import json
import requests
from bs4 import BeautifulSoup

final_dictionary = {}

for i in range(1):
    page = requests.get(f"https://examans.com/ite/ite-v7-0/it-essentials-version-7-00-ite-7-0-certification-checkpoint-exam-chapters-5-6-answers/")
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