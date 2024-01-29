const shuffle = (array) => { 
    const newArray = [...array]
    return newArray.sort(() => Math.random() - 0.5); 
}; 

export default shuffle;