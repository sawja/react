export const truncateString = (text, threshold) => {
    if (text.length > threshold) {
        return text.substring(0, threshold) + '...';
    } else {
        return text;
    }    
}