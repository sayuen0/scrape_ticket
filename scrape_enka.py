#演歌は母数が少なすぎるので、Yahooオークションにて「演歌　チケット」の検索結果を全件取得するものとする

import requests
from bs4 import BeautifulSoup
import re
import os
from time import sleep

#2019-03-12みたいな日付けを作る
def formatted_today():
    import datetime
    now = datetime.datetime.now()
    today = "{0:%Y-%m-%d}".format(now)
    return today

def print_line():
    print("---------------------------------------------------------------------------------------------------------------------------------------")

def sleep_(sec):
    print("過剰な連続リクエスト回避のsleep:"+str(sec)+"秒")
    sleep(sec)



def get_save(query_name, url):

    print("クローリングを開始します")
    print("アーティスト名: "+query_name)


#     試しに一回取得
    r = requests.get(url)
    soup  = BeautifulSoup(r.text,"html.parser").body
    sleep_(5)


    last_page = "1"
#     1→63までループ
    for i in range(1, int(last_page)+1):

        print(query_name+"の"+str(i)+" ページ目のクローリングを開始...")

        url += ("&pn=" +last_page)
        r = requests.get(url)
        soup = BeautifulSoup(r.text, "html.parser")
        print(str(i)+"ページ目取得完了...")
# 日付けからディレクトリ作成
        date = formatted_today()
        combined_path = query_name+"/"+date
        os.makedirs(combined_path, exist_ok=True)
#     書き込み
        with open (combined_path+"/"+"ticket-data"+str(i)+".html", mode="w", encoding="utf-8") as fw:
            fw.write(soup.prettify())
            print(query_name+"の"+str(i)+"ページ目の保存中...")

        print(query_name+"の"+str(i)+" ページ目のクローリングを完了しました。")
        sleep_(5)


# get_save(url, name)

url = "https://auctions.yahoo.co.jp/category/list/%E9%9F%B3%E6%A5%BD-%E8%88%88%E8%A1%8C%E3%83%81%E3%82%B1%E3%83%83%E3%83%88-%E3%83%81%E3%82%B1%E3%83%83%E3%83%88-%E9%87%91%E5%88%B8-%E5%AE%BF%E6%B3%8A%E4%BA%88%E7%B4%84/2084059686/?p=%E6%BC%94%E6%AD%8C&auccat=50060&exflg=1&b=1&n=100&s1=featured&isdd=0"
name ="演歌"
get_save(name,url)


print_line()
print("全アーティストのクローリングを完了しました")
print_line()
