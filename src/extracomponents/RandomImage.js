export default function RandomImages() {
    let image;
    let imageArray = [
        "https://i.imgur.com/fawRchq.jpg",
        "https://boyter.org/static/books/Image-uploaded-from-iOS.jpg",
        "https://i.pinimg.com/originals/25/03/7e/25037ea8b075ea255db5144c88bb649e.jpg",
        "https://boyter.org/static/books/CgbR1wkXEAAMjqP.jpg",
        "https://i.imgur.com/B291AT0.jpg",
        "https://i.redd.it/54pzp7y39ax01.png",
        "https://i.pinimg.com/236x/7c/42/fc/7c42fc2db0ae0227405260fa3608a8b9--writing-code-python-programming.jpg",
        "https://boyter.org/static/books/Cg0x8vnXEAEB2Le.jpg",
        "https://i.pinimg.com/originals/f7/59/8a/f7598a1d0e03c6bcaab55ca4160898ac.jpg",
        "https://boyter.org/static/books/Cr7mS_OWcAA7Hzt.jpg",
        "https://boyter.org/static/books/CfSQdwUW8AErog1.jpg",
        "https://boyter.org/static/books/Cf7eHZ1W4AEeZJA.jpg",
        "https://i.imgur.com/44zhZ37.png",
    ];

    image = imageArray[Math.floor(Math.random() * imageArray.length)];

    return image;
}
