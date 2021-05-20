/**
 * AssettoMc Launcher - https://github.com/Chaika9/AssettoMclauncher
 * Copyright (C) 2019 AssettoMc
 */

const builder = require('electron-builder');
const Platform = builder.Platform;

function getCurrentPlatform() {
    switch(process.platform) {
        case 'win32': {
            return Platform.WINDOWS;
        }
        case 'darwin': {
            return Platform.MAC;
        }
        case 'linux': {
            return Platform.linux;
        }
        default: {
            console.error('Cannot resolve current platform!');
            return undefined;
        }
    }
}

builder.build( {
    targets: (process.argv[2] != null && Platform[process.argv[2]] != null ? Platform[process.argv[2]] : getCurrentPlatform()).createTarget(),
    config: {
        appId: 'assettomclauncher',
        productName: 'AssettoMc Launcher',
        artifactName: '${productName}.${ext}',
        copyright: 'Copyright © 2019 AssettoMc',
        directories: {
            buildResources: 'build',
            output: 'dist'
        },
        win: {
            target: [
                {
                    target: 'nsis',
                    arch: 'x64'
                }
            ],
            icon: 'build/icon.ico'
        },
        nsis: {
            oneClick: false,
            perMachine: true,
            allowElevation: true,
            installerIcon: 'build/icon.ico',
            uninstallerIcon: 'build/icon.ico',
            allowToChangeInstallationDirectory: true
        },
        mac: {
            target: 'dmg',
            category: 'public.app-category.games',
            icon: 'build/icon.icns'
        },
        linux: {
            target: 'AppImage',
            maintainer: 'Chaika9',
            vendor: 'AssettoMc',
            synopsis: 'AssettoMc Launcher',
            description: 'AssettoMc Launcher',
            category: 'Game'
        },
        compression: 'maximum',
        files: [
            '!{dist,.gitignore,.vscode,docs,dev-app-update.yml,.travis.yml,.nvmrc,.eslintrc.json,build.js}'
        ],
        asar: true
    }
}).then(() => {
    console.log('Build complete!');
}).catch(err => {
    console.error('Error during build!', err);
})