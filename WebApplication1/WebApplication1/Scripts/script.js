// 定義要取得的影音內容，包含影像和聲音
let constraints = {
    audio: true,
    video: true
}

// 請求開啟影音裝置
navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
        // 取得當前裝置的影音串流（stream）
    })
    .catch(function (error) {
        // 如果有錯誤發生
    });