import { Share } from "react-native"

const SharePlace = (place) => {
    const message = `Business Name: ${place.name}\nAddress: ${
        place.vicinity ? place.vicinity : place.formatted_address
    }`;

    Share.share({
        title: 'Share Business',
        message: message,
    });
};

export default {
    SharePlace
};