VISION_ENDPOINT = "https://computer-vision-github-universe.cognitiveservices.azure.com/"
VISION_KEY = "25993ad4f26045e5b70002e07ad24232"



const VisionServiceOptions = () => {
    serviceOptions = new VisionServiceOptions(
    new URL(System.getenv("VISION_ENDPOINT")),
    System.getenv("VISION_KEY"));
}

const VisionSource = () => {
    imageSource = VisionSource.fromUrl(
        new URL());
}