const ru = `
<div class="wrap-text">
    <h2>Добавление дат в bookmarks</h2>
    <br>
    <div class="text-instruction">&nbsp;&nbsp;&nbsp; Для добавления дат в файл закладок на браузере, экспортируйте файл
        закладок и сохраните на диске (например для браузера chrome выберите настройки - &#65049; в правом верхнем углу
        &rArr; Bookmarks &rArr; Bookmark manager или CTRL + SHIFT + O. Далее &#65049; в правом верхнем углу на сайте
        &rArr;
        Bookmarks
        &rArr;
        Export bookmarks). Файл будет иметь название типа "bookmarks_XX.XX.XXXX.html" (X - цифры). Далее нажмите
        кнопку "Загрузите файл" и выберите сохраненный файл закладок. В папке Downloads на вашем компьютере появится файл
        "bookmarks-result.html" с датами. Это может занять до одной минуты</div>
    <br>
    <input type="file" class="filestyle" id="chosen-file" data-btnClass="btn btn-primary" data-input="false"
           data-text="Загрузите файл">
</div>
`;

export default ru;
