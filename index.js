const sharp = require('sharp')

const fileList = [
    'Landscape_0.jpg',
    'Landscape_1.jpg',
    'Landscape_2.jpg',
    'Landscape_3.jpg',
    'Landscape_4.jpg',
    'Landscape_5.jpg',
    'Landscape_6.jpg',
    'Landscape_7.jpg',
    'Landscape_8.jpg',

    'Portrait_0.jpg',
    'Portrait_1.jpg',
    'Portrait_2.jpg',
    'Portrait_3.jpg',
    'Portrait_4.jpg',
    'Portrait_5.jpg',
    'Portrait_6.jpg',
    'Portrait_7.jpg',
    'Portrait_8.jpg',
];
fileList.map((file) => {
    const src = file;
    const output = 'output/without-rotate/' + file;

    sharp(src)
        .composite([{ input: './watermark.png', gravity: 'center' }])
        .sharpen()
        .withMetadata()
        .toFile(output)

})

fileList.map((file) => {
    const src = file;
    const output = 'output/with-rotate/' + file;

    sharp(src)
        .rotate()
        .composite([{ input: './watermark.png', gravity: 'center' }])
        .sharpen()
        .withMetadata()
        .toFile(output)

})
