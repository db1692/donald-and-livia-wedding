$(document).ready(function () {

    function setVH() {
        let vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVH();

    $(".toggle-header").click(function () {
        var content = $(this).next(".collapsible");
        var icon = $(this).find("path");

        if (content.is(':visible')) {
            content.slideUp();
            icon.css("transform", "rotate(0deg)");
        } else {
            content.slideDown();
            icon.css("transform", "rotate(90deg)");
        }
    });

    let map;

    async function initMap() {

        const { Map } = await google.maps.importLibrary("maps");
        const cityChambers = { lat: 55.950244, lng: -3.1902986 };
        const bellsBaths = { lat: 55.9720934, lng: -3.1749744 };

        //City chambers map
        const cityChambersMap = new Map(document.getElementById("cityChambersMap"), {
            zoom: 16,
            center: cityChambers,
            mapTypeControl: false,
            streetViewControl: false
        });

        const cityChambersMarker = new google.maps.Marker({
            map: cityChambersMap,
            position: cityChambers,
            title: "Edinburgh City Chambers"
        });

        const cityChambersInfo = new google.maps.InfoWindow({
            content: `<div jstcache="34" class="poi-info-window gm-style"> <div jstcache="2"> <div jstcache="3" class="title full-width" jsan="7.title,7.full-width">Edinburgh City Chambers</div> <div class="address"> <div jstcache="4" jsinstance="0" class="address-line full-width" jsan="7.address-line,7.full-width">253 High St</div><div jstcache="4" jsinstance="1" class="address-line full-width" jsan="7.address-line,7.full-width">Edinburgh</div><div jstcache="4" jsinstance="2" class="address-line full-width" jsan="7.address-line,7.full-width">EH1 1YJ</div><div jstcache="4" jsinstance="*3" class="address-line full-width" jsan="7.address-line,7.full-width">United Kingdom</div> </div> </div> <div jstcache="5" style="display:none"></div> <div class="view-link"> <a target="_blank" jstcache="6" href="https://maps.google.com/maps?ll=55.950297,-3.190319&amp;z=20&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3&amp;cid=15667617062049039230" tabindex="0"> <span> View on Google Maps </span> </a> </div> </div>`,
            ariaLabel: "Test"
        });

        cityChambersMarker.addListener("click", () => {
            cityChambersInfo.open({
                anchor: cityChambersMarker,
                map: cityChambersMap
            });
        });

        //Dr Bells map
        const bathsMap = new Map(document.getElementById("bathsMap"), {
            zoom: 16,
            center: bellsBaths,
            mapTypeControl: false,
            streetViewControl: false
        });

        const bathsMarker = new google.maps.Marker({
            map: bathsMap,
            position: bellsBaths,
            title: "The Old Dr Bells Baths"
        });

        const bathsInfo = new google.maps.InfoWindow({
            content: `<div jstcache="34" class="poi-info-window gm-style"> <div jstcache="2"> <div jstcache="3" class="title full-width" jsan="7.title,7.full-width">The Old Dr Bells' Baths</div> <div class="address"> <div jstcache="4" jsinstance="0" class="address-line full-width" jsan="7.address-line,7.full-width">121 Great Jct St</div><div jstcache="4" jsinstance="1" class="address-line full-width" jsan="7.address-line,7.full-width">Edinburgh</div><div jstcache="4" jsinstance="2" class="address-line full-width" jsan="7.address-line,7.full-width">EH6 5JB</div><div jstcache="4" jsinstance="*3" class="address-line full-width" jsan="7.address-line,7.full-width">United Kingdom</div> </div> </div> <div jstcache="5" style="display:none"></div> <div class="view-link"> <a target="_blank" jstcache="6" href="https://maps.google.com/maps?ll=55.972295,-3.175132&amp;z=18&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3&amp;cid=13226961064872402880"> <span> View on Google Maps </span> </a> </div> </div>`,
            map: bathsMap
        })

        bathsMarker.addListener("click", () => {
            bathsInfo.open({
                anchor: bathsMarker,
                map: bathsMap
            });
        });

        var italyMap = new Map(document.getElementById('italyMap'), {
            zoom: 5.5,
            center: { lat: 42.504154, lng: 12.646361 },
            mapTypeControl: false,
            streetViewControl: false,
            draggable: false,
            fullscreenControl: false,
            zoomControl: false
        });

        var locations = [
            { lat: 40.8528, lng: 14.2681 },
            { lat: 41.9028, lng: 12.4964 },
            { lat: 44.4949, lng: 11.3426 },
            { lat: 44.6471, lng: 10.9252 },
            { lat: 45.4408, lng: 12.3155 }
        ];

        var path = new google.maps.Polyline({
            path: locations,
            geodesic: true,
            strokeColor: '#333',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        // window.initMap = initMap;

        path.setMap(italyMap);
    }

    initMap();
});

