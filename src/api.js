// Создадим общий запрос на сервер и вынесем его в отдельное место
export const posrRequest = async (data, src) => {
    const uploadData = JSON.stringify(data);
    const response = await fetch(src, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: uploadData,
    });

    return await response.json()
}