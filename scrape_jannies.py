# coding: utf-8
import requests
from bs4 import BeautifulSoup
import re
import os
import sys
from time import sleep

# 第一引数にURLを、第二引数にフォルダ名となる
# アーティスト名を入れる

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

# アーティスト名：urlの辞書
artists= {
    "ジャニーズJr": "https://www.ticket.co.jp/sys/d/208.htm?&un=100",
    "NEWS": "https://www.ticket.co.jp/sys/d/223.htm?un=100",
    "セクシーゾーン":"https://www.ticket.co.jp/sys/d/10462.htm?un=100",
    "キスマイフットツー":"https://www.ticket.co.jp/sys/d/7097.htm?un=100",
    }


# src_urlからソースを取ってくる。query_nameを指定するとフォルダを作成できる。
#  query_name= ジャニーズJr→ ジャニーズJr/2019-05-17 みたいにフォルダを生成できる
def get_save(query_name, url):
    
    print("クローリングを開始します")
    print("アーティスト名: "+query_name)

    
#     試しに一回取得
    r = requests.get(url)
    soup  = BeautifulSoup(r.text,"html.parser").body
    sleep_(2)

# 全件を保存する為にページ数を計上
# ページ数は .pager-countクラスの最後のノードに格納されている
    pager_counts  = soup.select(".pager-count")
#   最後の.pager-countの番号：ページネーション数を計上
    last_page = None
    if(len(pager_counts)==0):
        # そもそもページがないとき、ページ数は0
        last_page=str(0)
    elif (pager_counts[len(pager_counts)-1].find("a") ):
        # １ページしかないとき、find("a")でなく直接ページ数textを取得
        last_page = pager_counts[len(pager_counts)-1].find("a").text
    elif(pager_counts):
        last_page=  pager_counts[len(pager_counts)-1].text
    
    print("総ページ数: "+last_page)
    
#     last_page数ループ
    if(last_page== str(0)):
        # ページ数が0なら処理終了
        print("該当アーティストのチケット取引はありません。")
    else:
        for i in range(1, int(last_page)+1):

            print(query_name+"の"+str(i)+" / "+last_page+"ページ目のクローリングを開始...")

            url += ("&pn=" +last_page)
            r = requests.get(url)
            soup = BeautifulSoup(r.text, "html.parser")
            print(str(i)+" / "+last_page+"ページ目取得完了。")
    # 日付けからディレクトリ作成
            date = formatted_today()
            combined_path = query_name+"/"+date
            os.makedirs(combined_path, exist_ok=True)
    #     書き込み
            with open (combined_path+"/"+"ticket-data"+str(i)+".html", mode="w", encoding="utf-8") as fw:
                fw.write(soup.prettify())
                print(query_name+"の"+str(i)+" / "+last_page+"ページ目の保存中...")

            print(query_name+"の"+str(i)+" / "+last_page+" ページ目の保存を完了しました。")
            sleep_(2)

# get_save(url, name)

for name, url in artists.items():
    get_save(name,url)
    sleep_(2)


print_line()
print("全アーティストのクローリングを完了しました")
print_line()

# 備考
# CSSはダウンロードできない。一応ソースから手作業で探してくることはできた。
# URLとアーティスト名はコマンドライン引数で渡せるべき
