# 活動登記
* serverless + google sheet api

## 命令
* npx babel --watch src --out-dir lib --presets react-app/prod,minify
    * 匯出檔案到lib資料夾，並且壓縮
* npx babel --watch src --out-dir . --presets react-app/prod
    * 匯出檔案到本地
* npx babel --watch src --out-file test.js --presets react-app/pro
    * 可以編譯到單一檔案

## TODO
* 優畫到手機的顯示，讓圖示和字體變大
* 讓報到跟彈出匡脫句，報到時會直接發出API，API回傳成功再彈出提示匡
* 新增記住我功能
    * 選做


## ref
* [babel](https://babeljs.io/docs/en/babel-cli/)
