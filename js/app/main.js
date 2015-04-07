define(
    'app/main', 
    ['emoji'],
    function(emojiList) {
        var titleTag = document.getElementsByTagName('title')[0],
            emojiNameSpan = document.getElementById('emoji-name');

        setInterval(function() {
            var randomEmoji = emojiList[
                Math.floor( Math.random() * emojiList.length )
            ];

            var href = window.location.protocol + '//' 
                     + window.location.host 
                     + window.location.pathname;

            window.history.pushState({
                'html': null, 'pageTitle': null
                }, 
                '', 
                href + '?' + randomEmoji
            );

            emojiNameSpan.textContent = decodeURIComponent(randomEmoji);
            titleTag.textContent = 'Emoji!' + decodeURIComponent(randomEmoji);;
        }, 500)
});
