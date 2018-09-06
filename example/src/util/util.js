export const truncateString = (value, threshold) => {
    if (value.length > threshold) {
        return value.substring(0, threshold) + '...';
    } else {
        return value;
    }    
}

