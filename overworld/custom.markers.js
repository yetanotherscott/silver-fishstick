/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

// Common Minecraft colors for SVG markers:
const MC_COLORS = {
    SPAWN: "#FAFAF9",      // Gold/Orange
    BASE: "#5A7A34",       // Green
    FARM: "#7BA159",       // Light Green
    PORTAL: "#A52A2A",     // Red/Brown
    VILLAGE: "#8B6B3D",    // Brown
    MINE: "#666666",       // Gray
    STORAGE: "#D4AF37",    // Gold
    ENCHANT: "#9D4EDD",    // Purple
    RAIL: "#42A5F5",       // Blue
    NETHER: "#FF6B6B",     // Bright Red
    END: "#9C27B0",        // Purple
    SHOP: "#4CAF50",       // Bright Green
    PUBLIC: "#2196F3"      // Blue
};

UnminedCustomMarkers = {
    isEnabled: true,
    markers: [
        // ========== SPAWN POINT ==========
        {
            x: 230,
            z: 250,
            image: "marker_spawn.svg",
            imageAnchor: [0.5, 1],
            imageScale: 1,
            text: "Spawn Point",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== Second Base ==========
        {
            x: -463,
            z: 2041,
            image: "marker_spawn.svg",
            imageAnchor: [0.5, 1],
            imageScale: 1,
            text: "Second Base",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== WILLIE'S HOUSE ==========
        {
            x: 280,
            z: 250,
            image: "marker_base.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Willie's House",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== Ollie'S HOUSE ==========
        {
            x: 468,
            z: 199,
            image: "marker_base.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Ollie's House",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== Lilly'S HOUSE ==========
        {
            x: 435,
            z: 343,
            image: "marker_base.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Lilly's House",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== Drew'S HOUSE ==========
        {
            x: 346,
            z: 317,
            image: "marker_base.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Drew's House",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== ENCHANTING TOWER ==========
        {
            x: 119,
            z: 443,
            image: "marker_enchant.svg",
            imageAnchor: [0.5, 1],
            imageScale: 1,
            text: "Enchanting Tower",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== BOAT DOCK ==========
        {
            x: 215,
            z: 355,
            image: "marker_boat.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Boat Dock",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== Whitney's House ==========
        {
            x: 247,
            z: 320,
            image: "marker_base.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Whitney's House",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== Andy's House ==========
        {
            x: 281,
            z: 304,
            image: "marker_base.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Andy's House",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== Greenhouse ==========
        {
            x: 334,
            z: 356,
            image: "marker_farm.svg",
            imageAnchor: [0.5, 1],
            imageScale: 1,
            text: "Greenhouse",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== Barn ==========
        {
            x: 365,
            z: 383,
            image: "marker_farm.svg",
            imageAnchor: [0.5, 1],
            imageScale: 1,
            text: "Barn",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== Outposts ==========
        {
            x: 425,
            z: -523,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 620,
            z: 1142,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 910,
            z: 977,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 514,
            z: 1220,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 927,
            z: 1425,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 120,
            z: 1677,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 456,
            z: 516,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -320,
            z: 185,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 274,
            z: -947,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -1903,
            z: -1157,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -708,
            z: 14,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 1327,
            z: 313,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 1265,
            z: 193,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 610,
            z: 266,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 1415,
            z: -464,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 1942,
            z: -476,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 2221,
            z: 1314,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 525,
            z: -159,
            image: "tent.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Outpost",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        //  ========== Portals ==========
        {
            x: 285,
            z: -957,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -1915,
            z: -1149,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 257,
            z: 291,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 1348,
            z: 308,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 1422,
            z: -482,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 1935,
            z: -472,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 4748,
            z: 1005,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -379,
            z: 2597,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -283,
            z: 2058,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 22,
            z: 1636,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -2459,
            z: 1597,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 400,
            z: -518,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -2334,
            z: 2130,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -1143,
            z: 2238,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 1897,
            z: -1933,
            image: "marker_portal.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Portal",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // ========== Villages ==========

        {
            x: 748,
            z: 125,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 157,
            z: -1011,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -1437,
            z: -274,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -1611,
            z: -932,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -314,
            z: 733,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -251,
            z: 1229,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 1917,
            z: 149,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: -724,
            z: 2005,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 1702,
            z: 731,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 1364,
            z: 1167,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 2233,
            z: 1965,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 3531,
            z: 3541,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 2236,
            z: 116,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 2907,
            z: 283,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        {
            x: 3417,
            z: -329,
            image: "marker_village.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Village",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },

        // 
        // You can add more markers below as your realm grows
        // Just copy the format above and change the coordinates/image/text
        // {
        //     x: YOUR_X_COORDINATE,
        //     z: YOUR_Z_COORDINATE,
        //     image: "marker_filename.svg",
        //     imageAnchor: [0.5, 1],
        //     imageScale: 1,
        //     text: "Location Name",
        //     textColor: "#FAFAF9",
        //     offsetX: 0,
        //     offsetY: 12,
        //     font: "bold 12px 'Minecraftia', Arial, sans-serif"
        // },
    ]
}
