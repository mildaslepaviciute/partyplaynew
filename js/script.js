
const gamesQuest = {
    beatSaber: ['short', 'party', 'active', 'popular'],
    climb2: ['adventure', 'party', 'popular'],
    acron: ['short', 'party', 'multiplayer'],
    blaston: ['short', 'shoot', 'active', 'multiplayer'],
    superhot: ['strategy', 'shoot', 'levels', 'popular'],
    richiesPlank: ['short', 'extreme'],
    fruitNinja: ['short', 'party', 'active'],
    freddy: ['horror', 'strategy', 'party', 'levels'],
    jobSimulator: ['popular', 'creative', 'levels'],
    deathHorizon: ['horror', 'shoot', 'levels', 'uncomfortable'],
    dreadhalls: ['horror', 'adventure', 'uncomfortable'],
    waltzWizzard: ['short', 'calm', 'creative', 'hands'],
    rush: ['extreme', 'active', 'uncomfortable'],
    thrillFight: ['party', 'short', 'active', 'popular'],
    vaderImmortal1: ['adventure', 'popular'],
    vaderImmortal2: ['adventure', 'popular'],
    vaderImmortal3: ['adventure', 'popular'],
    spacePirate: ['short', 'shoot', 'active', 'popular'],
    epicRoller: ['extreme', 'short', 'still', 'uncomfortable'],
    tiltBrush: ['calm', 'creative'],
    anneFrank: ['educational', 'still', 'calm'],
    bogo: ['calm'],
    bait: ['calm'],
    halfHalf: ['social', 'multiplayer'],
    recRoom: ['social', 'multiplayer'],
    youtube: ['still']
}

const gamesXboxOneS = {
    fifa20: ['multiplayer', 'popular', 'party'],
    needForSpeed: ['popular'],
    nba19: ['multiplayer', 'popular', 'party'],
    //batman: [''],
    battlefield5: ['shoot', 'popular'],
    deathSquared: ['arcade', 'levels', 'strategy', 'multiplayer'],
    feedingFrenzy: ['arcade', 'levels', 'multiplayer'],
    fightNight: ['multiplayer', 'party', 'fight'],
    freddy: ['horror', 'party', 'popular'],
    forzaHorizon: ['popular'],
    goatSimulator: ['party', 'adventure'],
    minecraftDungeons: ['adventure'],
    minecraft: ['adventure', 'creative', 'popular'],
    noMansSky: ['popular', 'shoot', 'adventure'],
    outerWilds: ['adventure'],
    plantsVsZombies: ['arcade', 'levels', 'strategy'],
    plantsVsZombiesWarfare: ['shoot'],
    overcooked: ['arcade', 'strategy', 'multiplayer'],
    unravelTwo: ['arcade', 'multiplayer'],
    residentEvil: ['horror'],
    rocketLeague: ['party', 'multiplayer'],
    rush: ['multiplayer', 'adventure'],
    sims4: ['calm', 'creative'],
    superLuckysTale: ['adventure', 'levels'],
    superHot: ['levels', 'shoot', 'strategy'],
    terraria: ['arcade', 'adventure'],
    theGardensBetween: ['levels', 'adventure'],
    theWalkingDead: ['horror'],
    ufc3: ['popular', 'multiplayer', 'party'],
    wilmotsWarehouse: ['arcade', 'strategy'],
    worms: ['arcade', 'multiplayer'],
    callOfDuty: ['shoot'],
    //fortnite: ['']
}

const gamesXbox360Slim = {
    justDance17: ['short', 'party', 'active', 'multiplayer'],
    justDance15: ['short', 'party', 'active', 'multiplayer'],
    kinectAdventures: ['short', 'party', 'active', 'multiplayer'],
    mortalCombat: ['short', 'party', 'fight', 'multiplayer'],
    fifa18: ['multiplayer', 'popular', 'party'],
    nba18: ['multiplayer', 'popular', 'party'],
    gta5: ['fight', 'levels'],
    tombRider: ['adventure'],
    fruitNinja: ['short', 'party', 'active', 'multiplayer'],
    justDance16: ['short', 'party', 'active', 'multiplayer'],
    justDance4: ['short', 'party', 'active', 'multiplayer'],
    kinectSports: ['short', 'party', 'active', 'multiplayer'],
    left4dead: ['shoot', 'horror', 'multiplayer'],
    limbo: ['arcade', 'levels', 'horror'],
    justDance14: ['short', 'party', 'active', 'multiplayer'],
    justDanceKids: ['short', 'party', 'active', 'multiplayer'],
    rayman: ['arcade', 'levels'],
    redDeadRedemption: ['popular', 'shoot', 'adventure', 'levels'],
    minecraft: ['adventure', 'creative', 'popular'],
    minecraftStory: ['adventure'],
    castleCrashers: ['arcade', 'fight'],
    portal2: ['adventure', 'levels'],
    spongeBob: ['adventure', 'multiplayer'],
    kinectimals: ['active'],
    simpsons: ['adventure'],
    sonic: ['arcade'],
    dishonored: [],
    forzaHorizon: [],
    lego: [],
    farCry4: [],
    nba15: [],
    fifa15: [],
}

