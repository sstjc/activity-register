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
* 部屬github
* 加入松山id功能
    * 目前選做
* 優畫到手機的顯示，讓圖示和字體變大
* 讓報到跟彈出匡脫句，報到時會直接發出API，API回傳成功再彈出提示匡
* 新增記住我功能
    * 選做

## done
* 完成聚會場次顯示邏輯
* 報名完畢更新網頁狀態，檢查人數，需要重新整理
* 報名如果人數已滿要顯示
* 發送登記資料
* 顯示報名完成名單


## ref
* [babel](https://babeljs.io/docs/en/babel-cli/)
