const colors = [
    "#cb997eff",
    "#ddbea9ff",
    "#ffe8d6ff",
    "#a5a58dff",
    "#6b705cff"
]

export const getRandomColor = () => {
    // const value = Math.floor(Math.random() * 16777215).toString(16);
    // return "#"+ value;
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}