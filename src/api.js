// Создадим общий запрос на сервер и вынесем его в отдельное место
export const posrRequest = async (data, type, src) => {
    const uploadData = JSON.stringify(data);
    // console.log(uploadData)
    const response = await fetch(src, {
        method: 'POST',
        headers: {
            'Content-Type': type,
        },
        body: uploadData,
    });

    return await response.json()
}