// When page is ready 

$(document).ready(function() {
    addStickyNavbar()
    const platform = $('body').attr('id')
    loadGamesFeatures(platform)
});


// Get the current year for the copyright 

$('#year').text(new Date().getFullYear());


// Fix pre-navbar while scrolling

$(window).scroll(function(event){

})


// Init carousel

$('.carousel').carousel()


// Sticky navbar

function addStickyNavbar() {
    $('.js--sticky-navbar-offset').waypoint(function(direction) {
        if (direction == "down") {
            $('#navbar-sticky').removeClass('d-md-none');
            $('#navbar-sticky').addClass('fixed-top');
        } else {
            $('#navbar-sticky').removeClass('fixed-top');
            $('#navbar-sticky').addClass('d-md-none');
        }
    }, {
        offset: '60px;'
    });
}

// Burger menu

$("#main-menu-toggler").click(function(){
    const isMenuOpened = $("#main-menu-close").hasClass("d-none")

    if (isMenuOpened) {
        $("#main-menu-open").addClass("d-none");
        $("#main-menu-close").removeClass("d-none");
    } else {
        $("#main-menu-close").addClass("d-none");
        $("#main-menu-open").removeClass("d-none");
    }
});


// Dropdown

function outsideClickListener (event) {
    const $target = $(event.target)
    if ((!$target.closest('.nav-dropdown').length) && $('.navbar').is(':visible')) {
        $('.nav-dropdown').collapse("hide")   
        removeClickListener()
    }
}

function removeClickListener() {
    document.removeEventListener('click', outsideClickListener)
}

$('.navbar-collapse').on('shown.bs.collapse', function() {
    document.addEventListener('click', outsideClickListener)
})


// GAMES FILTER

function filterGamesByCategory(category){
    $('#all-games > div').each(function () {
        const game = $(this)
        game.removeClass("d-flex")
        game.addClass("invisible")
        setTimeout(function() {
            game.removeClass("invisible")
            if (game.hasClass(category) || category === 'all') {
                game.addClass("d-flex")
                game.removeClass("d-none")
            } else {
                game.addClass("d-none")
            }
        }, 300)
    })
}

$("#all-toggler").click(function(){
    filterGamesByCategory('all')
    $(".filter-toggler").removeClass("filter-toggler-active");
    $("#all-toggler").addClass("filter-toggler-active");
});

$("#active-toggler").click(function(){
    filterGamesByCategory('c-active')
    $(".filter-toggler").removeClass("filter-toggler-active");
    $("#active-toggler").addClass("filter-toggler-active");
});

$("#story-toggler").click(function(){
    filterGamesByCategory('c-story')
    $(".filter-toggler").removeClass("filter-toggler-active");
    $("#story-toggler").addClass("filter-toggler-active");
});

$("#experience-toggler").click(function(){
    filterGamesByCategory('c-experience')
    $(".filter-toggler").removeClass("filter-toggler-active");
    $("#experience-toggler").addClass("filter-toggler-active");
});

$("#kids-toggler").click(function(){
    filterGamesByCategory('c-kids')
    $(".filter-toggler").removeClass("filter-toggler-active");
    $("#kids-toggler").addClass("filter-toggler-active");
});

$("#shoot-toggler").click(function(){
    filterGamesByCategory('c-shoot')
    $(".filter-toggler").removeClass("filter-toggler-active");
    $("#shoot-toggler").addClass("filter-toggler-active");
});

$("#horror-toggler").click(function(){
    filterGamesByCategory('c-horror')
    $(".filter-toggler").removeClass("filter-toggler-active");
    $("#horror-toggler").addClass("filter-toggler-active");
});

$("#sport-toggler").click(function(){
    filterGamesByCategory('c-sport')
    $(".filter-toggler").removeClass("filter-toggler-active");
    $("#sport-toggler").addClass("filter-toggler-active");
});

