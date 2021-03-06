/**
 * Paladium Launcher - https://github.com/Chaika9/paladiumlauncher
 * Copyright (C) 2019 Paladium
 */

const ProcessBuilder = require('./assets/js/processbuilder');

let currentLauncherPanel;

const LAUNCHER_PANELS = {
    home: '#launcher-home-panel',
    store: '#launcher-store-panel',
    betalauncher: '#launcher-betalauncher-panel',
    maintenance: '#launcher-maintenance-panel'
}

function switchLauncherPanel(current, next) {
    currentLauncherPanel = next;
    $(`${current}`).hide();
    $(`${next}`).fadeIn(500);
}

function initLauncherView() {
    currentLauncherPanel = LAUNCHER_PANELS.home;
    $(LAUNCHER_PANELS.home).fadeIn(1000);
    
    initLauncherHomePanel();
}

// Header Functions
// #region

// function initLauncherHeader() {
//     var splashes = ["Assetto Mc!"]; // TODO : Add other soon..
//     var splashe_text = splashes[Math.floor(Math.random() * splashes.length)];
//     // var rand = Math.floor(Math.random() * 100);

//     // if(rand == 1) {
//     //     splashe_text = "Nep nep nep";
//     // }
//     // else if(rand == 2) {
//     //     splashe_text = "Origami <3";
//     // }

//     $("#subtitle").html(splashe_text);
// }

$("#launcher-nav-home-button").click(function() {
    var element = $(this);
    if(!element.hasClass('active')) {
        switchLauncherPanel(currentLauncherPanel, LAUNCHER_PANELS.home);
        initLauncherHomePanel();
    }
});

$("#launcher-nav-community-button").click(function() {
    var element = $(this);
    if(!element.hasClass('active')) {
        switchLauncherPanel(currentLauncherPanel, LAUNCHER_PANELS.maintenance);
    }
});

$("#launcher-nav-wiki-button").click(function() {
    var element = $(this);
    if(!element.hasClass('active')) {
        switchLauncherPanel(currentLauncherPanel, LAUNCHER_PANELS.maintenance);
    }
});

$("#launcher-nav-support-button").click(function() {
    var element = $(this);
    if(!element.hasClass('active')) {
        switchLauncherPanel(currentLauncherPanel, LAUNCHER_PANELS.maintenance);
    }
});

$("#launcher-nav-betalauncher-button").click(function() {
    var element = $(this);
    if(!element.hasClass('active')) {
        switchLauncherPanel(currentLauncherPanel, LAUNCHER_PANELS.betalauncher);
    }
});

$("#launcher-nav-store-button").click(function() {
    var element = $(this);
    if(!element.hasClass('active')) {
        switchLauncherPanel(currentLauncherPanel, LAUNCHER_PANELS.store);
    }
});

$("#launcher-nav-workshop-button").click(function() {
    var element = $(this);
    if(!element.hasClass('active')) {
        switchLauncherPanel(currentLauncherPanel, LAUNCHER_PANELS.maintenance);
    }
});

$(".nav-left > a").on("click", function() {
    var element = $(this);

    $(".nav-left .active").removeClass("active");
    $(".nav-right .active").removeClass("active");
    element.addClass("active");
});

$(".nav-right > a").on("click", function() {
    var element = $(this);

    $(".nav-left .active").removeClass("active");
    $(".nav-right .active").removeClass("active");
    element.addClass("active");
});

// #endregion