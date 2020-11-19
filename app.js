jQuery(function ($) {

    let ost_lists = {
        mondo_day: [
            '01. Twilight Serenity (Genshin Impact Main Theme Var.).mp3',
            '02. Legend of the Wind.mp3',
            '03. The City Favored By Wind.mp3',
            '04. Bustling Afternoon of Mondstadt.mp3',
            '05. Dusk in Mondstadt.mp3',
            '06. Mondstadt Starlit.mp3',
            '07. Moonlight in Mondstadt.mp3',
            '08. Another Day in Mondstadt.mp3',
            '09. Windborne Hymn.mp3',
            '10. Knights of Favonius.mp3',
            "11. Angel's Share.mp3",
            '12. Silhouette and Silk Steps.mp3',
            '13. Perilous Path.mp3',
            '14. Say My Name.mp3',
            "15. Welp, Didn't Expect That.mp3",
            '16. An Interesting Labour.mp3',
            '17. Make Haste, Partner.mp3',
            '18. A Happy Day.mp3',
            '19. Reunion in the Whispering Woods.mp3',
            '20. Startled.mp3',
            '21. Meeting Amber.mp3',
            '22. Storm Befalls.mp3',
            '23. Slight Distress.mp3',
            '24. Tender Strength.mp3',
            '25. Imminent Triumph.mp3',
        ],
        mondo_night: [
            '26. Beckoning (Genshin Impact Main Theme Var.).mp3',
            '27. Hence, Begins the Journey.mp3',
            '28. Dawn Winery Theme.mp3',
            '29. Before Dawn, at the Winery.mp3',
            '30. A Familiar Sight and Leisure.mp3',
            '31. Cold Night.mp3',
            '32. Whispering Plain.mp3',
            '33. Statue of the Seven.mp3',
            '34. Acquaintance (Statue of the Seven).mp3',
            '35. Stealing Words of the Moon.mp3',
            "36. Wayfarer's Peace.mp3",
            '37. Wind-Washed Mountains.mp3',
            '38. Wayward Souls.mp3',
            '39. Reminiscence (Genshin Impact Main Theme Var.).mp3',
            '40. Restless Blazing Sun.mp3',
            '41. Remembrance (Genshin Impact Main Theme Var.).mp3',
            '42. The Horizon.mp3',
            '43. Awaiting for the Future.mp3',
            '44. Moonlit Wilderness.mp3',
            '45. A New Day with Hope.mp3',
            '46. Journey of Hope (Genshin Impact Main Theme Var.).mp3',
            "47. Forlorn Child of Archaic Winds (Dvalin's Nest).mp3",
            "48. Forsken Child of Ancient Times (Dvalin's Nest).mp3",
            '49. Midday Prospects.mp3',
            '50. Dwelling in the Past.mp3',
            '51. Eternal Anamnesis (Genshin Impact Main Theme Var.).mp3',
        ],
        mondo_fight: [
            '52. Photon of Fluctuation.mp3',
            '53. His Resolution.mp3',
            '54. Rhythm from Ancient Times.mp3',
            '55. Endless Echoes.mp3',
            '56. Charge! Fearless Warriors.mp3',
            '57. Beats of Water Drops.mp3',
            '58. Magic Intrigues.mp3',
            '59. Against All Odds.mp3',
            '60. Perpetual Motion of Wind.mp3',
            '61. Riders of the Wind, Onward.mp3',
            '62. Whirl of Boreal Wind.mp3',
            '63. Symphony of Boreal Wind.mp3',
        ],

        riyue_day: [
            '1.01 Liyue.mp3',
            "1.02 Moon in One's Cup.mp3",
            '1.03 Relaxation in Liyue.mp3',
            "1.04 Maiden's Longing.mp3",
            '1.05 Sun Rises in Liyue.mp3',
            '1.06 Good Night, Liyue.mp3',
            '1.07 Call It a Day in Liyue.mp3',
            '1.08 Clear Sky over Liyue.mp3',
            '1.09 A Transparent Moon (Liuli Pavilion).mp3',
            '1.10 Treasury from the Northland.mp3',
            '1.11 Cozy Leisure Time (Wangshu Daytime).mp3',
            "1.12 Sojourner's Sweet Dream (Wangshu Night).mp3",
            '1.13 Winding River.mp3',
            '1.14 Mild Waves.mp3',
            '1.15 Rhythm Amidst the Reeds.mp3',
            '1.16 Flows of Jade-Like Water.mp3',
            '1.17 Blossoms Across the Valley.mp3',
            '1.18 Flow of Mildness.mp3',
            '1.19 Stroll in the Shadows.mp3',
            '1.20 Melodious Flute.mp3',
            '1.21 Gentle Rain.mp3',
            '1.22 Vague Whispers.mp3',
            '1.23 Legends Swept Away.mp3',
            '1.24 Joy of Returning.mp3',
            "1.25 Loner's Departure.mp3",
            '1.26 Foxes at Play.mp3',
            '1.27 Plain of Nostalgia.mp3',
            '1.28 Another Hopeful Tomorrow.mp3',
            '1.29 This Little Light of Mine.mp3',
            '1.30 Legend of Redemption.mp3',
            '1.31 Hazy Light.mp3',
            '1.32 Scattered Amongst the Tides.mp3',
            '1.33 Rhythms from the Conch.mp3',
        ],
        riyue_night: [
            '2.01 Peaceful Hike (Qingce Daytime).mp3',
            '2.02 The Fading Stories (Qingce Night).mp3',
            '2.03 Wandering Flight.mp3',
            '2.04 Faint Tracks.mp3',
            '2.05 Idle Away from Mountains.mp3',
            '2.06 Humming Amidst Rocks.mp3',
            '2.07 Above the Sea of Clouds.mp3',
            "2.08 Adeptus' Retirement.mp3",
            '2.09 A Casual Visit.mp3',
            '2.10 A Serendipitous Encounter.mp3',
            '2.11 Freedom of Crane.mp3',
            '2.12 Rays of Sunlight.mp3',
            '2.13 Rainbow at Summit.mp3',
            '2.14 Spring in Clouds.mp3',
            "2.15 Adeptus' Solace.mp3",
            '2.16 The Absence of Adepti.mp3',
            '2.17 Emerging Clouds.mp3',
            '2.18 Drink with a Hermit.mp3',
            '2.19 Moss Covered Path.mp3',
            '2.20 Bird Call from Afar.mp3',
            '2.21 Red Leaf on the Chessboard.mp3',
            '2.22 Secluded Sanctuary.mp3',
            '2.23 Flickering Petals.mp3',
            '2.24 Swinging in the Breeze.mp3',
            '2.25 Solitude Mountains.mp3',
            '2.26 Distant Resonance.mp3',
            '2.27 Foregone Giants.mp3',
            '2.28 Linger in the Valley.mp3',
            '2.29 Slumbering Lore.mp3',
            '2.30 Silent Ruins.mp3',
            '2.31 Lone Drifter.mp3',
            '2.32 Lost Expectation.mp3',
            '2.33 The Realm Within.mp3',
        ],
        riyue_fight: [
            '3.01 Rapid as Wildfires.mp3',
            '3.02 Chasing the Torrents.mp3',
            '3.03 Gallant Challenge.mp3',
        ]
    };

    // GLOBALS
    let current_ost;
    let $current_time = $('#current_time');
    let $ost_image = $('#ost_image');
    let $ost_list = $('#ost_list');
    let $player_title = $('#player_title');
    let $player_next = $('#player_next');

    // CLOCK
    (function clock() {
        $current_time.html(moment().format("h:mm:ss A"));
        setTimeout(clock, 1000);
    })();

    let player = new Plyr('#player', {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume'],
        invertTime: false,
        hideControls: false,
        volume: 0.5,
    });

    let update_player = function () {

        let list = $ost_list.val();

        // auto will select ost by time
        if (list === 'auto') {

            let hour = parseInt(moment().hour());
            let _list = $(':selected', $ost_list).data('list');
            // DAY = 06.00-17.59, NIGHT = 18.00-05.59
            list = hour >= 6 && hour < 18 ?
                _.sample(_list.day) :
                _.sample(_list.night);
        }

        if (list.indexOf(',') !== -1) {
            list = _.sample(list.split(','));
        }

        let ost;
        do {
            ost = _.sample(ost_lists[list]);
        } while (current_ost === ost);

        current_ost = ost;

        // remove .mp3 and number from name
        let name = current_ost.replace('.mp3', '')
        name = name.split(' ');
        name.shift();
        name = name.join(' ');

        $player_title.html(name);

        player.source = {
            type: 'audio',
            sources: [{src: 'ost/' + list + '/' + current_ost, type: 'audio/mp3'}],
        };

        player.play();

        // update image

        let image = list.split('_').shift();
        $ost_image.attr('src', 'images/album/' + image + '.jpg');
    }

    // event
    player.on('ended', update_player);

    // menus
    $ost_list.on('change', update_player);

    // next button
    $player_next.on('click', update_player);

    // init effect
    Plyr.setup('.fx-player', {
        controls: ['play', 'current-time', 'mute', 'volume'],
        invertTime: false,
        hideControls: false,
        volume: 0.5,
    });

    // start
    update_player();

});