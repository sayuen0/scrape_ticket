N = 0
r = numeric(N)
for (i in 1:N+1){
  #print(i)
  #print("回目の呼び出し")
  i_str  = formatC(i,width = 3,flag="0")
  path = paste("分析対象データ群/ジャニーズグループのみランダムサンプリングCSV/ジャニーズグループのみランダムサンプリング",i_str,"回目.csv",sep = "")
  data = read.csv(path)
  result = lm(data$price_per_unit~data$left_days+data$is_jannies+data$after+data$after_and_js_jannies,data=data)
  save_path = paste('分析対象データ群/Rによりランダムサンプリング済み結合を分析/result',i_str,'回目.csv',sep='')
  print(summary(result))
  #sink(save_path)
  #print(summary(result))
  #sink()
}

