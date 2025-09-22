//832. Flipping an Image

var flipAndInvertImage = function(image) {
    let m = image.length;
    let n = image[0].length;

    for(let i = 0; i < m; ++i) {
        for(let j = 0; j < Math.floor(n / 2); ++j) {
            [image[i][j], image[i][n - 1 - j]] = [image[i][n - 1 - j], image[i][j]];
        }
    }

    for(let i = 0; i < m; ++i) {
        for(let j = 0; j < n; ++j) {
            image[i][j] = image[i][j] === 0 ? 1 : 0;
        }
    }

    return image;
};