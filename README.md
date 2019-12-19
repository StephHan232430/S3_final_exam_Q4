# 期末考Q4

學期3 A30:短網址產生器 - Mongoose

## 功能列表

- 使用者輸入原始網址並點擊『 Shorten 』按鈕後，畫面回傳格式化的短網址
- 使用者可直接點擊回傳之短網址，導向原始網站
- 使用者可點擊『 Copy Link 』按鈕複製回傳之短網址
- 於瀏覽器輸入或貼上回傳之短網址可導向原始網站
- 點擊『 Copy Link 』按鈕後，按鈕及短網址由黃色變為綠色，" Copy Link "字樣變更為" Link Copied "，以提示使用者複製完成
- 若於滑鼠游標離開『 Link Copied 』按鈕後，有壓下滑鼠左鍵之動作，『 Link Copied 』按鈕由綠色變為黃色，" Linked Copied "字樣變更為" Copy Link "，以提醒使用者再次點擊複製，降低誤貼內容可能性
- 點擊首頁旋轉 icon 可返回網址輸入頁面

## 環境建置
1. MongoDB v4.0以上
2. Node.js

## 專案安裝流程
1. 開啟terminal，將此專案clone至本機

```
git clone https://github.com/StephHan232430/S3_final_exam_Q4.git
```

2. 進入專案資料夾

```
cd S3_final_exam_Q4
```

3. 安裝專案所需套件

```
npm install
```

4. 執行專案
```
npm run dev
```

5. 開啟網頁瀏覽器，於網址列輸入
```
http://localhost:3000
```

## 使用工具

- [body-parser v1.19.0](https://www.npmjs.com/package/body-parser)
- [dotenv v8.2.0](https://www.npmjs.com/package/dotenv)
- [express v4.17.1](https://expressjs.com/zh-tw/)
- [express-Handlebars v3.1.0](https://github.com/ericf/express-handlebars)
- [MongoDB Community Server v4.0.13](https://www.mongodb.com/download-center/community)
- [Mongoose v5.8.1](https://www.npmjs.com/package/mongoose)
- [mongoose-type-url](https://www.npmjs.com/package/mongoose-type-url)
- [Node.js v12.13.0](https://nodejs.org/en/)
- [Visual Studio Code v1.39.2](https://code.visualstudio.com/)