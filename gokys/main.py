import json
import requests
from bs4 import BeautifulSoup

final_dictionary = {}

URL_list = {
    "Linux": {
        "chapter10": "https://infraexam.com/lpi/linux-essentials-2-21/working-with-text-m10-exam/",
        "chapter11": "https://infraexam.com/lpi/linux-essentials-2-21/basic-scripting-m11-exam/",
        "chapter12": "https://infraexam.com/lpi/linux-essentials-2-21/understanding-computer-hardware-m12-exam/",
        "chapter13": "https://infraexam.com/lpi/linux-essentials-2-21/where-data-is-stored-m13-exam/",
        "chapter14": "https://infraexam.com/lpi/linux-essentials-2-21/network-configuration-m14-exam/",
        "chapter15": "https://infraexam.com/lpi/linux-essentials-2-21/system-and-user-security-m15-exam/",
        "chapter16": "https://infraexam.com/lpi/linux-essentials-2-21/creating-users-and-groups-m16-exam/",
        "chapter17": "https://infraexam.com/lpi/linux-essentials-2-21/ownership-and-permissions-m17-exam/",
        "chapter18": "https://infraexam.com/lpi/linux-essentials-2-21/special-directories-and-files-m18-exam/",
        "midterm2-9": "https://infraexam.com/lpi/linux-essentials-2-21/midterm-m2-9-exam/",
        "final10-18": "https://infraexam.com/lpi/linux-essentials-2-21/final-m10-18-exam/",
        "final2-18": "https://infraexam.com/lpi/linux-essentials-2-21/final-comprehensive-m2-18-exam/"
    },

    "ITE": {
        "chapter9": "https://infraexam.com/it-essentials-7/it-essentials-7-0-chapter-9-exam-answers-ite-7-0-ite-7-02/",
        "chapter10": "https://infraexam.com/it-essentials-7/it-essentials-7-0-chapter-10-exam-answers-ite-7-0-ite-7-02/",
        "chapter11": "https://infraexam.com/it-essentials-7/it-essentials-7-0-chapter-11-exam-answers-ite-7-0-ite-7-02/",
        "chapter12": "https://infraexam.com/it-essentials-7/it-essentials-7-0-chapter-12-exam-answers-ite-7-0-ite-7-02/",
        "chapter13": "https://infraexam.com/it-essentials-7/it-essentials-7-0-chapter-13-exam-answers-ite-7-0-ite-7-02/",
        "chapter14": "https://infraexam.com/it-essentials-7/it-essentials-7-0-chapter-14-exam-answers-ite-7-0-ite-7-02/",
        "chapter1-9": "https://infraexam.com/it-essentials-7/it-essentials-7-0-chapter-1-9-skills-assessment-answers-ite-7-0-ite-7-02/",
        "chapter10-11": "https://infraexam.com/it-essentials-7/it-essentials-7-0-certification-checkpoint-exam-4-chapters-10-11-answers-ite-7-0-ite-7-02/",
        "chapter12-13": "https://infraexam.com/it-essentials-7/it-essentials-7-0-certification-checkpoint-exam-5-chapter-12-13-answers-ite-7-0-ite-7-02/",
        "chapter10-14": "https://infraexam.com/it-essentials-7/it-essentials-7-0-chapter-10-14-skills-assessment-answers-ite-7-0-ite-7-02/",
        "practice-final1-9": "https://infraexam.com/it-essentials-7/it-essentials-7-it-essentials-7-0-practice-final-1-9-exam-answers/",
        "practice-final10-14": "https://infraexam.com/it-essentials-7/it-essentials-7-it-essentials-7-0-practice-final-ch-10-14-exam-answers/",
        "final1-9": "https://infraexam.com/it-essentials-7/ite-v7-0-it-essentials-version-7-0-it-essentials-7-0-final-exam-1-9-answers/",
        "final10-14": "https://infraexam.com/it-essentials-7/ite-v7-0-it-essentials-version-7-0-it-essentials-7-0-final-exam-ch-10-14-answers/",
        "final1-14": "https://infraexam.com/it-essentials-7/ite-v7-0-it-essentials-version-7-0-it-essentials-7-0-final-exam-ch-1-14-answers/",
        "a220-1001": "https://infraexam.com/it-essentials-7/it-essentials-7-it-essentials-a-220-1001-certification-practice-exam-answers/",
        "a220-1002": "https://infraexam.com/it-essentials-7/it-essentials-7-it-essentials-a-220-1002-certification-practice-exam-answers/"
    }
}


for key in URL_list:
    final_dictionary[key] = {}

    for key2 in URL_list[key]:
            page = requests.get(URL_list[key][key2])
            soup = BeautifulSoup(page.content, 'html.parser')

            chapter = key2
            final_dictionary[key][chapter] = {}

            try:
                for li in soup.find("ol").findChildren("li", recursive=False):
                    header = li.find("h3").text.replace("\n", "").replace(" ", "").lower()
                    correct_answers = []

                    for x in li.find_all("span"):
                        correct_answers.append(x.text)

                    final_dictionary[key][chapter][header] = correct_answers
            except Exception as e:
                print(key2)

with open("data.json", "w") as outfile:
    json.dump(final_dictionary, outfile)