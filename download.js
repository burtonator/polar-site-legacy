const downloads = {

    "download-win-64": "https://github.com/burtonator/polar-bookshelf/releases/download/v1.0.14/polar-bookshelf-1.0.14-x64.exe",
    "download-win-32": "https://github.com/burtonator/polar-bookshelf/releases/download/v1.0.14/polar-bookshelf-1.0.14-ia32.exe",
    "download-macos-dmg": "https://github.com/burtonator/polar-bookshelf/releases/download/v1.0.14/polar-bookshelf-1.0.14.dmg",
    "download-linux-deb": "https://github.com/burtonator/polar-bookshelf/releases/download/v1.0.14/polar-bookshelf-1.0.14-amd64.deb",
    "download-linux-targz": "https://github.com/burtonator/polar-bookshelf/releases/download/v1.0.14/polar-bookshelf-1.0.14-x64.tar.gz",
    "download-linux-appimage": "https://github.com/burtonator/polar-bookshelf/releases/download/v1.0.14/polar-bookshelf-1.0.14-x86_64.AppImage",

};

function configureDownloads() {
    for (const download of Object.keys(downloads)) {
        var href = downloads[download];
        document.getElementById(download).setAttribute("href", href);
    }

}

configureDownloads();