$("#kinect-toggler").click(function(){
    filterGamesByCategory('c-kinect')
    $(".filter-toggler").removeClass("filter-toggler-active");
    $("#kinect-toggler").addClass("filter-toggler-active");
});

$("#multiplayer-toggler").click(function(){
    filterGamesByCategory('c-multiplayer')
    $(".filter-toggler").removeClass("filter-toggler-active");
    $("#multiplayer-toggler").addClass("filter-toggler-active");
});

$("#racing-toggler").click(function(){
    filterGamesByCategory('c-racing')
    $(".filter-toggler").removeClass("filter-toggler-active");
    $("#racing-toggler").addClass("filter-toggler-active");
});

function loadGamesFeatures(platform) {
    $('#all-games > div').each(function () {
        const id = $(this).attr('id')
        $(this).find('.feature-container').each(function () {
            $(this).html(getFeatureContainerInner(id, platform))
        })
    })
}

function getFeaturesByKey(key) {
    switch (key) {
        case 'popular':
            return '<i class="far fa-heart text-primary mr-2"></i><small class="text-white">Itin populiarus</small>'
        case 'extreme':
            return '<i class="far fa-surprise text-primary mr-2"></i><small class="text-white">Ekstremalus</small>'
        case 'short':
            return '<i class="far fa-clock text-primary mr-2"></i><small class="text-white">Trumpas</small>'
        case 'party':
            return '<i class="fas fa-birthday-cake text-primary mr-2"></i><small class="text-white">Vakarėliams</small>'
        case 'active':
            return '<i class="fas fa-running text-primary mr-2"></i><small class="text-white">Judrus</small>'
        case 'multiplayer':
            return '<i class="fas fa-users text-primary mr-2"></i><small class="text-white">Gali žaisti keli žmonės</small>'
        case 'shoot':
            return '<i class="fas fa-bullseye text-primary mr-2"></i><small class="text-white">Šaudyklė</small>'
        case 'strategy':
            return '<i class="fas fa-puzzle-piece text-primary mr-2"></i></i><small class="text-white">Strateginis</small>'
        case 'horror':
            return '<i class="fas fa-skull text-primary mr-2"></i><small class="text-white">Siaubo</small>'
        case 'adventure':
            return '<i class="fas fa-hiking text-primary mr-2"></i><small class="text-white">Nuotykiai</small>'
        case 'uncomfortable':
            return '<i class="fas fa-exclamation-triangle text-primary mr-2"></i><small class="text-white">Gali svaigti galva</small>'
        case 'creative':
            return '<i class="fas fa-paint-brush text-primary mr-2"></i><small class="text-white">Kūrybiškas</small>'
        case 'educational':
            return '<i class="fas fa-book-reader text-primary mr-2"></i><small class="text-white">Edukacinis</small>'
        case 'calm':
            return '<i class="fas fa-mug-hot text-primary mr-2"></i><small class="text-white">Ramus</small>'
        case 'social':
            return '<i class="far fa-comments text-primary mr-2"></i><small class="text-white">Socialus</small>'
        case 'still':
            return '<i class="fas fa-male text-primary mr-2"></i><small class="text-white">Nereikia judėti</small>'
        case 'hands':
            return '<i class="far fa-hand-paper text-primary mr-2"></i><small class="text-white">Valdomas delnais</small>'
        case 'arcade':
            return '<i class="fas fa-shoe-prints text-primary mr-2"></i><small class="text-white">Arkadinis</small>'
        case 'levels':
            return '<i class="fas fa-route text-primary mr-2"></i><small class="text-white">Lygių vykdymas</small>'
        case 'fight':
            return '<i class="far fa-hand-rock text-primary mr-2"></i><small class="text-white">Kovinis</small>'
        default:
            return ''
    }
   
}

function getPlatformGames(platform) {
    switch (platform) {
        case 'virtualReality':
            return gamesQuest
        case 'oculusQuest':
            return gamesQuest
        case 'oculusQuest2':
            return gamesQuest
        case 'xboxOneS':
            return gamesXboxOneS
        case 'xbox360Slim':
            return gamesXbox360Slim
        default:
            return []
    }
}

function getFeatureContainerInner(gameKey, platform) {
    const games = getPlatformGames(platform)

    let featureContainerInner = ''
    games[gameKey].forEach(feature => {
        featureContainerInner += '<div class="border border-dark rounded-lg px-2 py-1 mr-1 mb-1">' 
            + getFeaturesByKey(feature)
            + '</div>'
    })
        
    return featureContainerInner
}

