//the image in the api is way bigger then we actually need in the game Card
//in this api we have the ability to crop the image by adding crop/600/400 to the url after /media/
//for that we are going to create a function


const CropingImage = (url: string) => {
    if(!url) return ""
    let target = "/media/";
    // to get the url with the target value included
    let index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index)
}
export default CropingImage