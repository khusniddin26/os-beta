from BeautifulSoup import BeautifulSoup
import urllib2
import re
html_page = urllib2.urlopen("http://www.yourwebsite.com")
soup = BeautifulSoup(html_page)
for link in soup.findAll('a'):
    print (link.get('href'))