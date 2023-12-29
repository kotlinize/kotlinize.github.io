document.getElementById('openApp').addEventListener('click', function() {
    var appScheme = 'deeplinktest://';
    var fallbackUrl = 'https://play.google.com/store/apps/details?id=com.kotlinizer.deeplinktest'; // Replace with your app store link

    window.location.href = appScheme;

    setTimeout(function() {
        window.location.href = fallbackUrl;
    }, 2000); // 2 seconds delay
});