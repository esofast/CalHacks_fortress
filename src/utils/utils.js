import songs from './songs.json';

export const sortJSON = (value) => {
    const arr = songs.fields;
    const x1 = value / 100;
    const y1 = 1 - (value / 100);

    const distance = (x1, x2, y1, y2) => {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    arr.sort((a, b) => {
        const d1 = distance(x1, a[4], y1, a[3]);
        const d2 = distance(x1, b[4], y1, b[3]);
        if (d1 < d2) {
            return 1;
        } else if (d1 > d2) {
            return -1;
        } else {
            return 0;
        }
    });

    console.log(arr)

    return arr;
};