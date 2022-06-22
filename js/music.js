// // BQDmk-JPUVS4T3WFQ366gUgB2BpYUK7qkGePrqct2g8krrPPmD7C5sTMhA_GZSdJxVeyhtCxaMkZiwMbjVlGb43jAgo5IxWYFruPf701XaoVo-xU2DDfaKb0dmNr2brvX0a8No2XPh6mJpahtB_Zrltl2J4ukq3GjtVMPu_yXbGPBUbusdbrmjVG6b2qHcDPwe3BQdxd33Da-FsZIW4


// document.addEventListener('click','button',()=>{
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '10a23e5f42msh63fb8615c2793e8p1499f8jsn0981e8acff17',
//             'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//         }
//     };

//     fetch('https://spotify23.p.rapidapi.com/search/?q=happy&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// })

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQDmk-JPUVS4T3WFQ366gUgB2BpYUK7qkGePrqct2g8krrPPmD7C5sTMhA_GZSdJxVeyhtCxaMkZiwMbjVlGb43jAgo5IxWYFruPf701XaoVo-xU2DDfaKb0dmNr2brvX0a8No2XPh6mJpahtB_Zrltl2J4ukq3GjtVMPu_yXbGPBUbusdbrmjVG6b2qHcDPwe3BQdxd33Da-FsZIW4';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    });


    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    player.connect();
}