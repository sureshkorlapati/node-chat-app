# node-chat-app. 
# steps to add the app to github
echo "# node-chat-app" >> README.md
git status
git add .
git commit -m 'first commit'
git remote add origin https://github.com/sureshkorlapati/node-chat-app.git
git push -u origin master


# install heroku cli
sudo apt install snapd -y
sudo snap install --classic heroku -y
sudo heroku create
sudo heroku login
sudo git push heroku master
