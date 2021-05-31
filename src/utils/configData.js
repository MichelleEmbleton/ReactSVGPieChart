
const configData = data => {

    const col = () => ~~(Math.random() * 255) + 1;

    let newDataSet = data.map((el, idx, arr) => {           
        return { 
            ...el, 
            share: +el.share,
            color: el.color || `rgba(${col()}, ${col()}, ${col()}, 0.3)`,
            offSet: Object.values(arr)
                .map(el => +el.share)
                .map((_, i, arr2) => 
                    arr2.slice(0, i).reduce((acc, cur) => acc + cur, 0)
                )[idx]
        }          
    })

    const usedSpace = Object.values(newDataSet)
        .map(el => el.share)
        .reduce((acc, cur) => acc + cur, 0);
        
    if(usedSpace < 100){
        const freeSpace = {
            id: newDataSet.length + 1,
            title: "free space",
            share: 100 - usedSpace,
            color: "#fafafa",
            offSet: usedSpace
        };
        newDataSet = [ ...newDataSet, freeSpace ];
    } 
    return newDataSet;  
};

export default configData;

