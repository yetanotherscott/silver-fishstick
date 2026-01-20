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

        // ========== WILLIE'S HOUSE ==========
        {
            x: 280,
            z: 250,
            image: "marker_base.svg",
            imageAnchor: [0.5, 1],
            imageScale: 1,
            text: "Willie's House",
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
            image: "marker_boat.svg", // Using rail SVG for transportation/dock theme
            imageAnchor: [0.5, 1],
            imageScale: 1,
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
            image: "marker_base.svg", // Using rail SVG for transportation/dock theme
            imageAnchor: [0.5, 1],
            imageScale: 1,
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
            image: "marker_base.svg", // Using rail SVG for transportation/dock theme
            imageAnchor: [0.5, 1],
            imageScale: 1,
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
            image: "marker_farm.svg", // Using rail SVG for transportation/dock theme
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
            image: "marker_farm.svg", // Using rail SVG for transportation/dock theme
            imageAnchor: [0.5, 1],
            imageScale: 1,
            text: "Barn",
            textColor: "#FAFAF9",
            offsetX: 0,
            offsetY: 12,
            font: "bold 12px 'Minecraftia', Arial, sans-serif"
        },
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
