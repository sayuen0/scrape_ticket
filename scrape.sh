source my_env/bin/activate
python scrape_jannies.py
python scrape_enka.py
git add .
git commit -m "data get"
deactivate 
