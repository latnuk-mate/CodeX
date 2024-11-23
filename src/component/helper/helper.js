function addItem(arr, setArr, obj){
    setArr((prevInput) => {
        return [...prevInput, obj]
    }); 
}

function removeItem(arr, setArr){
    let len = arr.length - 1;
    const data = arr.slice(0, len);
    setArr(data);
}


const helper = {
    handleAddItem : (arr, setArr, obj=null)=>{
        addItem(arr, setArr, obj)
    },

    handleRemoveItem : (arr, setArr)=>{
        removeItem(arr, setArr);
    },

    handleItem: (array, setArray, index, value)=>{
        const arr = [...array];
        arr[index] = value;
        setArray(arr) 
    },

}

export default helper;