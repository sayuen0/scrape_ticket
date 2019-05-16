import scrapy

class BlogSpider(scrapy.Spider):
    name = "blogspider"

    # クロールを開始するURL
    start_urls = ["https://qiita.com"]
