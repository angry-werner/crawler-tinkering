# crawler-tinkering
Tinkering with a crawler to help out in another project

## Install Selenium
$mkdir selenium && cd selenium

curl -O http://selenium-release.storage.googleapis.com/3.11/selenium-server-standalone-3.11.0.jar

curl -L https://github.com/mozilla/geckodriver/releases/download/v0.20.0/geckodriver-v0.20.0-linux64.tar.gz | tar xz

nohup java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.11.0.jar &

Process ID aufschreiben

