from urllib.request import urlopen
from bs4 import BeautifulSoup

html = urlopen("https://webhacking.kr/challenge/js-2/")

bsObject = BeautifulSoup(html, "html.parser")


print(bsObject)