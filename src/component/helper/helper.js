function addItem(arr, setArr, obj){
    setArr((prevInput) => {
        return [...prevInput, obj]
    }); 

    if(arr.length >= 5){
        alert('Can not add more than three rows!')
        arr.pop(); // remove the last elements
    }
}

function removeItem(arr, setArr){
    let len = arr.length - 1;
    const data = arr.slice(0, len);
    setArr(data);
}


const helper = {
    addSocialMedia : (arr, setArr, obj)=>{
        addItem(arr, setArr, obj)
    },

    removeSocialMedia : (arr, setArr)=>{
        removeItem(arr, setArr);
    },

    addEducation: (arr, setArr, obj)=>{
        addItem(arr, setArr, obj)
    },

    removeEducation : (arr, setArr)=>{
        removeItem(arr, setArr)
    },

    addWorkDetails: (arr, setArr, obj)=>{
        addItem(arr, setArr, obj)
    },

    removeWork : (arr, setArr)=>{
        removeItem(arr, setArr)
    },

    genKey: ()=>{
        const key = Math.floor(Math.random() * 10000);
        return key;
    },

    handleItem: (array, setArray, index, value)=>{
        const arr = [...array];
        arr[index] = value;
        setArray(arr) 
    },

}

export default helper;