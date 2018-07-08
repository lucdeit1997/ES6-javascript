var devices = [
    {id: 1, type: 'HDD', capacity: 64 },
    {id: 2, type: 'SSD', capacity: 32 },
    {id: 3, type: 'USB', capacity: 16 },
]
// 2 question
// 1) whether ALL of our devices can store our video material
// 2) whether SOME of our devices can store our video material


// var AllDevicesCanStoreVideos = true;
// var onlyDevicesCanStoreVideos = false;

// for(var i =0 ; i < devices.length ; i++)
// {
//     if(devices[i].capacity < 32)
//     {
//         AllDevicesCanStoreVideos = false;
//     }
//     else{
//         onlyDevicesCanStoreVideos = true;
//     }
// }

// console.log("AllDevicesCanStoreVideos", AllDevicesCanStoreVideos);
// console.log("onlyDevicesCanStoreVideos", onlyDevicesCanStoreVideos);


//ES6
const AllDevicesCanStoreVideos = devices.every(Element => Element.capacity >=32);
const onlyDevicesCanStoreVideos = devices.some(Element => Element.capacity <= 32)
console.log("AllDevicesCanStoreVideos", AllDevicesCanStoreVideos)
console.log("onlyDevicesCanStoreVideos", onlyDevicesCanStoreVideos)


