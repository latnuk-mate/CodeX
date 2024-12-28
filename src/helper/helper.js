import axios from "axios";

// to add boxes..
function addItem(arr, setArr, obj){
    setArr((prevInput) => {
        return [...prevInput, obj]
    }); 
}

// remove input boxes
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

    /* function to put unique individual values for each input boxes. */
    handleItem: (array, setArray, index, value)=>{
        const arr = [...array];
        arr[index] = value;
        setArray(arr) 
    },

     logOut : (setUser)=>{
        axios.get('/logout')
      .then(res => {
        alert(res.data);
        setUser(null)
      })
  .catch(err => console.error(err.code));
}

}

export default helper;