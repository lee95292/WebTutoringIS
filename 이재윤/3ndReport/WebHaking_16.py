from urllib.request import urlopen
from bs4 import BeautifulSoup

html = urlopen("https://webhacking.kr/challenge/js-3/")

bsObject = BeautifulSoup(html, "html.parser")


print(bsObject)